System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "./abstract_change_detector", "./change_detection_util", "./proto_record"], function($__export) {
  "use strict";
  var isPresent,
      isBlank,
      BaseException,
      Type,
      List,
      ListWrapper,
      MapWrapper,
      StringMapWrapper,
      AbstractChangeDetector,
      ChangeDetectionUtil,
      ProtoRecord,
      RECORD_TYPE_SELF,
      RECORD_TYPE_PROPERTY,
      RECORD_TYPE_LOCAL,
      RECORD_TYPE_INVOKE_METHOD,
      RECORD_TYPE_CONST,
      RECORD_TYPE_INVOKE_CLOSURE,
      RECORD_TYPE_PRIMITIVE_OP,
      RECORD_TYPE_KEYED_ACCESS,
      RECORD_TYPE_PIPE,
      RECORD_TYPE_INTERPOLATE,
      ABSTRACT_CHANGE_DETECTOR,
      UTIL,
      DISPATCHER_ACCESSOR,
      PIPE_REGISTRY_ACCESSOR,
      PROTOS_ACCESSOR,
      CONTEXT_ACCESSOR,
      CHANGE_LOCAL,
      CHANGES_LOCAL,
      LOCALS_ACCESSOR,
      TEMP_LOCAL,
      ChangeDetectorJITGenerator;
  function typeTemplate(type, cons, detectChanges, setContext) {
    return ("\n" + cons + "\n" + detectChanges + "\n" + setContext + ";\n\nreturn function(dispatcher, pipeRegistry) {\n  return new " + type + "(dispatcher, pipeRegistry, protos);\n}\n");
  }
  function constructorTemplate(type, fieldsDefinitions) {
    return ("\nvar " + type + " = function " + type + "(dispatcher, pipeRegistry, protos) {\n" + ABSTRACT_CHANGE_DETECTOR + ".call(this);\n" + DISPATCHER_ACCESSOR + " = dispatcher;\n" + PIPE_REGISTRY_ACCESSOR + " = pipeRegistry;\n" + PROTOS_ACCESSOR + " = protos;\n" + fieldsDefinitions + "\n}\n\n" + type + ".prototype = Object.create(" + ABSTRACT_CHANGE_DETECTOR + ".prototype);\n");
  }
  function pipeOnDestroyTemplate(pipeNames) {
    return pipeNames.map((function(p) {
      return (p + ".onDestroy()");
    })).join("\n");
  }
  function hydrateTemplate(type, fieldsDefinitions, pipeOnDestroy) {
    return ("\n" + type + ".prototype.hydrate = function(context, locals) {\n  " + CONTEXT_ACCESSOR + " = context;\n  " + LOCALS_ACCESSOR + " = locals;\n}\n" + type + ".prototype.dehydrate = function() {\n  " + pipeOnDestroy + "\n  " + fieldsDefinitions + "\n  " + LOCALS_ACCESSOR + " = null;\n}\n" + type + ".prototype.hydrated = function() {\n  return " + CONTEXT_ACCESSOR + " !== " + UTIL + ".unitialized();\n}\n");
  }
  function detectChangesTemplate(type, body) {
    return ("\n" + type + ".prototype.detectChangesInRecords = function(throwOnChange) {\n  " + body + "\n}\n");
  }
  function bodyTemplate(localDefinitions, changeDefinitions, records) {
    return ("\n" + localDefinitions + "\n" + changeDefinitions + "\nvar " + TEMP_LOCAL + ";\nvar " + CHANGE_LOCAL + ";\nvar " + CHANGES_LOCAL + " = null;\n\ncontext = " + CONTEXT_ACCESSOR + ";\n" + records + "\n");
  }
  function notifyTemplate(index) {
    return ("\nif (" + CHANGES_LOCAL + " && " + CHANGES_LOCAL + ".length > 0) {\n  if(throwOnChange) " + UTIL + ".throwOnChange(" + PROTOS_ACCESSOR + "[" + index + "], " + CHANGES_LOCAL + "[0]);\n  " + DISPATCHER_ACCESSOR + ".onRecordChange(" + PROTOS_ACCESSOR + "[" + index + "].directiveMemento, " + CHANGES_LOCAL + ");\n  " + CHANGES_LOCAL + " = null;\n}\n");
  }
  function pipeCheckTemplate(context, pipe, pipeType, value, change, addRecord, notify) {
    return ("\nif (" + pipe + " === " + UTIL + ".unitialized()) {\n  " + pipe + " = " + PIPE_REGISTRY_ACCESSOR + ".get('" + pipeType + "', " + context + ");\n} else if (!" + pipe + ".supports(" + context + ")) {\n  " + pipe + ".onDestroy();\n  " + pipe + " = " + PIPE_REGISTRY_ACCESSOR + ".get('" + pipeType + "', " + context + ");\n}\n\n" + CHANGE_LOCAL + " = " + pipe + ".transform(" + context + ");\nif (! " + UTIL + ".noChangeMarker(" + CHANGE_LOCAL + ")) {\n  " + value + " = " + CHANGE_LOCAL + ";\n  " + change + " = true;\n  " + addRecord + "\n}\n" + notify + "\n");
  }
  function referenceCheckTemplate(assignment, newValue, oldValue, change, addRecord, notify) {
    return ("\n" + assignment + "\nif (" + newValue + " !== " + oldValue + " || (" + newValue + " !== " + newValue + ") && (" + oldValue + " !== " + oldValue + ")) {\n  " + change + " = true;\n  " + addRecord + "\n  " + oldValue + " = " + newValue + ";\n}\n" + notify + "\n");
  }
  function assignmentTemplate(field, value) {
    return (field + " = " + value + ";");
  }
  function localDefinitionsTemplate(names) {
    return names.map((function(n) {
      return ("var " + n + ";");
    })).join("\n");
  }
  function changeDefinitionsTemplate(names) {
    return names.map((function(n) {
      return ("var " + n + " = false;");
    })).join("\n");
  }
  function fieldDefinitionsTemplate(names) {
    return names.map((function(n) {
      return (n + " = " + UTIL + ".unitialized();");
    })).join("\n");
  }
  function ifChangedGuardTemplate(changeNames, body) {
    var cond = changeNames.join(" || ");
    return ("\nif (" + cond + ") {\n  " + body + "\n}\n");
  }
  function addSimpleChangeRecordTemplate(protoIndex, oldValue, newValue) {
    return (CHANGES_LOCAL + " = " + UTIL + ".addRecord(" + CHANGES_LOCAL + ",\n    " + UTIL + ".simpleChangeRecord(" + PROTOS_ACCESSOR + "[" + protoIndex + "].bindingMemento, " + oldValue + ", " + newValue + "));");
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
      AbstractChangeDetector = $__m.AbstractChangeDetector;
    }, function($__m) {
      ChangeDetectionUtil = $__m.ChangeDetectionUtil;
    }, function($__m) {
      ProtoRecord = $__m.ProtoRecord;
      RECORD_TYPE_SELF = $__m.RECORD_TYPE_SELF;
      RECORD_TYPE_PROPERTY = $__m.RECORD_TYPE_PROPERTY;
      RECORD_TYPE_LOCAL = $__m.RECORD_TYPE_LOCAL;
      RECORD_TYPE_INVOKE_METHOD = $__m.RECORD_TYPE_INVOKE_METHOD;
      RECORD_TYPE_CONST = $__m.RECORD_TYPE_CONST;
      RECORD_TYPE_INVOKE_CLOSURE = $__m.RECORD_TYPE_INVOKE_CLOSURE;
      RECORD_TYPE_PRIMITIVE_OP = $__m.RECORD_TYPE_PRIMITIVE_OP;
      RECORD_TYPE_KEYED_ACCESS = $__m.RECORD_TYPE_KEYED_ACCESS;
      RECORD_TYPE_PIPE = $__m.RECORD_TYPE_PIPE;
      RECORD_TYPE_INTERPOLATE = $__m.RECORD_TYPE_INTERPOLATE;
    }],
    execute: function() {
      ABSTRACT_CHANGE_DETECTOR = "AbstractChangeDetector";
      UTIL = "ChangeDetectionUtil";
      DISPATCHER_ACCESSOR = "this.dispatcher";
      PIPE_REGISTRY_ACCESSOR = "this.pipeRegistry";
      PROTOS_ACCESSOR = "this.protos";
      CONTEXT_ACCESSOR = "this.context";
      CHANGE_LOCAL = "change";
      CHANGES_LOCAL = "changes";
      LOCALS_ACCESSOR = "this.locals";
      TEMP_LOCAL = "temp";
      Object.defineProperty(typeTemplate, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(constructorTemplate, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(pipeOnDestroyTemplate, "parameters", {get: function() {
          return [[List]];
        }});
      Object.defineProperty(hydrateTemplate, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(detectChangesTemplate, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(bodyTemplate, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(notifyTemplate, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
      Object.defineProperty(pipeCheckTemplate, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(assignmentTemplate, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(localDefinitionsTemplate, "parameters", {get: function() {
          return [[List]];
        }});
      Object.defineProperty(changeDefinitionsTemplate, "parameters", {get: function() {
          return [[List]];
        }});
      Object.defineProperty(fieldDefinitionsTemplate, "parameters", {get: function() {
          return [[List]];
        }});
      Object.defineProperty(ifChangedGuardTemplate, "parameters", {get: function() {
          return [[List], [assert.type.string]];
        }});
      Object.defineProperty(addSimpleChangeRecordTemplate, "parameters", {get: function() {
          return [[assert.type.number], [assert.type.string], [assert.type.string]];
        }});
      ChangeDetectorJITGenerator = $__export("ChangeDetectorJITGenerator", (function() {
        var ChangeDetectorJITGenerator = function ChangeDetectorJITGenerator(typeName, records) {
          this.typeName = typeName;
          this.records = records;
          this.localNames = this.getLocalNames(records);
          this.changeNames = this.getChangeNames(this.localNames);
          this.fieldNames = this.getFieldNames(this.localNames);
          this.pipeNames = this.getPipeNames(this.localNames);
        };
        return ($traceurRuntime.createClass)(ChangeDetectorJITGenerator, {
          getLocalNames: function(records) {
            var index = 0;
            var names = records.map((function(r) {
              var sanitizedName = r.name.replace(new RegExp("\\W", "g"), '');
              return ("" + sanitizedName + index++);
            }));
            return ["context"].concat(names);
          },
          getChangeNames: function(localNames) {
            return localNames.map((function(n) {
              return ("change_" + n);
            }));
          },
          getFieldNames: function(localNames) {
            return localNames.map((function(n) {
              return ("this." + n);
            }));
          },
          getPipeNames: function(localNames) {
            return localNames.map((function(n) {
              return ("this." + n + "_pipe");
            }));
          },
          generate: function() {
            var text = typeTemplate(this.typeName, this.genConstructor(), this.genDetectChanges(), this.genHydrate());
            return new Function('AbstractChangeDetector', 'ChangeDetectionUtil', 'protos', text)(AbstractChangeDetector, ChangeDetectionUtil, this.records);
          },
          genConstructor: function() {
            return constructorTemplate(this.typeName, this.genFieldDefinitions());
          },
          genHydrate: function() {
            return hydrateTemplate(this.typeName, this.genFieldDefinitions(), pipeOnDestroyTemplate(this.getnonNullPipeNames()));
          },
          genFieldDefinitions: function() {
            var fields = [];
            fields = fields.concat(this.fieldNames);
            fields = fields.concat(this.getnonNullPipeNames());
            return fieldDefinitionsTemplate(fields);
          },
          getnonNullPipeNames: function() {
            var $__0 = this;
            var pipes = [];
            this.records.forEach((function(r) {
              if (r.mode === RECORD_TYPE_PIPE) {
                pipes.push($__0.pipeNames[r.selfIndex]);
              }
            }));
            return pipes;
          },
          genDetectChanges: function() {
            var body = this.genBody();
            return detectChangesTemplate(this.typeName, body);
          },
          genBody: function() {
            var $__0 = this;
            var rec = this.records.map((function(r) {
              return $__0.genRecord(r);
            })).join("\n");
            return bodyTemplate(this.genLocalDefinitions(), this.genChangeDefinitions(), rec);
          },
          genLocalDefinitions: function() {
            return localDefinitionsTemplate(this.localNames);
          },
          genChangeDefinitions: function() {
            return changeDefinitionsTemplate(this.changeNames);
          },
          genRecord: function(r) {
            if (r.mode === RECORD_TYPE_PIPE) {
              return this.genPipeCheck(r);
            } else {
              return this.genReferenceCheck(r);
            }
          },
          genPipeCheck: function(r) {
            var context = this.localNames[r.contextIndex];
            var pipe = this.pipeNames[r.selfIndex];
            var newValue = this.localNames[r.selfIndex];
            var oldValue = this.fieldNames[r.selfIndex];
            var change = this.changeNames[r.selfIndex];
            var addRecord = addSimpleChangeRecordTemplate(r.selfIndex - 1, oldValue, newValue);
            var notify = this.genNotify(r);
            return pipeCheckTemplate(context, pipe, r.name, newValue, change, addRecord, notify);
          },
          genReferenceCheck: function(r) {
            var newValue = this.localNames[r.selfIndex];
            var oldValue = this.fieldNames[r.selfIndex];
            var change = this.changeNames[r.selfIndex];
            var assignment = this.genUpdateCurrentValue(r);
            var addRecord = addSimpleChangeRecordTemplate(r.selfIndex - 1, oldValue, newValue);
            var notify = this.genNotify(r);
            var check = referenceCheckTemplate(assignment, newValue, oldValue, change, r.lastInBinding ? addRecord : '', notify);
            ;
            if (r.isPureFunction()) {
              return this.ifChangedGuard(r, check);
            } else {
              return check;
            }
          },
          genUpdateCurrentValue: function(r) {
            var context = this.localNames[r.contextIndex];
            var newValue = this.localNames[r.selfIndex];
            var args = this.genArgs(r);
            switch (r.mode) {
              case RECORD_TYPE_SELF:
                return assignmentTemplate(newValue, context);
              case RECORD_TYPE_CONST:
                return (newValue + " = " + this.genLiteral(r.funcOrValue));
              case RECORD_TYPE_PROPERTY:
                return assignmentTemplate(newValue, (context + "." + r.name));
              case RECORD_TYPE_LOCAL:
                return assignmentTemplate(newValue, (LOCALS_ACCESSOR + ".get('" + r.name + "')"));
              case RECORD_TYPE_INVOKE_METHOD:
                return assignmentTemplate(newValue, (context + "." + r.name + "(" + args + ")"));
              case RECORD_TYPE_INVOKE_CLOSURE:
                return assignmentTemplate(newValue, (context + "(" + args + ")"));
              case RECORD_TYPE_PRIMITIVE_OP:
                return assignmentTemplate(newValue, (UTIL + "." + r.name + "(" + args + ")"));
              case RECORD_TYPE_INTERPOLATE:
                return assignmentTemplate(newValue, this.genInterpolation(r));
              case RECORD_TYPE_KEYED_ACCESS:
                var key = this.localNames[r.args[0]];
                return assignmentTemplate(newValue, (context + "[" + key + "]"));
              default:
                throw new BaseException(("Unknown operation " + r.mode));
            }
          },
          ifChangedGuard: function(r, body) {
            var $__0 = this;
            return ifChangedGuardTemplate(r.args.map((function(a) {
              return $__0.changeNames[a];
            })), body);
          },
          genInterpolation: function(r) {
            var res = "";
            for (var i = 0; i < r.args.length; ++i) {
              res += this.genLiteral(r.fixedArgs[i]);
              res += " + ";
              res += this.localNames[r.args[i]];
              res += " + ";
            }
            res += this.genLiteral(r.fixedArgs[r.args.length]);
            return res;
          },
          genLiteral: function(value) {
            return JSON.stringify(value);
          },
          genNotify: function(r) {
            return r.lastInDirective ? notifyTemplate(r.selfIndex - 1) : '';
          },
          genArgs: function(r) {
            var $__0 = this;
            return r.args.map((function(arg) {
              return $__0.localNames[arg];
            })).join(", ");
          }
        }, {});
      }()));
      Object.defineProperty(ChangeDetectorJITGenerator, "parameters", {get: function() {
          return [[assert.type.string], [assert.genericType(List, ProtoRecord)]];
        }});
      Object.defineProperty(ChangeDetectorJITGenerator.prototype.getLocalNames, "parameters", {get: function() {
          return [[assert.genericType(List, ProtoRecord)]];
        }});
      Object.defineProperty(ChangeDetectorJITGenerator.prototype.getChangeNames, "parameters", {get: function() {
          return [[assert.genericType(List, String)]];
        }});
      Object.defineProperty(ChangeDetectorJITGenerator.prototype.getFieldNames, "parameters", {get: function() {
          return [[assert.genericType(List, String)]];
        }});
      Object.defineProperty(ChangeDetectorJITGenerator.prototype.getPipeNames, "parameters", {get: function() {
          return [[assert.genericType(List, String)]];
        }});
      Object.defineProperty(ChangeDetectorJITGenerator.prototype.genRecord, "parameters", {get: function() {
          return [[ProtoRecord]];
        }});
      Object.defineProperty(ChangeDetectorJITGenerator.prototype.genPipeCheck, "parameters", {get: function() {
          return [[ProtoRecord]];
        }});
      Object.defineProperty(ChangeDetectorJITGenerator.prototype.genReferenceCheck, "parameters", {get: function() {
          return [[ProtoRecord]];
        }});
      Object.defineProperty(ChangeDetectorJITGenerator.prototype.genUpdateCurrentValue, "parameters", {get: function() {
          return [[ProtoRecord]];
        }});
      Object.defineProperty(ChangeDetectorJITGenerator.prototype.ifChangedGuard, "parameters", {get: function() {
          return [[ProtoRecord], [assert.type.string]];
        }});
      Object.defineProperty(ChangeDetectorJITGenerator.prototype.genInterpolation, "parameters", {get: function() {
          return [[ProtoRecord]];
        }});
      Object.defineProperty(ChangeDetectorJITGenerator.prototype.genArgs, "parameters", {get: function() {
          return [[ProtoRecord]];
        }});
    }
  };
});

//# sourceMappingURL=src/change_detection/change_detection_jit_generator.map

//# sourceMappingURL=../../src/change_detection/change_detection_jit_generator.js.map