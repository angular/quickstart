System.register(["angular2/src/dom/dom_adapter", "angular2/src/facade/collection", "angular2/src/facade/lang", "../view", "../element_injector", "../view_container", "./content_tag"], function($__export) {
  "use strict";
  var DOM,
      List,
      ListWrapper,
      isBlank,
      isPresent,
      View,
      ElementInjector,
      ViewContainer,
      Content,
      SourceLightDom,
      DestinationLightDom,
      _Root,
      LightDom;
  function redistributeNodes(contents, nodes) {
    for (var i = 0; i < contents.length; ++i) {
      var content = contents[i];
      var select = content.select;
      var matchSelector = (function(n) {
        return DOM.elementMatches(n, select);
      });
      if (isBlank(select)) {
        content.insert(nodes);
        ListWrapper.clear(nodes);
      } else {
        var matchingNodes = ListWrapper.filter(nodes, matchSelector);
        content.insert(matchingNodes);
        ListWrapper.removeAll(nodes, matchingNodes);
      }
    }
  }
  return {
    setters: [function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
    }, function($__m) {
      View = $__m.View;
    }, function($__m) {
      ElementInjector = $__m.ElementInjector;
    }, function($__m) {
      ViewContainer = $__m.ViewContainer;
    }, function($__m) {
      Content = $__m.Content;
    }],
    execute: function() {
      SourceLightDom = $__export("SourceLightDom", (function() {
        var SourceLightDom = function SourceLightDom() {};
        return ($traceurRuntime.createClass)(SourceLightDom, {}, {});
      }()));
      DestinationLightDom = $__export("DestinationLightDom", (function() {
        var DestinationLightDom = function DestinationLightDom() {};
        return ($traceurRuntime.createClass)(DestinationLightDom, {}, {});
      }()));
      _Root = (function() {
        var _Root = function _Root(node, injector) {
          this.node = node;
          this.injector = injector;
        };
        return ($traceurRuntime.createClass)(_Root, {}, {});
      }());
      LightDom = $__export("LightDom", (function() {
        var LightDom = function LightDom(lightDomView, shadowDomView, element) {
          this.lightDomView = lightDomView;
          this.shadowDomView = shadowDomView;
          this.nodes = DOM.childNodesAsList(element);
          this.roots = null;
        };
        return ($traceurRuntime.createClass)(LightDom, {
          redistribute: function() {
            var tags = this.contentTags();
            if (tags.length > 0) {
              redistributeNodes(tags, this.expandedDomNodes());
            }
          },
          contentTags: function() {
            return this._collectAllContentTags(this.shadowDomView, []);
          },
          _collectAllContentTags: function(view, acc) {
            var $__0 = this;
            var eis = view.elementInjectors;
            for (var i = 0; i < eis.length; ++i) {
              var ei = eis[i];
              if (isBlank(ei))
                continue;
              if (ei.hasDirective(Content)) {
                ListWrapper.push(acc, ei.get(Content));
              } else if (ei.hasPreBuiltObject(ViewContainer)) {
                var vc = ei.get(ViewContainer);
                ListWrapper.forEach(vc.contentTagContainers(), (function(view) {
                  $__0._collectAllContentTags(view, acc);
                }));
              }
            }
            return acc;
          },
          expandedDomNodes: function() {
            var res = [];
            var roots = this._roots();
            for (var i = 0; i < roots.length; ++i) {
              var root = roots[i];
              var ei = root.injector;
              if (isPresent(ei) && ei.hasPreBuiltObject(ViewContainer)) {
                var vc = root.injector.get(ViewContainer);
                res = ListWrapper.concat(res, vc.nodes());
              } else if (isPresent(ei) && ei.hasDirective(Content)) {
                var content = root.injector.get(Content);
                res = ListWrapper.concat(res, content.nodes());
              } else {
                ListWrapper.push(res, root.node);
              }
            }
            return res;
          },
          _roots: function() {
            if (isPresent(this.roots))
              return this.roots;
            var viewInj = this.lightDomView.elementInjectors;
            this.roots = ListWrapper.map(this.nodes, (function(n) {
              return new _Root(n, ListWrapper.find(viewInj, (function(inj) {
                return isPresent(inj) ? inj.forElement(n) : false;
              })));
            }));
            return this.roots;
          }
        }, {});
      }()));
      Object.defineProperty(LightDom, "parameters", {get: function() {
          return [[View], [View], []];
        }});
      Object.defineProperty(LightDom.prototype._collectAllContentTags, "parameters", {get: function() {
          return [[View], [assert.genericType(List, Content)]];
        }});
      Object.defineProperty(redistributeNodes, "parameters", {get: function() {
          return [[assert.genericType(List, Content)], [List]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/shadow_dom_emulation/light_dom.map

//# sourceMappingURL=../../../../src/core/compiler/shadow_dom_emulation/light_dom.js.map