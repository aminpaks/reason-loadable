'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var DynamicImport = require("bs-dynamic-import/src/DynamicImport.bs.js");

function WithRender() {
  var component = ReasonReact.reducerComponent("Loadable.WithRender");
  var make = function (fetch, $staropt$star, $staropt$star$1, $staropt$star$2, render, _) {
    var onFail = $staropt$star ? $staropt$star[0] : (function () {
          return null;
        });
    var onLoading = $staropt$star$1 ? $staropt$star$1[0] : (function () {
          return null;
        });
    var delay = $staropt$star$2 ? $staropt$star$2[0] : 200;
    var newrecord = component.slice();
    newrecord[/* render */9] = (function (param) {
        var state = param[/* state */2];
        if (typeof state === "number") {
          return Curry._1(onLoading, /* () */0);
        } else if (state.tag) {
          return Curry._1(render, state[0]);
        } else {
          return Curry._1(onFail, state[0]);
        }
      });
    newrecord[/* initialState */10] = (function () {
        return /* Loading */0;
      });
    newrecord[/* reducer */12] = (function (action, _) {
        if (typeof action === "number") {
          return /* Update */Block.__(0, [/* Loading */0]);
        } else if (action.tag) {
          return /* Update */Block.__(0, [/* Loaded */Block.__(1, [action[0]])]);
        } else {
          return /* Update */Block.__(0, [/* Failed */Block.__(0, [action[0]])]);
        }
      });
    newrecord[/* subscriptions */13] = (function (self) {
        return /* :: */[
                /* Sub */[
                  (function () {
                      return setTimeout((function () {
                                    DynamicImport.$less$$bang$great(DynamicImport.$less$$great(DynamicImport.resolve(Curry._1(fetch, /* () */0)), (function (data) {
                                                return Curry._1(self[/* send */4], /* Loaded */Block.__(1, [data]));
                                              })), (function (err) {
                                            return Curry._1(self[/* send */4], /* Failed */Block.__(0, [String(err)]));
                                          }));
                                    return /* () */0;
                                  }), delay);
                    }),
                  (function (prim) {
                      clearTimeout(prim);
                      return /* () */0;
                    })
                ],
                /* [] */0
              ];
      });
    return newrecord;
  };
  return /* module */[
          /* component */component,
          /* make */make
        ];
}

function WithChildren() {
  var component = ReasonReact.reducerComponent("Loadable.WithChildren");
  var make = function (fetch, $staropt$star, $staropt$star$1, $staropt$star$2, children) {
    var onFail = $staropt$star ? $staropt$star[0] : (function () {
          return null;
        });
    var onLoading = $staropt$star$1 ? $staropt$star$1[0] : (function () {
          return null;
        });
    var delay = $staropt$star$2 ? $staropt$star$2[0] : 200;
    var newrecord = component.slice();
    newrecord[/* render */9] = (function (param) {
        var state = param[/* state */2];
        if (typeof state === "number") {
          return Curry._1(onLoading, /* () */0);
        } else if (state.tag) {
          return Curry._1(children, state[0]);
        } else {
          return Curry._1(onFail, state[0]);
        }
      });
    newrecord[/* initialState */10] = (function () {
        return /* Loading */0;
      });
    newrecord[/* reducer */12] = (function (action, _) {
        if (typeof action === "number") {
          return /* Update */Block.__(0, [/* Loading */0]);
        } else if (action.tag) {
          return /* Update */Block.__(0, [/* Loaded */Block.__(1, [action[0]])]);
        } else {
          return /* Update */Block.__(0, [/* Failed */Block.__(0, [action[0]])]);
        }
      });
    newrecord[/* subscriptions */13] = (function (self) {
        return /* :: */[
                /* Sub */[
                  (function () {
                      return setTimeout((function () {
                                    DynamicImport.$less$$bang$great(DynamicImport.$less$$great(DynamicImport.resolve(Curry._1(fetch, /* () */0)), (function (data) {
                                                return Curry._1(self[/* send */4], /* Loaded */Block.__(1, [data]));
                                              })), (function (err) {
                                            return Curry._1(self[/* send */4], /* Failed */Block.__(0, [String(err)]));
                                          }));
                                    return /* () */0;
                                  }), delay);
                    }),
                  (function (prim) {
                      clearTimeout(prim);
                      return /* () */0;
                    })
                ],
                /* [] */0
              ];
      });
    return newrecord;
  };
  return /* module */[
          /* component */component,
          /* make */make
        ];
}

exports.WithRender = WithRender;
exports.WithChildren = WithChildren;
/* ReasonReact Not a pure module */
