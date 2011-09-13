// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator !x returns !ToBoolean(x)
 *
 * @section 11.4.9
 * @path 11_Expressions/11.4_Unary_Operators/11.4.9_Logical_NOT_Operator/S11.4.9_A3_T1.js
 * @description Type(x) is boolean primitive or Boolean object
 */

//CHECK#1
if (!false !== true) {
  $ERROR('#1: !false === true');
}

//CHECK#2
if (!new Boolean(true) !== false) {
  $ERROR('#2: !new Boolean(true) === false');
}

//CHECK#3
if (!new Boolean(false) !== false) {
  $ERROR('#3: !new Boolean(false) === false');
}
