// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Belt_Map = require("bs-platform/lib/js/belt_Map.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function isEmpty(xs) {
  return xs.length === 0;
}

function lastUnsafe(ar) {
  return ar[ar.length - 1 | 0];
}

function last(ar) {
  if (ar.length === 0) {
    return ;
  } else {
    return Caml_option.some(lastUnsafe(ar));
  }
}

function groupBy(xs, keyFn, id) {
  var empty = Belt_Map.make(id);
  return Belt_Map.map(Belt_Array.reduceU(xs, empty, (function (res, x) {
                    var k = keyFn(x);
                    return Belt_Map.updateU(res, k, (function (v) {
                                  if (v !== undefined) {
                                    return {
                                            hd: x,
                                            tl: v
                                          };
                                  } else {
                                    return {
                                            hd: x,
                                            tl: /* [] */0
                                          };
                                  }
                                }));
                  })), Belt_List.toArray);
}

exports.isEmpty = isEmpty;
exports.last = last;
exports.lastUnsafe = lastUnsafe;
exports.groupBy = groupBy;
/* No side effect */
