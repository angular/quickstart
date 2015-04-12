System.register(["angular2/src/dom/dom_adapter", "angular2/src/facade/collection", "angular2/src/facade/lang", "../view", "./content_tag"], function($__export) {
  "use strict";
  var DOM,
      List,
      ListWrapper,
      isBlank,
      isPresent,
      viewModule,
      Content,
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
      if (select.length === 0) {
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
      viewModule = $__m;
    }, function($__m) {
      Content = $__m.Content;
    }],
    execute: function() {
      DestinationLightDom = $__export("DestinationLightDom", (function() {
        var DestinationLightDom = function DestinationLightDom() {
          ;
        };
        return ($traceurRuntime.createClass)(DestinationLightDom, {}, {});
      }()));
      _Root = (function() {
        var _Root = function _Root(node, viewContainer, content) {
          this.node = node;
          this.viewContainer = viewContainer;
          this.content = content;
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
            var contentTags = view.contentTags;
            var vcs = view.viewContainers;
            for (var i = 0; i < vcs.length; i++) {
              var vc = vcs[i];
              var contentTag = contentTags[i];
              if (isPresent(contentTag)) {
                ListWrapper.push(acc, contentTag);
              }
              if (isPresent(vc)) {
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
              if (isPresent(root.viewContainer)) {
                res = ListWrapper.concat(res, root.viewContainer.nodes());
              } else if (isPresent(root.content)) {
                res = ListWrapper.concat(res, root.content.nodes());
              } else {
                ListWrapper.push(res, root.node);
              }
            }
            return res;
          },
          _roots: function() {
            if (isPresent(this.roots))
              return this.roots;
            var viewContainers = this.lightDomView.viewContainers;
            var contentTags = this.lightDomView.contentTags;
            this.roots = ListWrapper.map(this.nodes, (function(n) {
              var foundVc = null;
              var foundContentTag = null;
              for (var i = 0; i < viewContainers.length; i++) {
                var vc = viewContainers[i];
                var contentTag = contentTags[i];
                if (isPresent(vc) && vc.templateElement === n) {
                  foundVc = vc;
                }
                if (isPresent(contentTag) && contentTag.contentStartElement === n) {
                  foundContentTag = contentTag;
                }
              }
              return new _Root(n, foundVc, foundContentTag);
            }));
            return this.roots;
          }
        }, {});
      }()));
      Object.defineProperty(LightDom, "parameters", {get: function() {
          return [[viewModule.View], [viewModule.View], []];
        }});
      Object.defineProperty(LightDom.prototype._collectAllContentTags, "parameters", {get: function() {
          return [[viewModule.View], [assert.genericType(List, Content)]];
        }});
      Object.defineProperty(redistributeNodes, "parameters", {get: function() {
          return [[assert.genericType(List, Content)], [List]];
        }});
    }
  };
});
//# sourceMappingURL=light_dom.js.map

//# sourceMappingURL=../../../../src/core/compiler/shadow_dom_emulation/light_dom.js.map