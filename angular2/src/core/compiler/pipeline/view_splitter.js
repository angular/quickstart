System.register(["angular2/src/facade/lang", "angular2/src/dom/dom_adapter", "angular2/src/facade/collection", "angular2/change_detection", "./compile_step", "./compile_element", "./compile_control"], function($__export) {
  "use strict";
  var isBlank,
      isPresent,
      BaseException,
      DOM,
      MapWrapper,
      ListWrapper,
      Parser,
      CompileStep,
      CompileElement,
      CompileControl,
      StringWrapper,
      ViewSplitter;
  return {
    setters: [function($__m) {
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
      BaseException = $__m.BaseException;
      StringWrapper = $__m.StringWrapper;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      MapWrapper = $__m.MapWrapper;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      Parser = $__m.Parser;
    }, function($__m) {
      CompileStep = $__m.CompileStep;
    }, function($__m) {
      CompileElement = $__m.CompileElement;
    }, function($__m) {
      CompileControl = $__m.CompileControl;
    }],
    execute: function() {
      ViewSplitter = $__export("ViewSplitter", (function($__super) {
        var ViewSplitter = function ViewSplitter(parser) {
          $traceurRuntime.superConstructor(ViewSplitter).call(this);
          this._parser = parser;
        };
        return ($traceurRuntime.createClass)(ViewSplitter, {
          process: function(parent, current, control) {
            var attrs = current.attrs();
            var templateBindings = MapWrapper.get(attrs, 'template');
            var hasTemplateBinding = isPresent(templateBindings);
            MapWrapper.forEach(attrs, (function(attrValue, attrName) {
              if (StringWrapper.startsWith(attrName, '*')) {
                var key = StringWrapper.substring(attrName, 1);
                if (hasTemplateBinding) {
                  throw new BaseException("Only one template directive per element is allowed: " + (templateBindings + " and " + key + " cannot be used simultaneously ") + ("in " + current.elementDescription));
                } else {
                  templateBindings = (attrValue.length == 0) ? key : key + ' ' + attrValue;
                  hasTemplateBinding = true;
                }
              }
            }));
            if (isBlank(parent)) {
              current.isViewRoot = true;
            } else {
              if (DOM.isTemplateElement(current.element)) {
                if (!current.isViewRoot) {
                  var viewRoot = new CompileElement(DOM.createTemplate(''));
                  var currentElement = current.element;
                  var viewRootElement = viewRoot.element;
                  this._moveChildNodes(DOM.content(currentElement), DOM.content(viewRootElement));
                  viewRoot.elementDescription = current.elementDescription;
                  viewRoot.isViewRoot = true;
                  control.addChild(viewRoot);
                }
              } else {
                if (hasTemplateBinding) {
                  var newParent = new CompileElement(DOM.createTemplate(''));
                  newParent.elementDescription = current.elementDescription;
                  current.isViewRoot = true;
                  this._parseTemplateBindings(templateBindings, newParent);
                  this._addParentElement(current.element, newParent.element);
                  control.addParent(newParent);
                  DOM.remove(current.element);
                }
              }
            }
          },
          _moveChildNodes: function(source, target) {
            var next = DOM.firstChild(source);
            while (isPresent(next)) {
              DOM.appendChild(target, next);
              next = DOM.firstChild(source);
            }
          },
          _addParentElement: function(currentElement, newParentElement) {
            DOM.insertBefore(currentElement, newParentElement);
            DOM.appendChild(newParentElement, currentElement);
          },
          _parseTemplateBindings: function(templateBindings, compileElement) {
            var bindings = this._parser.parseTemplateBindings(templateBindings, compileElement.elementDescription);
            for (var i = 0; i < bindings.length; i++) {
              var binding = bindings[i];
              if (binding.keyIsVar) {
                compileElement.addVariableBinding(binding.key, binding.name);
                MapWrapper.set(compileElement.attrs(), binding.key, binding.name);
              } else if (isPresent(binding.expression)) {
                compileElement.addPropertyBinding(binding.key, binding.expression);
                MapWrapper.set(compileElement.attrs(), binding.key, binding.expression.source);
              } else {
                DOM.setAttribute(compileElement.element, binding.key, '');
              }
            }
          }
        }, {}, $__super);
      }(CompileStep)));
      Object.defineProperty(ViewSplitter, "parameters", {get: function() {
          return [[Parser]];
        }});
      Object.defineProperty(ViewSplitter.prototype.process, "parameters", {get: function() {
          return [[CompileElement], [CompileElement], [CompileControl]];
        }});
      Object.defineProperty(ViewSplitter.prototype._parseTemplateBindings, "parameters", {get: function() {
          return [[assert.type.string], [CompileElement]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/pipeline/view_splitter.map

//# sourceMappingURL=../../../../src/core/compiler/pipeline/view_splitter.js.map