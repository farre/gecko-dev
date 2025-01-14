/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

"use strict";

add_task(async function () {
  const dbg = await initDebugger("ember/quickstart/dist/");
  dbg.actions.toggleMapScopes();

  await invokeWithBreakpoint(
    dbg,
    "mapTestFunction",
    "router.js",
    { line: 13, column: 3 },
    async () => {
      await assertScopes(dbg, [
        "Module",
        ["config", "{\u2026}"],
        "EmberRouter:Class()",
        "Router:Class()",
      ]);
    }
  );
});
