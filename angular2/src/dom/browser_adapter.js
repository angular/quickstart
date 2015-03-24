System.register(["angular2/src/facade/collection", "angular2/src/facade/lang", "./dom_adapter", "./generic_browser_adapter"], function($__export) {
  "use strict";
  var List,
      MapWrapper,
      ListWrapper,
      isPresent,
      setRootDomAdapter,
      GenericBrowserDomAdapter,
      _attrToPropMap,
      BrowserDomAdapter;
  return {
    setters: [function($__m) {
      List = $__m.List;
      MapWrapper = $__m.MapWrapper;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      setRootDomAdapter = $__m.setRootDomAdapter;
    }, function($__m) {
      GenericBrowserDomAdapter = $__m.GenericBrowserDomAdapter;
    }],
    execute: function() {
      _attrToPropMap = {
        'innerHtml': 'innerHTML',
        'readonly': 'readOnly',
        'tabindex': 'tabIndex'
      };
      BrowserDomAdapter = $__export("BrowserDomAdapter", (function($__super) {
        var BrowserDomAdapter = function BrowserDomAdapter() {
          $traceurRuntime.superConstructor(BrowserDomAdapter).apply(this, arguments);
        };
        return ($traceurRuntime.createClass)(BrowserDomAdapter, {
          get attrToPropMap() {
            return _attrToPropMap;
          },
          query: function(selector) {
            return document.querySelector(selector);
          },
          querySelector: function(el, selector) {
            return el.querySelector(selector);
          },
          querySelectorAll: function(el, selector) {
            return el.querySelectorAll(selector);
          },
          on: function(el, evt, listener) {
            el.addEventListener(evt, listener, false);
          },
          dispatchEvent: function(el, evt) {
            el.dispatchEvent(evt);
          },
          createMouseEvent: function(eventType) {
            var evt = new MouseEvent(eventType);
            evt.initEvent(eventType, true, true);
            return evt;
          },
          createEvent: function(eventType) {
            return new Event(eventType, true);
          },
          getInnerHTML: function(el) {
            return el.innerHTML;
          },
          getOuterHTML: function(el) {
            return el.outerHTML;
          },
          nodeName: function(node) {
            return node.nodeName;
          },
          nodeValue: function(node) {
            return node.nodeValue;
          },
          type: function(node) {
            return node.type;
          },
          content: function(node) {
            return node.content;
          },
          firstChild: function(el) {
            return el.firstChild;
          },
          nextSibling: function(el) {
            return el.nextSibling;
          },
          parentElement: function(el) {
            return el.parentElement;
          },
          childNodes: function(el) {
            return el.childNodes;
          },
          childNodesAsList: function(el) {
            var childNodes = el.childNodes;
            var res = ListWrapper.createFixedSize(childNodes.length);
            for (var i = 0; i < childNodes.length; i++) {
              res[i] = childNodes[i];
            }
            return res;
          },
          clearNodes: function(el) {
            for (var i = 0; i < el.childNodes.length; i++) {
              this.remove(el.childNodes[i]);
            }
          },
          appendChild: function(el, node) {
            el.appendChild(node);
          },
          removeChild: function(el, node) {
            el.removeChild(node);
          },
          remove: function(el) {
            var parent = el.parentNode;
            parent.removeChild(el);
            return el;
          },
          insertBefore: function(el, node) {
            el.parentNode.insertBefore(node, el);
          },
          insertAllBefore: function(el, nodes) {
            ListWrapper.forEach(nodes, (function(n) {
              el.parentNode.insertBefore(n, el);
            }));
          },
          insertAfter: function(el, node) {
            el.parentNode.insertBefore(node, el.nextSibling);
          },
          setInnerHTML: function(el, value) {
            el.innerHTML = value;
          },
          getText: function(el) {
            return el.textContent;
          },
          setText: function(el, value) {
            el.textContent = value;
          },
          getValue: function(el) {
            return el.value;
          },
          setValue: function(el, value) {
            el.value = value;
          },
          getChecked: function(el) {
            return el.checked;
          },
          setChecked: function(el, value) {
            el.checked = value;
          },
          createTemplate: function(html) {
            var t = document.createElement('template');
            t.innerHTML = html;
            return t;
          },
          createElement: function(tagName) {
            var doc = arguments[1] !== (void 0) ? arguments[1] : document;
            return doc.createElement(tagName);
          },
          createTextNode: function(text) {
            var doc = arguments[1] !== (void 0) ? arguments[1] : document;
            return doc.createTextNode(text);
          },
          createScriptTag: function(attrName, attrValue) {
            var doc = arguments[2] !== (void 0) ? arguments[2] : document;
            var el = doc.createElement('SCRIPT');
            el.setAttribute(attrName, attrValue);
            return el;
          },
          createStyleElement: function(css) {
            var doc = arguments[1] !== (void 0) ? arguments[1] : document;
            var style = doc.createElement('STYLE');
            style.innerText = css;
            return style;
          },
          createShadowRoot: function(el) {
            return el.createShadowRoot();
          },
          getShadowRoot: function(el) {
            return el.shadowRoot;
          },
          clone: function(node) {
            return node.cloneNode(true);
          },
          hasProperty: function(element, name) {
            return name in element;
          },
          getElementsByClassName: function(element, name) {
            return element.getElementsByClassName(name);
          },
          getElementsByTagName: function(element, name) {
            return element.getElementsByTagName(name);
          },
          classList: function(element) {
            return Array.prototype.slice.call(element.classList, 0);
          },
          addClass: function(element, classname) {
            element.classList.add(classname);
          },
          removeClass: function(element, classname) {
            element.classList.remove(classname);
          },
          hasClass: function(element, classname) {
            return element.classList.contains(classname);
          },
          setStyle: function(element, stylename, stylevalue) {
            element.style[stylename] = stylevalue;
          },
          removeStyle: function(element, stylename) {
            element.style[stylename] = null;
          },
          getStyle: function(element, stylename) {
            return element.style[stylename];
          },
          tagName: function(element) {
            return element.tagName;
          },
          attributeMap: function(element) {
            var res = MapWrapper.create();
            var elAttrs = element.attributes;
            for (var i = 0; i < elAttrs.length; i++) {
              var attrib = elAttrs[i];
              MapWrapper.set(res, attrib.name, attrib.value);
            }
            return res;
          },
          getAttribute: function(element, attribute) {
            return element.getAttribute(attribute);
          },
          setAttribute: function(element, name, value) {
            element.setAttribute(name, value);
          },
          removeAttribute: function(element, attribute) {
            return element.removeAttribute(attribute);
          },
          templateAwareRoot: function(el) {
            return el instanceof HTMLTemplateElement ? el.content : el;
          },
          createHtmlDocument: function() {
            return document.implementation.createHTMLDocument();
          },
          defaultDoc: function() {
            return document;
          },
          getTitle: function() {
            return document.title;
          },
          setTitle: function(newTitle) {
            document.title = newTitle;
          },
          elementMatches: function(n, selector) {
            return n instanceof HTMLElement && n.matches(selector);
          },
          isTemplateElement: function(el) {
            return el instanceof HTMLTemplateElement;
          },
          isTextNode: function(node) {
            return node.nodeType === Node.TEXT_NODE;
          },
          isCommentNode: function(node) {
            return node.nodeType === Node.COMMENT_NODE;
          },
          isElementNode: function(node) {
            return node.nodeType === Node.ELEMENT_NODE;
          },
          hasShadowRoot: function(node) {
            return node instanceof HTMLElement && isPresent(node.shadowRoot);
          },
          importIntoDoc: function(node) {
            var result = document.importNode(node, true);
            if (this.isTemplateElement(result) && !result.content.childNodes.length && node.content.childNodes.length) {
              var childNodes = node.content.childNodes;
              for (var i = 0; i < childNodes.length; ++i) {
                result.content.appendChild(this.importIntoDoc(childNodes[i]));
              }
            }
            return result;
          },
          isPageRule: function(rule) {
            return rule.type === CSSRule.PAGE_RULE;
          },
          isStyleRule: function(rule) {
            return rule.type === CSSRule.STYLE_RULE;
          },
          isMediaRule: function(rule) {
            return rule.type === CSSRule.MEDIA_RULE;
          },
          isKeyframesRule: function(rule) {
            return rule.type === CSSRule.KEYFRAMES_RULE;
          },
          getHref: function(el) {
            return el.href;
          }
        }, {makeCurrent: function() {
            setRootDomAdapter(new BrowserDomAdapter());
          }}, $__super);
      }(GenericBrowserDomAdapter)));
      Object.defineProperty(BrowserDomAdapter.prototype.query, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.querySelector, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.querySelectorAll, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.nodeName, "parameters", {get: function() {
          return [[Node]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.nodeValue, "parameters", {get: function() {
          return [[Node]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.type, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.content, "parameters", {get: function() {
          return [[HTMLTemplateElement]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.setText, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.setValue, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.setChecked, "parameters", {get: function() {
          return [[], [assert.type.boolean]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.createTextNode, "parameters", {get: function() {
          return [[assert.type.string], []];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.createScriptTag, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], []];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.createStyleElement, "parameters", {get: function() {
          return [[assert.type.string], []];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.createShadowRoot, "parameters", {get: function() {
          return [[HTMLElement]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.getShadowRoot, "parameters", {get: function() {
          return [[HTMLElement]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.clone, "parameters", {get: function() {
          return [[Node]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.hasProperty, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.getElementsByClassName, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.getElementsByTagName, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.addClass, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.removeClass, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.hasClass, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.setStyle, "parameters", {get: function() {
          return [[], [assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.removeStyle, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.getStyle, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.getAttribute, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.setAttribute, "parameters", {get: function() {
          return [[], [assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.removeAttribute, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.setTitle, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.elementMatches, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.isTemplateElement, "parameters", {get: function() {
          return [[assert.type.any]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.isTextNode, "parameters", {get: function() {
          return [[Node]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.isCommentNode, "parameters", {get: function() {
          return [[Node]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.isElementNode, "parameters", {get: function() {
          return [[Node]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.importIntoDoc, "parameters", {get: function() {
          return [[Node]];
        }});
      Object.defineProperty(BrowserDomAdapter.prototype.getHref, "parameters", {get: function() {
          return [[Element]];
        }});
    }
  };
});

//# sourceMappingURL=src/dom/browser_adapter.map

//# sourceMappingURL=../../src/dom/browser_adapter.js.map