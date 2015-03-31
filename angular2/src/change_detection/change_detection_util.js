System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "./proto_record", "./exceptions", "./pipes/pipe", "./interfaces"], function($__export) {
  "use strict";
  var isPresent,
      isBlank,
      BaseException,
      Type,
      List,
      ListWrapper,
      MapWrapper,
      StringMapWrapper,
      ProtoRecord,
      ExpressionChangedAfterItHasBeenChecked,
      NO_CHANGE,
      ChangeRecord,
      ChangeDetector,
      CHECK_ALWAYS,
      CHECK_ONCE,
      CHECKED,
      DETACHED,
      uninitialized,
      SimpleChange,
      _simpleChangesIndex,
      _simpleChanges,
      _changeRecordsIndex,
      _changeRecords,
      _singleElementList,
      ChangeDetectionUtil;
  function _simpleChange(previousValue, currentValue) {
    var index = _simpleChangesIndex++ % 20;
    var s = _simpleChanges[index];
    s.previousValue = previousValue;
    s.currentValue = currentValue;
    return s;
  }
  function _changeRecord(bindingMemento, change) {
    var index = _changeRecordsIndex++ % 20;
    var s = _changeRecords[index];
    s.bindingMemento = bindingMemento;
    s.change = change;
    return s;
  }
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
      Type = $__m.Type;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
      StringMapWrapper = $__m.StringMapWrapper;
    }, function($__m) {
      ProtoRecord = $__m.ProtoRecord;
    }, function($__m) {
      ExpressionChangedAfterItHasBeenChecked = $__m.ExpressionChangedAfterItHasBeenChecked;
    }, function($__m) {
      NO_CHANGE = $__m.NO_CHANGE;
    }, function($__m) {
      ChangeRecord = $__m.ChangeRecord;
      ChangeDetector = $__m.ChangeDetector;
      CHECK_ALWAYS = $__m.CHECK_ALWAYS;
      CHECK_ONCE = $__m.CHECK_ONCE;
      CHECKED = $__m.CHECKED;
      DETACHED = $__m.DETACHED;
    }],
    execute: function() {
      uninitialized = $__export("uninitialized", new Object());
      SimpleChange = $__export("SimpleChange", (function() {
        var SimpleChange = function SimpleChange(previousValue, currentValue) {
          this.previousValue = previousValue;
          this.currentValue = currentValue;
        };
        return ($traceurRuntime.createClass)(SimpleChange, {}, {});
      }()));
      Object.defineProperty(SimpleChange, "parameters", {get: function() {
          return [[assert.type.any], [assert.type.any]];
        }});
      _simpleChangesIndex = 0;
      _simpleChanges = [new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null)];
      _changeRecordsIndex = 0;
      _changeRecords = [new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null)];
      _singleElementList = [null];
      ChangeDetectionUtil = $__export("ChangeDetectionUtil", (function() {
        var ChangeDetectionUtil = function ChangeDetectionUtil() {
          ;
        };
        return ($traceurRuntime.createClass)(ChangeDetectionUtil, {}, {
          unitialized: function() {
            return uninitialized;
          },
          arrayFn0: function() {
            return [];
          },
          arrayFn1: function(a1) {
            return [a1];
          },
          arrayFn2: function(a1, a2) {
            return [a1, a2];
          },
          arrayFn3: function(a1, a2, a3) {
            return [a1, a2, a3];
          },
          arrayFn4: function(a1, a2, a3, a4) {
            return [a1, a2, a3, a4];
          },
          arrayFn5: function(a1, a2, a3, a4, a5) {
            return [a1, a2, a3, a4, a5];
          },
          arrayFn6: function(a1, a2, a3, a4, a5, a6) {
            return [a1, a2, a3, a4, a5, a6];
          },
          arrayFn7: function(a1, a2, a3, a4, a5, a6, a7) {
            return [a1, a2, a3, a4, a5, a6, a7];
          },
          arrayFn8: function(a1, a2, a3, a4, a5, a6, a7, a8) {
            return [a1, a2, a3, a4, a5, a6, a7, a8];
          },
          arrayFn9: function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
            return [a1, a2, a3, a4, a5, a6, a7, a8, a9];
          },
          operation_negate: function(value) {
            return !value;
          },
          operation_add: function(left, right) {
            return left + right;
          },
          operation_subtract: function(left, right) {
            return left - right;
          },
          operation_multiply: function(left, right) {
            return left * right;
          },
          operation_divide: function(left, right) {
            return left / right;
          },
          operation_remainder: function(left, right) {
            return left % right;
          },
          operation_equals: function(left, right) {
            return left == right;
          },
          operation_not_equals: function(left, right) {
            return left != right;
          },
          operation_less_then: function(left, right) {
            return left < right;
          },
          operation_greater_then: function(left, right) {
            return left > right;
          },
          operation_less_or_equals_then: function(left, right) {
            return left <= right;
          },
          operation_greater_or_equals_then: function(left, right) {
            return left >= right;
          },
          operation_logical_and: function(left, right) {
            return left && right;
          },
          operation_logical_or: function(left, right) {
            return left || right;
          },
          cond: function(cond, trueVal, falseVal) {
            return cond ? trueVal : falseVal;
          },
          mapFn: function(keys) {
            function buildMap(values) {
              var res = StringMapWrapper.create();
              for (var i = 0; i < keys.length; ++i) {
                StringMapWrapper.set(res, keys[i], values[i]);
              }
              return res;
            }
            switch (keys.length) {
              case 0:
                return (function() {
                  return [];
                });
              case 1:
                return (function(a1) {
                  return buildMap([a1]);
                });
              case 2:
                return (function(a1, a2) {
                  return buildMap([a1, a2]);
                });
              case 3:
                return (function(a1, a2, a3) {
                  return buildMap([a1, a2, a3]);
                });
              case 4:
                return (function(a1, a2, a3, a4) {
                  return buildMap([a1, a2, a3, a4]);
                });
              case 5:
                return (function(a1, a2, a3, a4, a5) {
                  return buildMap([a1, a2, a3, a4, a5]);
                });
              case 6:
                return (function(a1, a2, a3, a4, a5, a6) {
                  return buildMap([a1, a2, a3, a4, a5, a6]);
                });
              case 7:
                return (function(a1, a2, a3, a4, a5, a6, a7) {
                  return buildMap([a1, a2, a3, a4, a5, a6, a7]);
                });
              case 8:
                return (function(a1, a2, a3, a4, a5, a6, a7, a8) {
                  return buildMap([a1, a2, a3, a4, a5, a6, a7, a8]);
                });
              case 9:
                return (function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
                  return buildMap([a1, a2, a3, a4, a5, a6, a7, a8, a9]);
                });
              default:
                throw new BaseException("Does not support literal maps with more than 9 elements");
            }
          },
          keyedAccess: function(obj, args) {
            return obj[args[0]];
          },
          noChangeMarker: function(value) {
            return value === NO_CHANGE;
          },
          throwOnChange: function(proto, change) {
            throw new ExpressionChangedAfterItHasBeenChecked(proto, change);
          },
          simpleChange: function(previousValue, currentValue) {
            return _simpleChange(previousValue, currentValue);
          },
          changeRecord: function(memento, change) {
            return _changeRecord(memento, change);
          },
          simpleChangeRecord: function(memento, previousValue, currentValue) {
            return _changeRecord(memento, _simpleChange(previousValue, currentValue));
          },
          addRecord: function(updatedRecords, changeRecord) {
            if (isBlank(updatedRecords)) {
              updatedRecords = _singleElementList;
              updatedRecords[0] = changeRecord;
            } else if (updatedRecords === _singleElementList) {
              updatedRecords = [_singleElementList[0], changeRecord];
            } else {
              ListWrapper.push(updatedRecords, changeRecord);
            }
            return updatedRecords;
          }
        });
      }()));
      Object.defineProperty(ChangeDetectionUtil.mapFn, "parameters", {get: function() {
          return [[List]];
        }});
      Object.defineProperty(ChangeDetectionUtil.throwOnChange, "parameters", {get: function() {
          return [[ProtoRecord], []];
        }});
      Object.defineProperty(ChangeDetectionUtil.simpleChange, "parameters", {get: function() {
          return [[assert.type.any], [assert.type.any]];
        }});
      Object.defineProperty(ChangeDetectionUtil.changeRecord, "parameters", {get: function() {
          return [[assert.type.any], [assert.type.any]];
        }});
      Object.defineProperty(ChangeDetectionUtil.simpleChangeRecord, "parameters", {get: function() {
          return [[assert.type.any], [assert.type.any], [assert.type.any]];
        }});
      Object.defineProperty(ChangeDetectionUtil.addRecord, "parameters", {get: function() {
          return [[List], [ChangeRecord]];
        }});
    }
  };
});
//# sourceMappingURL=change_detection_util.js.map

//# sourceMappingURL=../../src/change_detection/change_detection_util.js.map