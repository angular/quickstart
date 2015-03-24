System.register(["angular2/di", "angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/facade/async", "angular2/src/dom/dom_adapter", "./view", "./shadow_dom_emulation/light_dom", "./shadow_dom_emulation/shadow_css", "./style_inliner", "./style_url_resolver", "./directive_metadata", "./pipeline/compile_step", "./pipeline/compile_element", "./pipeline/compile_control"], function($__export) {
  "use strict";
  var Injectable,
      Type,
      isBlank,
      isPresent,
      int,
      StringWrapper,
      assertionsEnabled,
      List,
      ListWrapper,
      MapWrapper,
      Map,
      PromiseWrapper,
      DOM,
      viewModule,
      LightDom,
      ShadowCss,
      StyleInliner,
      StyleUrlResolver,
      DirectiveMetadata,
      NS,
      CompileElement,
      CompileControl,
      _EMPTY_STEP,
      ShadowDomStrategy,
      EmulatedUnscopedShadowDomStrategy,
      EmulatedScopedShadowDomStrategy,
      NativeShadowDomStrategy,
      _BaseEmulatedShadowDomStep,
      _EmptyCompileStep,
      _ShimShadowDomStep,
      _EmulatedUnscopedCssStep,
      _EmulatedScopedCssStep,
      _NativeCssStep,
      _componentUIDs,
      _nextComponentUID,
      _sharedStyleTexts,
      _lastInsertedStyleEl;
  function _emptyStep() {
    if (isBlank(_EMPTY_STEP)) {
      _EMPTY_STEP = new _EmptyCompileStep();
    }
    return _EMPTY_STEP;
  }
  function _moveViewNodesIntoParent(parent, view) {
    for (var i = 0; i < view.nodes.length; ++i) {
      DOM.appendChild(parent, view.nodes[i]);
    }
  }
  function _getComponentId(component) {
    var id = MapWrapper.get(_componentUIDs, component);
    if (isBlank(id)) {
      id = _nextComponentUID++;
      MapWrapper.set(_componentUIDs, component, id);
    }
    return id;
  }
  function _insertStyleElement(host, styleEl) {
    if (isBlank(_lastInsertedStyleEl)) {
      var firstChild = DOM.firstChild(host);
      if (isPresent(firstChild)) {
        DOM.insertBefore(firstChild, styleEl);
      } else {
        DOM.appendChild(host, styleEl);
      }
    } else {
      DOM.insertAfter(_lastInsertedStyleEl, styleEl);
    }
    _lastInsertedStyleEl = styleEl;
  }
  function _getHostAttribute(id) {
    return ("_nghost-" + id);
  }
  function _getContentAttribute(id) {
    return ("_ngcontent-" + id);
  }
  function _shimCssForComponent(cssText, component) {
    var id = _getComponentId(component);
    var shadowCss = new ShadowCss();
    return shadowCss.shimCssText(cssText, _getContentAttribute(id), _getHostAttribute(id));
  }
  function resetShadowDomCache() {
    MapWrapper.clear(_componentUIDs);
    _nextComponentUID = 0;
    MapWrapper.clear(_sharedStyleTexts);
    _lastInsertedStyleEl = null;
  }
  $__export("resetShadowDomCache", resetShadowDomCache);
  return {
    setters: [function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      Type = $__m.Type;
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
      int = $__m.int;
      StringWrapper = $__m.StringWrapper;
      assertionsEnabled = $__m.assertionsEnabled;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
      Map = $__m.Map;
    }, function($__m) {
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      viewModule = $__m;
    }, function($__m) {
      LightDom = $__m.LightDom;
    }, function($__m) {
      ShadowCss = $__m.ShadowCss;
    }, function($__m) {
      StyleInliner = $__m.StyleInliner;
    }, function($__m) {
      StyleUrlResolver = $__m.StyleUrlResolver;
    }, function($__m) {
      DirectiveMetadata = $__m.DirectiveMetadata;
    }, function($__m) {
      NS = $__m;
    }, function($__m) {
      CompileElement = $__m.CompileElement;
    }, function($__m) {
      CompileControl = $__m.CompileControl;
    }],
    execute: function() {
      ShadowDomStrategy = $__export("ShadowDomStrategy", (function() {
        var ShadowDomStrategy = function ShadowDomStrategy() {};
        return ($traceurRuntime.createClass)(ShadowDomStrategy, {
          attachTemplate: function(el, view) {},
          constructLightDom: function(lightDomView, shadowDomView, el) {
            return null;
          },
          getStyleCompileStep: function(cmpMetadata, templateUrl) {
            return _emptyStep();
          },
          getTemplateCompileStep: function(cmpMetadata) {
            return _emptyStep();
          },
          shimAppElement: function(cmpMetadata, element) {}
        }, {});
      }()));
      Object.defineProperty(ShadowDomStrategy.prototype.attachTemplate, "parameters", {get: function() {
          return [[], [viewModule.View]];
        }});
      Object.defineProperty(ShadowDomStrategy.prototype.constructLightDom, "parameters", {get: function() {
          return [[viewModule.View], [viewModule.View], []];
        }});
      Object.defineProperty(ShadowDomStrategy.prototype.getStyleCompileStep, "parameters", {get: function() {
          return [[DirectiveMetadata], [assert.type.string]];
        }});
      Object.defineProperty(ShadowDomStrategy.prototype.getTemplateCompileStep, "parameters", {get: function() {
          return [[DirectiveMetadata]];
        }});
      Object.defineProperty(ShadowDomStrategy.prototype.shimAppElement, "parameters", {get: function() {
          return [[DirectiveMetadata], []];
        }});
      EmulatedUnscopedShadowDomStrategy = $__export("EmulatedUnscopedShadowDomStrategy", (function($__super) {
        var EmulatedUnscopedShadowDomStrategy = function EmulatedUnscopedShadowDomStrategy(styleUrlResolver, styleHost) {
          $traceurRuntime.superConstructor(EmulatedUnscopedShadowDomStrategy).call(this);
          this._styleUrlResolver = styleUrlResolver;
          this._styleHost = styleHost;
        };
        return ($traceurRuntime.createClass)(EmulatedUnscopedShadowDomStrategy, {
          attachTemplate: function(el, view) {
            DOM.clearNodes(el);
            _moveViewNodesIntoParent(el, view);
          },
          constructLightDom: function(lightDomView, shadowDomView, el) {
            return new LightDom(lightDomView, shadowDomView, el);
          },
          getStyleCompileStep: function(cmpMetadata, templateUrl) {
            return new _EmulatedUnscopedCssStep(cmpMetadata, templateUrl, this._styleUrlResolver, this._styleHost);
          },
          getTemplateCompileStep: function(cmpMetadata) {
            return new _BaseEmulatedShadowDomStep();
          }
        }, {}, $__super);
      }(ShadowDomStrategy)));
      Object.defineProperty(EmulatedUnscopedShadowDomStrategy, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(EmulatedUnscopedShadowDomStrategy, "parameters", {get: function() {
          return [[StyleUrlResolver], []];
        }});
      Object.defineProperty(EmulatedUnscopedShadowDomStrategy.prototype.attachTemplate, "parameters", {get: function() {
          return [[], [viewModule.View]];
        }});
      Object.defineProperty(EmulatedUnscopedShadowDomStrategy.prototype.constructLightDom, "parameters", {get: function() {
          return [[viewModule.View], [viewModule.View], []];
        }});
      Object.defineProperty(EmulatedUnscopedShadowDomStrategy.prototype.getStyleCompileStep, "parameters", {get: function() {
          return [[DirectiveMetadata], [assert.type.string]];
        }});
      Object.defineProperty(EmulatedUnscopedShadowDomStrategy.prototype.getTemplateCompileStep, "parameters", {get: function() {
          return [[DirectiveMetadata]];
        }});
      EmulatedScopedShadowDomStrategy = $__export("EmulatedScopedShadowDomStrategy", (function($__super) {
        var EmulatedScopedShadowDomStrategy = function EmulatedScopedShadowDomStrategy(styleInliner, styleUrlResolver, styleHost) {
          $traceurRuntime.superConstructor(EmulatedScopedShadowDomStrategy).call(this, styleUrlResolver, styleHost);
          this._styleInliner = styleInliner;
        };
        return ($traceurRuntime.createClass)(EmulatedScopedShadowDomStrategy, {
          getStyleCompileStep: function(cmpMetadata, templateUrl) {
            return new _EmulatedScopedCssStep(cmpMetadata, templateUrl, this._styleInliner, this._styleUrlResolver, this._styleHost);
          },
          getTemplateCompileStep: function(cmpMetadata) {
            return new _ShimShadowDomStep(cmpMetadata);
          },
          shimAppElement: function(cmpMetadata, element) {
            var cmpType = cmpMetadata.type;
            var hostAttribute = _getHostAttribute(_getComponentId(cmpType));
            DOM.setAttribute(element, hostAttribute, '');
          }
        }, {}, $__super);
      }(EmulatedUnscopedShadowDomStrategy)));
      Object.defineProperty(EmulatedScopedShadowDomStrategy, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(EmulatedScopedShadowDomStrategy, "parameters", {get: function() {
          return [[StyleInliner], [StyleUrlResolver], []];
        }});
      Object.defineProperty(EmulatedScopedShadowDomStrategy.prototype.getStyleCompileStep, "parameters", {get: function() {
          return [[DirectiveMetadata], [assert.type.string]];
        }});
      Object.defineProperty(EmulatedScopedShadowDomStrategy.prototype.getTemplateCompileStep, "parameters", {get: function() {
          return [[DirectiveMetadata]];
        }});
      Object.defineProperty(EmulatedScopedShadowDomStrategy.prototype.shimAppElement, "parameters", {get: function() {
          return [[DirectiveMetadata], []];
        }});
      NativeShadowDomStrategy = $__export("NativeShadowDomStrategy", (function($__super) {
        var NativeShadowDomStrategy = function NativeShadowDomStrategy(styleUrlResolver) {
          $traceurRuntime.superConstructor(NativeShadowDomStrategy).call(this);
          this._styleUrlResolver = styleUrlResolver;
        };
        return ($traceurRuntime.createClass)(NativeShadowDomStrategy, {
          attachTemplate: function(el, view) {
            _moveViewNodesIntoParent(DOM.createShadowRoot(el), view);
          },
          getStyleCompileStep: function(cmpMetadata, templateUrl) {
            return new _NativeCssStep(templateUrl, this._styleUrlResolver);
          }
        }, {}, $__super);
      }(ShadowDomStrategy)));
      Object.defineProperty(NativeShadowDomStrategy, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(NativeShadowDomStrategy, "parameters", {get: function() {
          return [[StyleUrlResolver]];
        }});
      Object.defineProperty(NativeShadowDomStrategy.prototype.attachTemplate, "parameters", {get: function() {
          return [[], [viewModule.View]];
        }});
      Object.defineProperty(NativeShadowDomStrategy.prototype.getStyleCompileStep, "parameters", {get: function() {
          return [[DirectiveMetadata], [assert.type.string]];
        }});
      _BaseEmulatedShadowDomStep = (function($__super) {
        var _BaseEmulatedShadowDomStep = function _BaseEmulatedShadowDomStep() {
          $traceurRuntime.superConstructor(_BaseEmulatedShadowDomStep).apply(this, arguments);
        };
        return ($traceurRuntime.createClass)(_BaseEmulatedShadowDomStep, {process: function(parent, current, control) {
            if (current.ignoreBindings) {
              return ;
            }
            var nodeName = DOM.nodeName(current.element);
            if (StringWrapper.equals(nodeName.toUpperCase(), 'CONTENT')) {
              var attrs = current.attrs();
              var selector = MapWrapper.get(attrs, 'select');
              current.contentTagSelector = isPresent(selector) ? selector : '';
              var contentStart = DOM.createScriptTag('type', 'ng/contentStart');
              if (assertionsEnabled()) {
                DOM.setAttribute(contentStart, 'select', current.contentTagSelector);
              }
              var contentEnd = DOM.createScriptTag('type', 'ng/contentEnd');
              DOM.insertBefore(current.element, contentStart);
              DOM.insertBefore(current.element, contentEnd);
              DOM.remove(current.element);
              current.element = contentStart;
            }
          }}, {}, $__super);
      }(NS.CompileStep));
      Object.defineProperty(_BaseEmulatedShadowDomStep.prototype.process, "parameters", {get: function() {
          return [[CompileElement], [CompileElement], [CompileControl]];
        }});
      _EmptyCompileStep = (function($__super) {
        var _EmptyCompileStep = function _EmptyCompileStep() {
          $traceurRuntime.superConstructor(_EmptyCompileStep).apply(this, arguments);
        };
        return ($traceurRuntime.createClass)(_EmptyCompileStep, {process: function(parent, current, control) {}}, {}, $__super);
      }(NS.CompileStep));
      Object.defineProperty(_EmptyCompileStep.prototype.process, "parameters", {get: function() {
          return [[CompileElement], [CompileElement], [CompileControl]];
        }});
      _ShimShadowDomStep = (function($__super) {
        var _ShimShadowDomStep = function _ShimShadowDomStep(cmpMetadata) {
          $traceurRuntime.superConstructor(_ShimShadowDomStep).call(this);
          var id = _getComponentId(cmpMetadata.type);
          this._contentAttribute = _getContentAttribute(id);
        };
        return ($traceurRuntime.createClass)(_ShimShadowDomStep, {process: function(parent, current, control) {
            $traceurRuntime.superGet(this, _ShimShadowDomStep.prototype, "process").call(this, parent, current, control);
            if (current.ignoreBindings) {
              return ;
            }
            DOM.setAttribute(current.element, this._contentAttribute, '');
            var host = current.componentDirective;
            if (isPresent(host)) {
              var hostId = _getComponentId(host.type);
              var hostAttribute = _getHostAttribute(hostId);
              DOM.setAttribute(current.element, hostAttribute, '');
            }
          }}, {}, $__super);
      }(_BaseEmulatedShadowDomStep));
      Object.defineProperty(_ShimShadowDomStep, "parameters", {get: function() {
          return [[DirectiveMetadata]];
        }});
      Object.defineProperty(_ShimShadowDomStep.prototype.process, "parameters", {get: function() {
          return [[CompileElement], [CompileElement], [CompileControl]];
        }});
      _EmulatedUnscopedCssStep = (function($__super) {
        var _EmulatedUnscopedCssStep = function _EmulatedUnscopedCssStep(cmpMetadata, templateUrl, styleUrlResolver, styleHost) {
          $traceurRuntime.superConstructor(_EmulatedUnscopedCssStep).call(this);
          this._templateUrl = templateUrl;
          this._styleUrlResolver = styleUrlResolver;
          this._styleHost = styleHost;
        };
        return ($traceurRuntime.createClass)(_EmulatedUnscopedCssStep, {process: function(parent, current, control) {
            var styleEl = current.element;
            var cssText = DOM.getText(styleEl);
            cssText = this._styleUrlResolver.resolveUrls(cssText, this._templateUrl);
            DOM.setText(styleEl, cssText);
            DOM.remove(styleEl);
            if (!MapWrapper.contains(_sharedStyleTexts, cssText)) {
              MapWrapper.set(_sharedStyleTexts, cssText, true);
              _insertStyleElement(this._styleHost, styleEl);
            }
          }}, {}, $__super);
      }(NS.CompileStep));
      Object.defineProperty(_EmulatedUnscopedCssStep, "parameters", {get: function() {
          return [[DirectiveMetadata], [assert.type.string], [StyleUrlResolver], []];
        }});
      Object.defineProperty(_EmulatedUnscopedCssStep.prototype.process, "parameters", {get: function() {
          return [[CompileElement], [CompileElement], [CompileControl]];
        }});
      _EmulatedScopedCssStep = (function($__super) {
        var _EmulatedScopedCssStep = function _EmulatedScopedCssStep(cmpMetadata, templateUrl, styleInliner, styleUrlResolver, styleHost) {
          $traceurRuntime.superConstructor(_EmulatedScopedCssStep).call(this);
          this._templateUrl = templateUrl;
          this._component = cmpMetadata.type;
          this._styleInliner = styleInliner;
          this._styleUrlResolver = styleUrlResolver;
          this._styleHost = styleHost;
        };
        return ($traceurRuntime.createClass)(_EmulatedScopedCssStep, {process: function(parent, current, control) {
            var $__0 = this;
            var styleEl = current.element;
            var cssText = DOM.getText(styleEl);
            cssText = this._styleUrlResolver.resolveUrls(cssText, this._templateUrl);
            var css = this._styleInliner.inlineImports(cssText, this._templateUrl);
            if (PromiseWrapper.isPromise(css)) {
              DOM.setText(styleEl, '');
              ListWrapper.push(parent.inheritedProtoView.stylePromises, css);
              return css.then((function(css) {
                css = _shimCssForComponent(css, $__0._component);
                DOM.setText(styleEl, css);
              }));
            } else {
              css = _shimCssForComponent(css, this._component);
              DOM.setText(styleEl, css);
            }
            DOM.remove(styleEl);
            _insertStyleElement(this._styleHost, styleEl);
          }}, {}, $__super);
      }(NS.CompileStep));
      Object.defineProperty(_EmulatedScopedCssStep, "parameters", {get: function() {
          return [[DirectiveMetadata], [assert.type.string], [StyleInliner], [StyleUrlResolver], []];
        }});
      Object.defineProperty(_EmulatedScopedCssStep.prototype.process, "parameters", {get: function() {
          return [[CompileElement], [CompileElement], [CompileControl]];
        }});
      _NativeCssStep = (function($__super) {
        var _NativeCssStep = function _NativeCssStep(templateUrl, styleUrlResover) {
          $traceurRuntime.superConstructor(_NativeCssStep).call(this);
          this._styleUrlResolver = styleUrlResover;
          this._templateUrl = templateUrl;
        };
        return ($traceurRuntime.createClass)(_NativeCssStep, {process: function(parent, current, control) {
            var styleEl = current.element;
            var cssText = DOM.getText(styleEl);
            cssText = this._styleUrlResolver.resolveUrls(cssText, this._templateUrl);
            DOM.setText(styleEl, cssText);
          }}, {}, $__super);
      }(NS.CompileStep));
      Object.defineProperty(_NativeCssStep, "parameters", {get: function() {
          return [[assert.type.string], [StyleUrlResolver]];
        }});
      Object.defineProperty(_NativeCssStep.prototype.process, "parameters", {get: function() {
          return [[CompileElement], [CompileElement], [CompileControl]];
        }});
      _componentUIDs = MapWrapper.create();
      _nextComponentUID = 0;
      _sharedStyleTexts = MapWrapper.create();
      Object.defineProperty(_getComponentId, "parameters", {get: function() {
          return [[Type]];
        }});
      Object.defineProperty(_getHostAttribute, "parameters", {get: function() {
          return [[int]];
        }});
      Object.defineProperty(_getContentAttribute, "parameters", {get: function() {
          return [[int]];
        }});
      Object.defineProperty(_shimCssForComponent, "parameters", {get: function() {
          return [[assert.type.string], [Type]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/shadow_dom_strategy.map

//# sourceMappingURL=../../../src/core/compiler/shadow_dom_strategy.js.map