System.register(["../../annotations/annotations", "./light_dom", "angular2/di", "angular2/src/dom/dom_adapter", "angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/core/dom/element"], function($__export) {
  "use strict";
  var Decorator,
      SourceLightDom,
      DestinationLightDom,
      LightDom,
      Inject,
      DOM,
      isPresent,
      List,
      ListWrapper,
      NgElement,
      ContentStrategy,
      RenderedContent,
      IntermediateContent,
      Content;
  return {
    setters: [function($__m) {
      Decorator = $__m.Decorator;
    }, function($__m) {
      SourceLightDom = $__m.SourceLightDom;
      DestinationLightDom = $__m.DestinationLightDom;
      LightDom = $__m.LightDom;
    }, function($__m) {
      Inject = $__m.Inject;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      NgElement = $__m.NgElement;
    }],
    execute: function() {
      ContentStrategy = (function() {
        var ContentStrategy = function ContentStrategy() {};
        return ($traceurRuntime.createClass)(ContentStrategy, {insert: function(nodes) {}}, {});
      }());
      Object.defineProperty(ContentStrategy.prototype.insert, "parameters", {get: function() {
          return [[List]];
        }});
      RenderedContent = (function($__super) {
        var RenderedContent = function RenderedContent(contentEl) {
          $traceurRuntime.superConstructor(RenderedContent).call(this);
          this._replaceContentElementWithScriptTags(contentEl);
          this.nodes = [];
        };
        return ($traceurRuntime.createClass)(RenderedContent, {
          _scriptTemplate: function() {
            if (!isPresent(RenderedContent._lazyScriptTemplate)) {
              RenderedContent._lazyScriptTemplate = DOM.createScriptTag('type', 'ng/content');
            }
            return RenderedContent._lazyScriptTemplate;
          },
          insert: function(nodes) {
            this.nodes = nodes;
            DOM.insertAllBefore(this.endScript, nodes);
            this._removeNodesUntil(ListWrapper.isEmpty(nodes) ? this.endScript : nodes[0]);
          },
          _replaceContentElementWithScriptTags: function(contentEl) {
            this.beginScript = DOM.clone(this._scriptTemplate());
            this.endScript = DOM.clone(this._scriptTemplate());
            DOM.insertBefore(contentEl, this.beginScript);
            DOM.insertBefore(contentEl, this.endScript);
            DOM.removeChild(DOM.parentElement(contentEl), contentEl);
          },
          _removeNodesUntil: function(node) {
            var p = DOM.parentElement(this.beginScript);
            for (var next = DOM.nextSibling(this.beginScript); next !== node; next = DOM.nextSibling(this.beginScript)) {
              DOM.removeChild(p, next);
            }
          }
        }, {}, $__super);
      }(ContentStrategy));
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
          return [[LightDom]];
        }});
      Object.defineProperty(IntermediateContent.prototype.insert, "parameters", {get: function() {
          return [[List]];
        }});
      Content = $__export("Content", (function() {
        var Content = function Content(destinationLightDom, contentEl) {
          this.select = contentEl.getAttribute('select');
          this._strategy = isPresent(destinationLightDom) ? new IntermediateContent(destinationLightDom) : new RenderedContent(contentEl.domElement);
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
      Object.defineProperty(Content, "annotations", {get: function() {
          return [new Decorator({selector: 'content'})];
        }});
      Object.defineProperty(Content, "parameters", {get: function() {
          return [[new Inject(DestinationLightDom)], [NgElement]];
        }});
      Object.defineProperty(Content.prototype.insert, "parameters", {get: function() {
          return [[List]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/shadow_dom_emulation/content_tag.map

//# sourceMappingURL=../../../../src/core/compiler/shadow_dom_emulation/content_tag.js.map