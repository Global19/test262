// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x & y returns ToNumber(x) & ToNumber(y)
 *
 * @section 11.10.1
 * @path 11_Expressions/11.10_Binary_Bitwise_Operators/11.10.1_AND_Operator/S11.10.1_A3_T2.5.js
 * @description Type(x) us different from Type(y) and both types are String (primitive or object) or Boolean (primitive and object)
 */

//CHECK#1
if ((true & "1") !== 1) {
  $ERROR('#1: (true & "1") === 1. Actual: ' + ((true & "1")));
}

//CHECK#2
if (("1" & true) !== 1) {
  $ERROR('#2: ("1" & true) === 1. Actual: ' + (("1" & true)));
}

//CHECK#3
if ((new Boolean(true) & "1") !== 1) {
  $ERROR('#3: (new Boolean(true) & "1") === 1. Actual: ' + ((new Boolean(true) & "1")));
}

//CHECK#4
if (("1" & new Boolean(true)) !== 1) {
  $ERROR('#4: ("1" & new Boolean(true)) === 1. Actual: ' + (("1" & new Boolean(true))));
}

//CHECK#5
if ((true & new String("1")) !== 1) {
  $ERROR('#5: (true & new String("1")) === 1. Actual: ' + ((true & new String("1"))));
}

//CHECK#6
if ((new String("1") & true) !== 1) {
  $ERROR('#6: (new String("1") & true) === 1. Actual: ' + ((new String("1") & true)));
}

//CHECK#7
if ((new Boolean(true) & new String("1")) !== 1) {
  $ERROR('#7: (new Boolean(true) & new String("1")) === 1. Actual: ' + ((new Boolean(true) & new String("1"))));
}

//CHECK#8
if ((new String("1") & new Boolean(true)) !== 1) {
  $ERROR('#8: (new String("1") & new Boolean(true)) === 1. Actual: ' + ((new String("1") & new Boolean(true))));
}
