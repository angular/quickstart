System.register(["angular2/src/facade/lang", "angular2/src/facade/collection"], function($__export) {
  "use strict";
  var autoConvertAdd,
      isBlank,
      isPresent,
      FunctionWrapper,
      BaseException,
      List,
      Map,
      ListWrapper,
      StringMapWrapper,
      AST,
      EmptyExpr,
      ImplicitReceiver,
      Chain,
      Conditional,
      AccessMember,
      KeyedAccess,
      Pipe,
      LiteralPrimitive,
      LiteralArray,
      LiteralMap,
      Interpolation,
      Binary,
      PrefixNot,
      Assignment,
      MethodCall,
      FunctionCall,
      ASTWithSource,
      TemplateBinding,
      AstVisitor,
      _evalListCache;
  function evalList(context, locals, exps) {
    var length = exps.length;
    if (length > 10) {
      throw new BaseException("Cannot have more than 10 argument");
    }
    var result = _evalListCache[length];
    for (var i = 0; i < length; i++) {
      result[i] = exps[i].eval(context, locals);
    }
    return result;
  }
  return {
    setters: [function($__m) {
      autoConvertAdd = $__m.autoConvertAdd;
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
      FunctionWrapper = $__m.FunctionWrapper;
      BaseException = $__m.BaseException;
    }, function($__m) {
      List = $__m.List;
      Map = $__m.Map;
      ListWrapper = $__m.ListWrapper;
      StringMapWrapper = $__m.StringMapWrapper;
    }],
    execute: function() {
      AST = $__export("AST", (function() {
        var AST = function AST() {
          ;
        };
        return ($traceurRuntime.createClass)(AST, {
          eval: function(context, locals) {
            throw new BaseException("Not supported");
          },
          get isAssignable() {
            return false;
          },
          assign: function(context, locals, value) {
            throw new BaseException("Not supported");
          },
          visit: function(visitor) {},
          toString: function() {
            return "AST";
          }
        }, {});
      }()));
      EmptyExpr = $__export("EmptyExpr", (function($__super) {
        var EmptyExpr = function EmptyExpr() {
          $traceurRuntime.superConstructor(EmptyExpr).apply(this, arguments);
          ;
        };
        return ($traceurRuntime.createClass)(EmptyExpr, {
          eval: function(context, locals) {
            return null;
          },
          visit: function(visitor) {}
        }, {}, $__super);
      }(AST)));
      ImplicitReceiver = $__export("ImplicitReceiver", (function($__super) {
        var ImplicitReceiver = function ImplicitReceiver() {
          $traceurRuntime.superConstructor(ImplicitReceiver).apply(this, arguments);
          ;
        };
        return ($traceurRuntime.createClass)(ImplicitReceiver, {
          eval: function(context, locals) {
            return context;
          },
          visit: function(visitor) {
            return visitor.visitImplicitReceiver(this);
          }
        }, {}, $__super);
      }(AST)));
      Chain = $__export("Chain", (function($__super) {
        var Chain = function Chain(expressions) {
          $traceurRuntime.superConstructor(Chain).call(this);
          this.expressions = expressions;
        };
        return ($traceurRuntime.createClass)(Chain, {
          eval: function(context, locals) {
            var result;
            for (var i = 0; i < this.expressions.length; i++) {
              var last = this.expressions[i].eval(context, locals);
              if (isPresent(last))
                result = last;
            }
            return result;
          },
          visit: function(visitor) {
            return visitor.visitChain(this);
          }
        }, {}, $__super);
      }(AST)));
      Object.defineProperty(Chain, "parameters", {get: function() {
          return [[List]];
        }});
      Conditional = $__export("Conditional", (function($__super) {
        var Conditional = function Conditional(condition, trueExp, falseExp) {
          $traceurRuntime.superConstructor(Conditional).call(this);
          this.condition = condition;
          this.trueExp = trueExp;
          this.falseExp = falseExp;
        };
        return ($traceurRuntime.createClass)(Conditional, {
          eval: function(context, locals) {
            if (this.condition.eval(context, locals)) {
              return this.trueExp.eval(context, locals);
            } else {
              return this.falseExp.eval(context, locals);
            }
          },
          visit: function(visitor) {
            return visitor.visitConditional(this);
          }
        }, {}, $__super);
      }(AST)));
      Object.defineProperty(Conditional, "parameters", {get: function() {
          return [[AST], [AST], [AST]];
        }});
      AccessMember = $__export("AccessMember", (function($__super) {
        var AccessMember = function AccessMember(receiver, name, getter, setter) {
          $traceurRuntime.superConstructor(AccessMember).call(this);
          this.receiver = receiver;
          this.name = name;
          this.getter = getter;
          this.setter = setter;
        };
        return ($traceurRuntime.createClass)(AccessMember, {
          eval: function(context, locals) {
            if (this.receiver instanceof ImplicitReceiver && isPresent(locals) && locals.contains(this.name)) {
              return locals.get(this.name);
            } else {
              var evaluatedReceiver = this.receiver.eval(context, locals);
              return this.getter(evaluatedReceiver);
            }
          },
          get isAssignable() {
            return true;
          },
          assign: function(context, locals, value) {
            var evaluatedContext = this.receiver.eval(context, locals);
            if (this.receiver instanceof ImplicitReceiver && isPresent(locals) && locals.contains(this.name)) {
              throw new BaseException(("Cannot reassign a variable binding " + this.name));
            } else {
              return this.setter(evaluatedContext, value);
            }
          },
          visit: function(visitor) {
            return visitor.visitAccessMember(this);
          }
        }, {}, $__super);
      }(AST)));
      Object.defineProperty(AccessMember, "parameters", {get: function() {
          return [[AST], [assert.type.string], [Function], [Function]];
        }});
      KeyedAccess = $__export("KeyedAccess", (function($__super) {
        var KeyedAccess = function KeyedAccess(obj, key) {
          $traceurRuntime.superConstructor(KeyedAccess).call(this);
          this.obj = obj;
          this.key = key;
        };
        return ($traceurRuntime.createClass)(KeyedAccess, {
          eval: function(context, locals) {
            var obj = this.obj.eval(context, locals);
            var key = this.key.eval(context, locals);
            return obj[key];
          },
          get isAssignable() {
            return true;
          },
          assign: function(context, locals, value) {
            var obj = this.obj.eval(context, locals);
            var key = this.key.eval(context, locals);
            obj[key] = value;
            return value;
          },
          visit: function(visitor) {
            return visitor.visitKeyedAccess(this);
          }
        }, {}, $__super);
      }(AST)));
      Object.defineProperty(KeyedAccess, "parameters", {get: function() {
          return [[AST], [AST]];
        }});
      Pipe = $__export("Pipe", (function($__super) {
        var Pipe = function Pipe(exp, name, args, inBinding) {
          $traceurRuntime.superConstructor(Pipe).call(this);
          this.exp = exp;
          this.name = name;
          this.args = args;
          this.inBinding = inBinding;
        };
        return ($traceurRuntime.createClass)(Pipe, {visit: function(visitor) {
            return visitor.visitPipe(this);
          }}, {}, $__super);
      }(AST)));
      Object.defineProperty(Pipe, "parameters", {get: function() {
          return [[AST], [assert.type.string], [List], [assert.type.boolean]];
        }});
      LiteralPrimitive = $__export("LiteralPrimitive", (function($__super) {
        var LiteralPrimitive = function LiteralPrimitive(value) {
          $traceurRuntime.superConstructor(LiteralPrimitive).call(this);
          this.value = value;
        };
        return ($traceurRuntime.createClass)(LiteralPrimitive, {
          eval: function(context, locals) {
            return this.value;
          },
          visit: function(visitor) {
            return visitor.visitLiteralPrimitive(this);
          }
        }, {}, $__super);
      }(AST)));
      LiteralArray = $__export("LiteralArray", (function($__super) {
        var LiteralArray = function LiteralArray(expressions) {
          $traceurRuntime.superConstructor(LiteralArray).call(this);
          this.expressions = expressions;
        };
        return ($traceurRuntime.createClass)(LiteralArray, {
          eval: function(context, locals) {
            return ListWrapper.map(this.expressions, (function(e) {
              return e.eval(context, locals);
            }));
          },
          visit: function(visitor) {
            return visitor.visitLiteralArray(this);
          }
        }, {}, $__super);
      }(AST)));
      Object.defineProperty(LiteralArray, "parameters", {get: function() {
          return [[List]];
        }});
      LiteralMap = $__export("LiteralMap", (function($__super) {
        var LiteralMap = function LiteralMap(keys, values) {
          $traceurRuntime.superConstructor(LiteralMap).call(this);
          this.keys = keys;
          this.values = values;
        };
        return ($traceurRuntime.createClass)(LiteralMap, {
          eval: function(context, locals) {
            var res = StringMapWrapper.create();
            for (var i = 0; i < this.keys.length; ++i) {
              StringMapWrapper.set(res, this.keys[i], this.values[i].eval(context, locals));
            }
            return res;
          },
          visit: function(visitor) {
            return visitor.visitLiteralMap(this);
          }
        }, {}, $__super);
      }(AST)));
      Object.defineProperty(LiteralMap, "parameters", {get: function() {
          return [[List], [List]];
        }});
      Interpolation = $__export("Interpolation", (function($__super) {
        var Interpolation = function Interpolation(strings, expressions) {
          $traceurRuntime.superConstructor(Interpolation).call(this);
          this.strings = strings;
          this.expressions = expressions;
        };
        return ($traceurRuntime.createClass)(Interpolation, {
          eval: function(context, locals) {
            throw new BaseException("evaluating an Interpolation is not supported");
          },
          visit: function(visitor) {
            visitor.visitInterpolation(this);
          }
        }, {}, $__super);
      }(AST)));
      Object.defineProperty(Interpolation, "parameters", {get: function() {
          return [[List], [List]];
        }});
      Binary = $__export("Binary", (function($__super) {
        var Binary = function Binary(operation, left, right) {
          $traceurRuntime.superConstructor(Binary).call(this);
          this.operation = operation;
          this.left = left;
          this.right = right;
        };
        return ($traceurRuntime.createClass)(Binary, {
          eval: function(context, locals) {
            var left = this.left.eval(context, locals);
            switch (this.operation) {
              case '&&':
                return left && this.right.eval(context, locals);
              case '||':
                return left || this.right.eval(context, locals);
            }
            var right = this.right.eval(context, locals);
            switch (this.operation) {
              case '+':
                return left + right;
              case '-':
                return left - right;
              case '*':
                return left * right;
              case '/':
                return left / right;
              case '%':
                return left % right;
              case '==':
                return left == right;
              case '!=':
                return left != right;
              case '<':
                return left < right;
              case '>':
                return left > right;
              case '<=':
                return left <= right;
              case '>=':
                return left >= right;
              case '^':
                return left ^ right;
              case '&':
                return left & right;
            }
            throw 'Internal error [$operation] not handled';
          },
          visit: function(visitor) {
            return visitor.visitBinary(this);
          }
        }, {}, $__super);
      }(AST)));
      Object.defineProperty(Binary, "parameters", {get: function() {
          return [[assert.type.string], [AST], [AST]];
        }});
      PrefixNot = $__export("PrefixNot", (function($__super) {
        var PrefixNot = function PrefixNot(expression) {
          $traceurRuntime.superConstructor(PrefixNot).call(this);
          this.expression = expression;
        };
        return ($traceurRuntime.createClass)(PrefixNot, {
          eval: function(context, locals) {
            return !this.expression.eval(context, locals);
          },
          visit: function(visitor) {
            return visitor.visitPrefixNot(this);
          }
        }, {}, $__super);
      }(AST)));
      Object.defineProperty(PrefixNot, "parameters", {get: function() {
          return [[AST]];
        }});
      Assignment = $__export("Assignment", (function($__super) {
        var Assignment = function Assignment(target, value) {
          $traceurRuntime.superConstructor(Assignment).call(this);
          this.target = target;
          this.value = value;
        };
        return ($traceurRuntime.createClass)(Assignment, {
          eval: function(context, locals) {
            return this.target.assign(context, locals, this.value.eval(context, locals));
          },
          visit: function(visitor) {
            return visitor.visitAssignment(this);
          }
        }, {}, $__super);
      }(AST)));
      Object.defineProperty(Assignment, "parameters", {get: function() {
          return [[AST], [AST]];
        }});
      MethodCall = $__export("MethodCall", (function($__super) {
        var MethodCall = function MethodCall(receiver, name, fn, args) {
          $traceurRuntime.superConstructor(MethodCall).call(this);
          this.receiver = receiver;
          this.fn = fn;
          this.args = args;
          this.name = name;
        };
        return ($traceurRuntime.createClass)(MethodCall, {
          eval: function(context, locals) {
            var evaluatedArgs = evalList(context, locals, this.args);
            if (this.receiver instanceof ImplicitReceiver && isPresent(locals) && locals.contains(this.name)) {
              var fn = locals.get(this.name);
              return FunctionWrapper.apply(fn, evaluatedArgs);
            } else {
              var evaluatedReceiver = this.receiver.eval(context, locals);
              return this.fn(evaluatedReceiver, evaluatedArgs);
            }
          },
          visit: function(visitor) {
            return visitor.visitMethodCall(this);
          }
        }, {}, $__super);
      }(AST)));
      Object.defineProperty(MethodCall, "parameters", {get: function() {
          return [[AST], [assert.type.string], [Function], [List]];
        }});
      FunctionCall = $__export("FunctionCall", (function($__super) {
        var FunctionCall = function FunctionCall(target, args) {
          $traceurRuntime.superConstructor(FunctionCall).call(this);
          this.target = target;
          this.args = args;
        };
        return ($traceurRuntime.createClass)(FunctionCall, {
          eval: function(context, locals) {
            var obj = this.target.eval(context, locals);
            if (!(obj instanceof Function)) {
              throw new BaseException((obj + " is not a function"));
            }
            return FunctionWrapper.apply(obj, evalList(context, locals, this.args));
          },
          visit: function(visitor) {
            return visitor.visitFunctionCall(this);
          }
        }, {}, $__super);
      }(AST)));
      Object.defineProperty(FunctionCall, "parameters", {get: function() {
          return [[AST], [List]];
        }});
      ASTWithSource = $__export("ASTWithSource", (function($__super) {
        var ASTWithSource = function ASTWithSource(ast, source, location) {
          $traceurRuntime.superConstructor(ASTWithSource).call(this);
          this.source = source;
          this.location = location;
          this.ast = ast;
        };
        return ($traceurRuntime.createClass)(ASTWithSource, {
          eval: function(context, locals) {
            return this.ast.eval(context, locals);
          },
          get isAssignable() {
            return this.ast.isAssignable;
          },
          assign: function(context, locals, value) {
            return this.ast.assign(context, locals, value);
          },
          visit: function(visitor) {
            return this.ast.visit(visitor);
          },
          toString: function() {
            return (this.source + " in " + this.location);
          }
        }, {}, $__super);
      }(AST)));
      Object.defineProperty(ASTWithSource, "parameters", {get: function() {
          return [[AST], [assert.type.string], [assert.type.string]];
        }});
      TemplateBinding = $__export("TemplateBinding", (function() {
        var TemplateBinding = function TemplateBinding(key, keyIsVar, name, expression) {
          this.key = key;
          this.keyIsVar = keyIsVar;
          this.name = name;
          this.expression = expression;
        };
        return ($traceurRuntime.createClass)(TemplateBinding, {}, {});
      }()));
      Object.defineProperty(TemplateBinding, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.boolean], [assert.type.string], [ASTWithSource]];
        }});
      AstVisitor = $__export("AstVisitor", (function() {
        var AstVisitor = function AstVisitor() {
          ;
        };
        return ($traceurRuntime.createClass)(AstVisitor, {
          visitAccessMember: function(ast) {},
          visitAssignment: function(ast) {},
          visitBinary: function(ast) {},
          visitChain: function(ast) {},
          visitConditional: function(ast) {},
          visitPipe: function(ast) {},
          visitFunctionCall: function(ast) {},
          visitImplicitReceiver: function(ast) {},
          visitKeyedAccess: function(ast) {},
          visitLiteralArray: function(ast) {},
          visitLiteralMap: function(ast) {},
          visitLiteralPrimitive: function(ast) {},
          visitMethodCall: function(ast) {},
          visitPrefixNot: function(ast) {}
        }, {});
      }()));
      Object.defineProperty(AstVisitor.prototype.visitAccessMember, "parameters", {get: function() {
          return [[AccessMember]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitAssignment, "parameters", {get: function() {
          return [[Assignment]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitBinary, "parameters", {get: function() {
          return [[Binary]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitChain, "parameters", {get: function() {
          return [[Chain]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitConditional, "parameters", {get: function() {
          return [[Conditional]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitPipe, "parameters", {get: function() {
          return [[Pipe]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitFunctionCall, "parameters", {get: function() {
          return [[FunctionCall]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitImplicitReceiver, "parameters", {get: function() {
          return [[ImplicitReceiver]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitKeyedAccess, "parameters", {get: function() {
          return [[KeyedAccess]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitLiteralArray, "parameters", {get: function() {
          return [[LiteralArray]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitLiteralMap, "parameters", {get: function() {
          return [[LiteralMap]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitLiteralPrimitive, "parameters", {get: function() {
          return [[LiteralPrimitive]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitMethodCall, "parameters", {get: function() {
          return [[MethodCall]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitPrefixNot, "parameters", {get: function() {
          return [[PrefixNot]];
        }});
      _evalListCache = [[], [0], [0, 0], [0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]];
      Object.defineProperty(evalList, "parameters", {get: function() {
          return [[], [], [List]];
        }});
    }
  };
});
//# sourceMappingURL=ast.js.map

//# sourceMappingURL=../../../src/change_detection/parser/ast.js.map