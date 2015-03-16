System.register(["angular2/src/dom/dom_adapter", "angular2/src/facade/async", "angular2/src/facade/collection", "angular2/change_detection", "./element_injector", "./binding_propagation_config", "./element_binder", "./directive_metadata", "angular2/src/reflection/types", "angular2/src/facade/lang", "angular2/di", "angular2/src/core/dom/element", "./view_container", "./shadow_dom_emulation/light_dom", "./shadow_dom_strategy", "./view_pool", "angular2/src/core/events/event_manager"], function($__export) {
  "use strict";
  var DOM,
      Promise,
      ListWrapper,
      MapWrapper,
      Map,
      StringMapWrapper,
      List,
      AST,
      ContextWithVariableBindings,
      ChangeDispatcher,
      ProtoChangeDetector,
      ChangeDetector,
      ChangeRecord,
      BindingRecord,
      uninitialized,
      ProtoElementInjector,
      ElementInjector,
      PreBuiltObjects,
      BindingPropagationConfig,
      ElementBinder,
      DirectiveMetadata,
      SetterFn,
      IMPLEMENTS,
      int,
      isPresent,
      isBlank,
      BaseException,
      Injector,
      NgElement,
      ViewContainer,
      LightDom,
      DestinationLightDom,
      ShadowDomStrategy,
      ViewPool,
      EventManager,
      NG_BINDING_CLASS,
      NG_BINDING_CLASS_SELECTOR,
      VIEW_POOL_CAPACITY,
      VIEW_POOL_PREFILL,
      View,
      ProtoView,
      ElementBindingMemento,
      DirectiveBindingMemento,
      _directiveMementos,
      DirectiveMemento,
      PropertyUpdate;
  return {
    setters: [function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      Promise = $__m.Promise;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
      Map = $__m.Map;
      StringMapWrapper = $__m.StringMapWrapper;
      List = $__m.List;
    }, function($__m) {
      AST = $__m.AST;
      ContextWithVariableBindings = $__m.ContextWithVariableBindings;
      ChangeDispatcher = $__m.ChangeDispatcher;
      ProtoChangeDetector = $__m.ProtoChangeDetector;
      ChangeDetector = $__m.ChangeDetector;
      ChangeRecord = $__m.ChangeRecord;
      BindingRecord = $__m.BindingRecord;
      uninitialized = $__m.uninitialized;
    }, function($__m) {
      ProtoElementInjector = $__m.ProtoElementInjector;
      ElementInjector = $__m.ElementInjector;
      PreBuiltObjects = $__m.PreBuiltObjects;
    }, function($__m) {
      BindingPropagationConfig = $__m.BindingPropagationConfig;
    }, function($__m) {
      ElementBinder = $__m.ElementBinder;
    }, function($__m) {
      DirectiveMetadata = $__m.DirectiveMetadata;
    }, function($__m) {
      SetterFn = $__m.SetterFn;
    }, function($__m) {
      IMPLEMENTS = $__m.IMPLEMENTS;
      int = $__m.int;
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
    }, function($__m) {
      Injector = $__m.Injector;
    }, function($__m) {
      NgElement = $__m.NgElement;
    }, function($__m) {
      ViewContainer = $__m.ViewContainer;
    }, function($__m) {
      LightDom = $__m.LightDom;
      DestinationLightDom = $__m.DestinationLightDom;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
    }, function($__m) {
      ViewPool = $__m.ViewPool;
    }, function($__m) {
      EventManager = $__m.EventManager;
    }],
    execute: function() {
      NG_BINDING_CLASS = 'ng-binding';
      NG_BINDING_CLASS_SELECTOR = '.ng-binding';
      VIEW_POOL_CAPACITY = 10000;
      VIEW_POOL_PREFILL = 0;
      View = $__export("View", (function() {
        var View = function View(proto, nodes, protoContextLocals) {
          this.proto = proto;
          this.nodes = nodes;
          this.changeDetector = null;
          this.elementInjectors = null;
          this.rootElementInjectors = null;
          this.textNodes = null;
          this.bindElements = null;
          this.componentChildViews = null;
          this.viewContainers = null;
          this.preBuiltObjects = null;
          this.context = null;
          this.contextWithLocals = (MapWrapper.size(protoContextLocals) > 0) ? new ContextWithVariableBindings(null, MapWrapper.clone(protoContextLocals)) : null;
        };
        return ($traceurRuntime.createClass)(View, {
          init: function(changeDetector, elementInjectors, rootElementInjectors, textNodes, bindElements, viewContainers, preBuiltObjects, componentChildViews) {
            this.changeDetector = changeDetector;
            this.elementInjectors = elementInjectors;
            this.rootElementInjectors = rootElementInjectors;
            this.textNodes = textNodes;
            this.bindElements = bindElements;
            this.viewContainers = viewContainers;
            this.preBuiltObjects = preBuiltObjects;
            this.componentChildViews = componentChildViews;
          },
          setLocal: function(contextName, value) {
            if (!this.hydrated())
              throw new BaseException('Cannot set locals on dehydrated view.');
            if (!MapWrapper.contains(this.proto.variableBindings, contextName)) {
              return ;
            }
            var templateName = MapWrapper.get(this.proto.variableBindings, contextName);
            this.context.set(templateName, value);
          },
          hydrated: function() {
            return isPresent(this.context);
          },
          _hydrateContext: function(newContext) {
            if (isPresent(this.contextWithLocals)) {
              this.contextWithLocals.parent = newContext;
              this.context = this.contextWithLocals;
            } else {
              this.context = newContext;
            }
            this.changeDetector.hydrate(this.context);
          },
          _dehydrateContext: function() {
            if (isPresent(this.contextWithLocals)) {
              this.contextWithLocals.clearValues();
            }
            this.context = null;
            this.changeDetector.dehydrate();
          },
          hydrate: function(appInjector, hostElementInjector, context) {
            if (this.hydrated())
              throw new BaseException('The view is already hydrated.');
            this._hydrateContext(context);
            for (var i = 0; i < this.viewContainers.length; i++) {
              this.viewContainers[i].hydrate(appInjector, hostElementInjector);
            }
            var binders = this.proto.elementBinders;
            var componentChildViewIndex = 0;
            for (var i = 0; i < binders.length; ++i) {
              var componentDirective = binders[i].componentDirective;
              var shadowDomAppInjector = null;
              if (isPresent(componentDirective)) {
                var services = componentDirective.annotation.services;
                if (isPresent(services))
                  shadowDomAppInjector = appInjector.createChild(services);
                else {
                  shadowDomAppInjector = appInjector;
                }
              } else {
                shadowDomAppInjector = null;
              }
              var elementInjector = this.elementInjectors[i];
              if (isPresent(elementInjector)) {
                elementInjector.instantiateDirectives(appInjector, shadowDomAppInjector, this.preBuiltObjects[i]);
                var exportImplicitName = elementInjector.getExportImplicitName();
                if (elementInjector.isExportingComponent()) {
                  this.context.set(exportImplicitName, elementInjector.getComponent());
                } else if (elementInjector.isExportingElement()) {
                  this.context.set(exportImplicitName, elementInjector.getNgElement().domElement);
                }
              }
              if (isPresent(componentDirective)) {
                this.componentChildViews[componentChildViewIndex++].hydrate(shadowDomAppInjector, elementInjector, elementInjector.getComponent());
              }
            }
            for (var i = 0; i < binders.length; ++i) {
              var componentDirective = binders[i].componentDirective;
              if (isPresent(componentDirective)) {
                var lightDom = this.preBuiltObjects[i].lightDom;
                if (isPresent(lightDom)) {
                  lightDom.redistribute();
                }
              }
            }
          },
          dehydrate: function() {
            for (var i = 0; i < this.componentChildViews.length; i++) {
              this.componentChildViews[i].dehydrate();
            }
            for (var i = 0; i < this.elementInjectors.length; i++) {
              if (isPresent(this.elementInjectors[i])) {
                this.elementInjectors[i].clearDirectives();
              }
            }
            if (isPresent(this.viewContainers)) {
              for (var i = 0; i < this.viewContainers.length; i++) {
                this.viewContainers[i].dehydrate();
              }
            }
            this._dehydrateContext();
          },
          triggerEventHandlers: function(eventName, eventObj, binderIndex) {
            var handlers = this.proto.eventHandlers[binderIndex];
            if (isBlank(handlers))
              return ;
            var handler = StringMapWrapper.get(handlers, eventName);
            if (isBlank(handler))
              return ;
            handler(eventObj, this);
          },
          onRecordChange: function(directiveMemento, records) {
            this._invokeMementos(records);
            if (directiveMemento instanceof DirectiveMemento) {
              this._notifyDirectiveAboutChanges(directiveMemento, records);
            }
          },
          _invokeMementos: function(records) {
            for (var i = 0; i < records.length; ++i) {
              this._invokeMementoFor(records[i]);
            }
          },
          _notifyDirectiveAboutChanges: function(directiveMemento, records) {
            var dir = directiveMemento.directive(this.elementInjectors);
            var binding = directiveMemento.directiveBinding(this.elementInjectors);
            if (binding.callOnChange) {
              dir.onChange(this._collectChanges(records));
            }
          },
          _invokeMementoFor: function(record) {
            var memento = record.bindingMemento;
            if (memento instanceof DirectiveBindingMemento) {
              var directiveMemento = memento;
              directiveMemento.invoke(record, this.elementInjectors);
            } else if (memento instanceof ElementBindingMemento) {
              var elementMemento = memento;
              elementMemento.invoke(record, this.bindElements);
            } else {
              var textNodeIndex = memento;
              DOM.setText(this.textNodes[textNodeIndex], record.currentValue);
            }
          },
          _collectChanges: function(records) {
            var changes = StringMapWrapper.create();
            for (var i = 0; i < records.length; ++i) {
              var record = records[i];
              var propertyUpdate = new PropertyUpdate(record.currentValue, record.previousValue);
              StringMapWrapper.set(changes, record.bindingMemento._setterName, propertyUpdate);
            }
            return changes;
          }
        }, {});
      }()));
      Object.defineProperty(View, "annotations", {get: function() {
          return [new IMPLEMENTS(ChangeDispatcher)];
        }});
      Object.defineProperty(View, "parameters", {get: function() {
          return [[ProtoView], [List], [Map]];
        }});
      Object.defineProperty(View.prototype.init, "parameters", {get: function() {
          return [[ChangeDetector], [List], [List], [List], [List], [List], [List], [List]];
        }});
      Object.defineProperty(View.prototype.setLocal, "parameters", {get: function() {
          return [[assert.type.string], []];
        }});
      Object.defineProperty(View.prototype.hydrate, "parameters", {get: function() {
          return [[Injector], [ElementInjector], [Object]];
        }});
      Object.defineProperty(View.prototype.triggerEventHandlers, "parameters", {get: function() {
          return [[assert.type.string], [], [int]];
        }});
      Object.defineProperty(View.prototype.onRecordChange, "parameters", {get: function() {
          return [[], [List]];
        }});
      Object.defineProperty(View.prototype._invokeMementos, "parameters", {get: function() {
          return [[List]];
        }});
      Object.defineProperty(View.prototype._notifyDirectiveAboutChanges, "parameters", {get: function() {
          return [[], [List]];
        }});
      Object.defineProperty(View.prototype._invokeMementoFor, "parameters", {get: function() {
          return [[ChangeRecord]];
        }});
      Object.defineProperty(View.prototype._collectChanges, "parameters", {get: function() {
          return [[List]];
        }});
      ProtoView = $__export("ProtoView", (function() {
        var ProtoView = function ProtoView(template, protoChangeDetector, shadowDomStrategy) {
          this.element = template;
          this.elementBinders = [];
          this.variableBindings = MapWrapper.create();
          this.protoContextLocals = MapWrapper.create();
          this.protoChangeDetector = protoChangeDetector;
          this.textNodesWithBindingCount = 0;
          this.elementsWithBindingCount = 0;
          this.instantiateInPlace = false;
          this.rootBindingOffset = (isPresent(this.element) && DOM.hasClass(this.element, NG_BINDING_CLASS)) ? 1 : 0;
          this.isTemplateElement = DOM.isTemplateElement(this.element);
          this.shadowDomStrategy = shadowDomStrategy;
          this._viewPool = new ViewPool(VIEW_POOL_CAPACITY);
          this.stylePromises = [];
          this.eventHandlers = [];
          this.bindingRecords = [];
        };
        return ($traceurRuntime.createClass)(ProtoView, {
          instantiate: function(hostElementInjector, eventManager) {
            if (this._viewPool.length() == 0)
              this._preFillPool(hostElementInjector, eventManager);
            var view = this._viewPool.pop();
            return isPresent(view) ? view : this._instantiate(hostElementInjector, eventManager);
          },
          _preFillPool: function(hostElementInjector, eventManager) {
            for (var i = 0; i < VIEW_POOL_PREFILL; i++) {
              this._viewPool.push(this._instantiate(hostElementInjector, eventManager));
            }
          },
          _instantiate: function(hostElementInjector, eventManager) {
            var rootElementClone = this.instantiateInPlace ? this.element : DOM.importIntoDoc(this.element);
            var elementsWithBindingsDynamic;
            if (this.isTemplateElement) {
              elementsWithBindingsDynamic = DOM.querySelectorAll(DOM.content(rootElementClone), NG_BINDING_CLASS_SELECTOR);
            } else {
              elementsWithBindingsDynamic = DOM.getElementsByClassName(rootElementClone, NG_BINDING_CLASS);
            }
            var elementsWithBindings = ListWrapper.createFixedSize(elementsWithBindingsDynamic.length);
            for (var binderIdx = 0; binderIdx < elementsWithBindingsDynamic.length; ++binderIdx) {
              elementsWithBindings[binderIdx] = elementsWithBindingsDynamic[binderIdx];
            }
            var viewNodes;
            if (this.isTemplateElement) {
              var childNode = DOM.firstChild(DOM.content(rootElementClone));
              viewNodes = [];
              while (childNode != null) {
                ListWrapper.push(viewNodes, childNode);
                childNode = DOM.nextSibling(childNode);
              }
            } else {
              viewNodes = [rootElementClone];
            }
            var view = new View(this, viewNodes, this.protoContextLocals);
            var changeDetector = this.protoChangeDetector.instantiate(view, this.bindingRecords);
            var binders = this.elementBinders;
            var elementInjectors = ListWrapper.createFixedSize(binders.length);
            var eventHandlers = ListWrapper.createFixedSize(binders.length);
            var rootElementInjectors = [];
            var textNodes = [];
            var elementsWithPropertyBindings = [];
            var preBuiltObjects = ListWrapper.createFixedSize(binders.length);
            var viewContainers = [];
            var componentChildViews = [];
            for (var binderIdx = 0; binderIdx < binders.length; binderIdx++) {
              var binder = binders[binderIdx];
              var element = void 0;
              if (binderIdx === 0 && this.rootBindingOffset === 1) {
                element = rootElementClone;
              } else {
                element = elementsWithBindings[binderIdx - this.rootBindingOffset];
              }
              var elementInjector = null;
              var protoElementInjector = binder.protoElementInjector;
              if (isPresent(protoElementInjector)) {
                if (isPresent(protoElementInjector.parent)) {
                  var parentElementInjector = elementInjectors[protoElementInjector.parent.index];
                  elementInjector = protoElementInjector.instantiate(parentElementInjector, null);
                } else {
                  elementInjector = protoElementInjector.instantiate(null, hostElementInjector);
                  ListWrapper.push(rootElementInjectors, elementInjector);
                }
              }
              elementInjectors[binderIdx] = elementInjector;
              if (binder.hasElementPropertyBindings) {
                ListWrapper.push(elementsWithPropertyBindings, element);
              }
              var textNodeIndices = binder.textNodeIndices;
              if (isPresent(textNodeIndices)) {
                var childNode = DOM.firstChild(DOM.templateAwareRoot(element));
                for (var j = 0,
                    k = 0; j < textNodeIndices.length; j++) {
                  for (var index = textNodeIndices[j]; k < index; k++) {
                    childNode = DOM.nextSibling(childNode);
                  }
                  ListWrapper.push(textNodes, childNode);
                }
              }
              var lightDom = null;
              var bindingPropagationConfig = null;
              if (isPresent(binder.componentDirective)) {
                var strategy = this.shadowDomStrategy;
                var childView = binder.nestedProtoView.instantiate(elementInjector, eventManager);
                changeDetector.addChild(childView.changeDetector);
                lightDom = strategy.constructLightDom(view, childView, element);
                strategy.attachTemplate(element, childView);
                bindingPropagationConfig = new BindingPropagationConfig(changeDetector);
                ListWrapper.push(componentChildViews, childView);
              }
              var viewContainer = null;
              if (isPresent(binder.viewportDirective)) {
                var destLightDom = this._directParentElementLightDom(protoElementInjector, preBuiltObjects);
                viewContainer = new ViewContainer(view, element, binder.nestedProtoView, elementInjector, eventManager, destLightDom);
                ListWrapper.push(viewContainers, viewContainer);
              }
              if (isPresent(elementInjector)) {
                preBuiltObjects[binderIdx] = new PreBuiltObjects(view, new NgElement(element), viewContainer, lightDom, bindingPropagationConfig);
              }
              if (isPresent(binder.events)) {
                eventHandlers[binderIdx] = StringMapWrapper.create();
                StringMapWrapper.forEach(binder.events, (function(eventMap, eventName) {
                  var handler = ProtoView.buildEventHandler(eventMap, binderIdx);
                  StringMapWrapper.set(eventHandlers[binderIdx], eventName, handler);
                  if (isBlank(elementInjector) || !elementInjector.hasEventEmitter(eventName)) {
                    eventManager.addEventListener(element, eventName, (function(event) {
                      handler(event, view);
                    }));
                  }
                }));
              }
            }
            this.eventHandlers = eventHandlers;
            view.init(changeDetector, elementInjectors, rootElementInjectors, textNodes, elementsWithPropertyBindings, viewContainers, preBuiltObjects, componentChildViews);
            return view;
          },
          returnToPool: function(view) {
            this._viewPool.push(view);
          },
          _directParentElementLightDom: function(protoElementInjector, preBuiltObjects) {
            var p = protoElementInjector.directParent();
            return isPresent(p) ? preBuiltObjects[p.index].lightDom : null;
          },
          bindVariable: function(contextName, templateName) {
            MapWrapper.set(this.variableBindings, contextName, templateName);
            MapWrapper.set(this.protoContextLocals, templateName, null);
          },
          bindElement: function(protoElementInjector) {
            var componentDirective = arguments[1] !== (void 0) ? arguments[1] : null;
            var viewportDirective = arguments[2] !== (void 0) ? arguments[2] : null;
            var elBinder = new ElementBinder(protoElementInjector, componentDirective, viewportDirective);
            ListWrapper.push(this.elementBinders, elBinder);
            return elBinder;
          },
          bindTextNode: function(indexInParent, expression) {
            var elBinder = this.elementBinders[this.elementBinders.length - 1];
            if (isBlank(elBinder.textNodeIndices)) {
              elBinder.textNodeIndices = ListWrapper.create();
            }
            ListWrapper.push(elBinder.textNodeIndices, indexInParent);
            var memento = this.textNodesWithBindingCount++;
            ListWrapper.push(this.bindingRecords, new BindingRecord(expression, memento, null));
          },
          bindElementProperty: function(expression, setterName, setter) {
            var elBinder = this.elementBinders[this.elementBinders.length - 1];
            if (!elBinder.hasElementPropertyBindings) {
              elBinder.hasElementPropertyBindings = true;
              this.elementsWithBindingCount++;
            }
            var memento = new ElementBindingMemento(this.elementsWithBindingCount - 1, setterName, setter);
            ListWrapper.push(this.bindingRecords, new BindingRecord(expression, memento, null));
          },
          bindEvent: function(eventName, expression) {
            var directiveIndex = arguments[2] !== (void 0) ? arguments[2] : -1;
            var elBinder = this.elementBinders[this.elementBinders.length - 1];
            var events = elBinder.events;
            if (isBlank(events)) {
              events = StringMapWrapper.create();
              elBinder.events = events;
            }
            var event = StringMapWrapper.get(events, eventName);
            if (isBlank(event)) {
              event = MapWrapper.create();
              StringMapWrapper.set(events, eventName, event);
            }
            MapWrapper.set(event, directiveIndex, expression);
          },
          bindDirectiveProperty: function(directiveIndex, expression, setterName, setter) {
            var bindingMemento = new DirectiveBindingMemento(this.elementBinders.length - 1, directiveIndex, setterName, setter);
            var directiveMemento = DirectiveMemento.get(bindingMemento);
            ListWrapper.push(this.bindingRecords, new BindingRecord(expression, bindingMemento, directiveMemento));
          }
        }, {
          buildEventHandler: function(eventMap, injectorIdx) {
            var locals = MapWrapper.create();
            return (function(event, view) {
              if (view.hydrated()) {
                MapWrapper.set(locals, '$event', event);
                MapWrapper.forEach(eventMap, (function(expr, directiveIndex) {
                  var context;
                  if (directiveIndex === -1) {
                    context = view.context;
                  } else {
                    context = view.elementInjectors[injectorIdx].getDirectiveAtIndex(directiveIndex);
                  }
                  expr.eval(new ContextWithVariableBindings(context, locals));
                }));
              }
            });
          },
          createRootProtoView: function(protoView, insertionElement, rootComponentAnnotatedType, protoChangeDetector, shadowDomStrategy) {
            DOM.addClass(insertionElement, NG_BINDING_CLASS);
            var cmpType = rootComponentAnnotatedType.type;
            var rootProtoView = new ProtoView(insertionElement, protoChangeDetector, shadowDomStrategy);
            rootProtoView.instantiateInPlace = true;
            var binder = rootProtoView.bindElement(new ProtoElementInjector(null, 0, [cmpType], true));
            binder.componentDirective = rootComponentAnnotatedType;
            binder.nestedProtoView = protoView;
            shadowDomStrategy.shimAppElement(rootComponentAnnotatedType, insertionElement);
            return rootProtoView;
          }
        });
      }()));
      Object.defineProperty(ProtoView, "parameters", {get: function() {
          return [[], [ProtoChangeDetector], [ShadowDomStrategy]];
        }});
      Object.defineProperty(ProtoView.prototype.instantiate, "parameters", {get: function() {
          return [[ElementInjector], [EventManager]];
        }});
      Object.defineProperty(ProtoView.prototype._preFillPool, "parameters", {get: function() {
          return [[ElementInjector], [EventManager]];
        }});
      Object.defineProperty(ProtoView.prototype._instantiate, "parameters", {get: function() {
          return [[ElementInjector], [EventManager]];
        }});
      Object.defineProperty(ProtoView.prototype.returnToPool, "parameters", {get: function() {
          return [[View]];
        }});
      Object.defineProperty(ProtoView.buildEventHandler, "parameters", {get: function() {
          return [[Map], [int]];
        }});
      Object.defineProperty(ProtoView.prototype._directParentElementLightDom, "parameters", {get: function() {
          return [[ProtoElementInjector], [List]];
        }});
      Object.defineProperty(ProtoView.prototype.bindVariable, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(ProtoView.prototype.bindElement, "parameters", {get: function() {
          return [[ProtoElementInjector], [DirectiveMetadata], [DirectiveMetadata]];
        }});
      Object.defineProperty(ProtoView.prototype.bindTextNode, "parameters", {get: function() {
          return [[int], [AST]];
        }});
      Object.defineProperty(ProtoView.prototype.bindElementProperty, "parameters", {get: function() {
          return [[AST], [assert.type.string], [SetterFn]];
        }});
      Object.defineProperty(ProtoView.prototype.bindEvent, "parameters", {get: function() {
          return [[assert.type.string], [AST], [int]];
        }});
      Object.defineProperty(ProtoView.prototype.bindDirectiveProperty, "parameters", {get: function() {
          return [[assert.type.number], [AST], [assert.type.string], [SetterFn]];
        }});
      Object.defineProperty(ProtoView.createRootProtoView, "parameters", {get: function() {
          return [[ProtoView], [], [DirectiveMetadata], [ProtoChangeDetector], [ShadowDomStrategy]];
        }});
      ElementBindingMemento = $__export("ElementBindingMemento", (function() {
        var ElementBindingMemento = function ElementBindingMemento(elementIndex, setterName, setter) {
          this._elementIndex = elementIndex;
          this._setterName = setterName;
          this._setter = setter;
        };
        return ($traceurRuntime.createClass)(ElementBindingMemento, {invoke: function(record, bindElements) {
            var element = bindElements[this._elementIndex];
            this._setter(element, record.currentValue);
          }}, {});
      }()));
      Object.defineProperty(ElementBindingMemento, "parameters", {get: function() {
          return [[int], [assert.type.string], [SetterFn]];
        }});
      Object.defineProperty(ElementBindingMemento.prototype.invoke, "parameters", {get: function() {
          return [[ChangeRecord], [List]];
        }});
      DirectiveBindingMemento = $__export("DirectiveBindingMemento", (function() {
        var DirectiveBindingMemento = function DirectiveBindingMemento(elementInjectorIndex, directiveIndex, setterName, setter) {
          this._elementInjectorIndex = elementInjectorIndex;
          this._directiveIndex = directiveIndex;
          this._setterName = setterName;
          this._setter = setter;
        };
        return ($traceurRuntime.createClass)(DirectiveBindingMemento, {invoke: function(record, elementInjectors) {
            var elementInjector = elementInjectors[this._elementInjectorIndex];
            var directive = elementInjector.getDirectiveAtIndex(this._directiveIndex);
            this._setter(directive, record.currentValue);
          }}, {});
      }()));
      Object.defineProperty(DirectiveBindingMemento, "parameters", {get: function() {
          return [[assert.type.number], [assert.type.number], [assert.type.string], [SetterFn]];
        }});
      Object.defineProperty(DirectiveBindingMemento.prototype.invoke, "parameters", {get: function() {
          return [[ChangeRecord], [assert.genericType(List, ElementInjector)]];
        }});
      _directiveMementos = MapWrapper.create();
      DirectiveMemento = (function() {
        var DirectiveMemento = function DirectiveMemento(elementInjectorIndex, directiveIndex) {
          this._elementInjectorIndex = elementInjectorIndex;
          this._directiveIndex = directiveIndex;
        };
        return ($traceurRuntime.createClass)(DirectiveMemento, {
          directive: function(elementInjectors) {
            var elementInjector = elementInjectors[this._elementInjectorIndex];
            return elementInjector.getDirectiveAtIndex(this._directiveIndex);
          },
          directiveBinding: function(elementInjectors) {
            var elementInjector = elementInjectors[this._elementInjectorIndex];
            return elementInjector.getDirectiveBindingAtIndex(this._directiveIndex);
          }
        }, {get: function(memento) {
            var elementInjectorIndex = memento._elementInjectorIndex;
            var directiveIndex = memento._directiveIndex;
            var id = elementInjectorIndex * 100 + directiveIndex;
            if (!MapWrapper.contains(_directiveMementos, id)) {
              MapWrapper.set(_directiveMementos, id, new DirectiveMemento(elementInjectorIndex, directiveIndex));
            }
            return MapWrapper.get(_directiveMementos, id);
          }});
      }());
      Object.defineProperty(DirectiveMemento, "parameters", {get: function() {
          return [[assert.type.number], [assert.type.number]];
        }});
      Object.defineProperty(DirectiveMemento.get, "parameters", {get: function() {
          return [[DirectiveBindingMemento]];
        }});
      Object.defineProperty(DirectiveMemento.prototype.directive, "parameters", {get: function() {
          return [[assert.genericType(List, ElementInjector)]];
        }});
      Object.defineProperty(DirectiveMemento.prototype.directiveBinding, "parameters", {get: function() {
          return [[assert.genericType(List, ElementInjector)]];
        }});
      PropertyUpdate = $__export("PropertyUpdate", (function() {
        var PropertyUpdate = function PropertyUpdate(currentValue, previousValue) {
          this.currentValue = currentValue;
          this.previousValue = previousValue;
        };
        return ($traceurRuntime.createClass)(PropertyUpdate, {}, {createWithoutPrevious: function(currentValue) {
            return new PropertyUpdate(currentValue, uninitialized);
          }});
      }()));
    }
  };
});

//# sourceMappingURL=src/core/compiler/view.map

//# sourceMappingURL=../../../src/core/compiler/view.js.map