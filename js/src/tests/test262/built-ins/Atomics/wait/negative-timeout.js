// |reftest| skip-if(!xulRuntime.shell||!this.hasOwnProperty('Atomics')||!this.hasOwnProperty('SharedArrayBuffer')||(this.hasOwnProperty('getBuildConfiguration')&&getBuildConfiguration("arm64-simulator"))) -- browser cannot block main thread, Atomics,SharedArrayBuffer is not enabled unconditionally, ARM64 Simulator cannot emulate atomics
// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: >
  Test that Atomics.wait times out with a negative timeout
features: [Atomics, SharedArrayBuffer, TypedArray]
flags: [CanBlockIsTrue]
---*/

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4)
);

assert.sameValue(
  Atomics.wait(i32a, 0, 0, -1),
  "timed-out",
  'Atomics.wait(i32a, 0, 0, -1) returns "timed-out"'
);

reportCompare(0, 0);
