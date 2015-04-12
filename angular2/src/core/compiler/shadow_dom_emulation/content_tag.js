System.register(["./light_dom", "angular2/di", "angular2/src/dom/dom_adapter", "angular2/src/facade/lang", "angular2/src/facade/collection"], function($__export) {
  "use strict";
  var ldModule,
      Inject,
      Injectable,
      DOM,
      isPresent,
      List,
      ListWrapper,
      ContentStrategy,
      RenderedContent,
      IntermediateContent,
      Content;
  return {
    setters: [function($__m) {
      ldModule = $__m;
    }, function($__m) {
      Inject = $__m.Inject;
      Injectable = $__m.Injectable;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }],
    execute: function() {
      ContentStrategy = (function() {
        var ContentStrategy = function ContentStrategy() {
          ;
        };
        return ($traceurRuntime.createClass)(ContentStrategy, {insert: function(nodes) {}}, {});
      }());
      Object.defineProperty(ContentStrategy.prototype.insert, "parameters", {get: function() {
          return [[List]];
        }});
      RenderedContent = (function($__super) {
        var RenderedContent = function RenderedContent(contentEl) {
          $traceurRuntime.superConstructor(RenderedContent).call(this);
          this.beginScript = contentEl;
          this.endScript = DOM.nextSibling(this.beginScript);
          this.nodes = [];
        };
        return ($traceurRuntime.createClass)(RenderedContent, {
          insert: function(nodes) {
            this.nodes = nodes;
            DOM.insertAllBefore(this.endScript, nodes);
            this._removeNodesUntil(ListWrapper.isEmpty(nodes) ? this.endScript : nodes[0]);
          },
          _removeNodesUntil: function(node) {
            var p = DOM.parentElement(this.beginScript);
            for (var next = DOM.nextSibling(this.beginScript); next !== node; next = DOM.nextSibling(this.beginScript)) {
              DOM.removeChild(p, next);
            }
          }
        }, {}, $__super);
      }(ContentStrategy));
      Object.defineProperty(RenderedContent, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(RenderedContent.prototype.insert, "parameters", {get: function() {
          return [[List]];
        }});
      IntermediateContent = (function($__super) {
        var IntermediateContent = function IntermediateContent(destinationLightDom) {
          $traceurRuntime.superConstructor(IntermediateContent).call(this);
          this.destinationLightDom = destinationLightDom;
          this.nodes = [];
        };
        return ($traceurRuntime.createClass)(IntermediateContent, {insert: function(nodes) {
            this.nodes = nodes;
            this.destinationLightDom.redistribute();
          }}, {}, $__super);
      }(ContentStrategy));
      Object.defineProperty(IntermediateContent, "parameters", {get: function() {
          return [[ldModule.LightDom]];
        }});
      Object.defineProperty(IntermediateContent.prototype.insert, "parameters", {get: function() {
          return [[List]];
        }});
      Content = $__export("Content", (function() {
        var Content = function Content(destinationLightDom, contentStartEl, selector) {
          this.select = selector;
          this.contentStartElement = contentStartEl;
          this._strategy = isPresent(destinationLightDom) ? new IntermediateContent(destinationLightDom) : new RenderedContent(contentStartEl);
        };
        return ($traceurRuntime.createClass)(Content, {
          nodes: function() {
            return this._strategy.nodes;
          },
          insert: function(nodes) {
            this._strategy.insert(nodes);
          }
        }, {});
      }()));
      Object.defineProperty(Content, "parameters", {get: function() {
          return [[ldModule.LightDom], [], [assert.type.string]];
        }});
      Object.defineProperty(Content.prototype.insert, "parameters", {get: function() {
          return [[List]];
        }});
    }
  };
});
//# sourceMappingURL=content_tag.js.map

//# sourceMappingURL=../../../../src/core/compiler/shadow_dom_emulation/content_tag.js.map