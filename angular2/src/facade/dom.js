System.register(["angular2/src/facade/collection"], function($__export) {
  "use strict";
  var List,
      MapWrapper,
      ListWrapper,
      window,
      DocumentFragment,
      Node,
      NodeList,
      Text,
      Element,
      TemplateElement,
      StyleElement,
      document,
      location,
      gc,
      CssRule,
      CssKeyframesRule,
      DOM,
      CSSRuleWrapper;
  return {
    setters: [function($__m) {
      List = $__m.List;
      MapWrapper = $__m.MapWrapper;
      ListWrapper = $__m.ListWrapper;
    }],
    execute: function() {
      window = $__export("window", frames.window);
      DocumentFragment = $__export("DocumentFragment", window.DocumentFragment);
      Node = $__export("Node", window.Node);
      NodeList = $__export("NodeList", window.NodeList);
      Text = $__export("Text", window.Text);
      Element = $__export("Element", window.HTMLElement);
      TemplateElement = $__export("TemplateElement", window.HTMLTemplateElement);
      StyleElement = $__export("StyleElement", window.HTMLStyleElement);
      document = $__export("document", window.document);
      location = $__export("location", window.location);
      gc = $__export("gc", window.gc ? (function() {
        return window.gc();
      }) : (function() {
        return null;
      }));
      CssRule = $__export("CssRule", window.CSSRule);
      CssKeyframesRule = $__export("CssKeyframesRule", window.CSSKeyframesRule);
      DOM = $__export("DOM", (function() {
        var DOM = function DOM() {};
        return ($traceurRuntime.createClass)(DOM, {}, {
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
            el.innerHTML = "";
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
            var el = doc.createElement("SCRIPT");
            el.setAttribute(attrName, attrValue);
            return el;
          },
          createStyleElement: function(css) {
            var doc = arguments[1] !== (void 0) ? arguments[1] : document;
            var style = doc.createElement('STYLE');
            style.innerText = css;
            return style;
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
            return el instanceof TemplateElement ? el.content : el;
          },
          createHtmlDocument: function() {
            return document.implementation.createHTMLDocument();
          },
          defaultDoc: function() {
            return document;
          },
          elementMatches: function(n, selector) {
            return n instanceof Element && n.matches(selector);
          },
          isTemplateElement: function(el) {
            return el instanceof TemplateElement;
          },
          isTextNode: function(node) {
            return node.nodeType === Node.TEXT_NODE;
          },
          isElementNode: function(node) {
            return node.nodeType === Node.ELEMENT_NODE;
          },
          importIntoDoc: function(node) {
            return document.importNode(node, true);
          }
        });
      }()));
      Object.defineProperty(DOM.querySelector, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(DOM.querySelectorAll, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(DOM.nodeName, "parameters", {get: function() {
          return [[Node]];
        }});
      Object.defineProperty(DOM.nodeValue, "parameters", {get: function() {
          return [[Node]];
        }});
      Object.defineProperty(DOM.type, "parameters", {get: function() {
          return [[Element]];
        }});
      Object.defineProperty(DOM.content, "parameters", {get: function() {
          return [[TemplateElement]];
        }});
      Object.defineProperty(DOM.remove, "parameters", {get: function() {
          return [[Element]];
        }});
      Object.defineProperty(DOM.getText, "parameters", {get: function() {
          return [[Element]];
        }});
      Object.defineProperty(DOM.setText, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(DOM.getValue, "parameters", {get: function() {
          return [[Element]];
        }});
      Object.defineProperty(DOM.setValue, "parameters", {get: function() {
          return [[Element], [assert.type.string]];
        }});
      Object.defineProperty(DOM.getChecked, "parameters", {get: function() {
          return [[Element]];
        }});
      Object.defineProperty(DOM.setChecked, "parameters", {get: function() {
          return [[Element], [assert.type.boolean]];
        }});
      Object.defineProperty(DOM.createTextNode, "parameters", {get: function() {
          return [[assert.type.string], []];
        }});
      Object.defineProperty(DOM.createScriptTag, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], []];
        }});
      Object.defineProperty(DOM.createStyleElement, "parameters", {get: function() {
          return [[assert.type.string], []];
        }});
      Object.defineProperty(DOM.clone, "parameters", {get: function() {
          return [[Node]];
        }});
      Object.defineProperty(DOM.hasProperty, "parameters", {get: function() {
          return [[Element], [assert.type.string]];
        }});
      Object.defineProperty(DOM.getElementsByClassName, "parameters", {get: function() {
          return [[Element], [assert.type.string]];
        }});
      Object.defineProperty(DOM.getElementsByTagName, "parameters", {get: function() {
          return [[Element], [assert.type.string]];
        }});
      Object.defineProperty(DOM.classList, "parameters", {get: function() {
          return [[Element]];
        }});
      Object.defineProperty(DOM.addClass, "parameters", {get: function() {
          return [[Element], [assert.type.string]];
        }});
      Object.defineProperty(DOM.removeClass, "parameters", {get: function() {
          return [[Element], [assert.type.string]];
        }});
      Object.defineProperty(DOM.hasClass, "parameters", {get: function() {
          return [[Element], [assert.type.string]];
        }});
      Object.defineProperty(DOM.setStyle, "parameters", {get: function() {
          return [[Element], [assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(DOM.removeStyle, "parameters", {get: function() {
          return [[Element], [assert.type.string]];
        }});
      Object.defineProperty(DOM.getStyle, "parameters", {get: function() {
          return [[Element], [assert.type.string]];
        }});
      Object.defineProperty(DOM.tagName, "parameters", {get: function() {
          return [[Element]];
        }});
      Object.defineProperty(DOM.attributeMap, "parameters", {get: function() {
          return [[Element]];
        }});
      Object.defineProperty(DOM.getAttribute, "parameters", {get: function() {
          return [[Element], [assert.type.string]];
        }});
      Object.defineProperty(DOM.setAttribute, "parameters", {get: function() {
          return [[Element], [assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(DOM.removeAttribute, "parameters", {get: function() {
          return [[Element], [assert.type.string]];
        }});
      Object.defineProperty(DOM.templateAwareRoot, "parameters", {get: function() {
          return [[Element]];
        }});
      Object.defineProperty(DOM.elementMatches, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(DOM.isTemplateElement, "parameters", {get: function() {
          return [[assert.type.any]];
        }});
      Object.defineProperty(DOM.isTextNode, "parameters", {get: function() {
          return [[Node]];
        }});
      Object.defineProperty(DOM.isElementNode, "parameters", {get: function() {
          return [[Node]];
        }});
      Object.defineProperty(DOM.importIntoDoc, "parameters", {get: function() {
          return [[Node]];
        }});
      CSSRuleWrapper = $__export("CSSRuleWrapper", (function() {
        var CSSRuleWrapper = function CSSRuleWrapper() {};
        return ($traceurRuntime.createClass)(CSSRuleWrapper, {}, {
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
          }
        });
      }()));
    }
  };
});

//# sourceMappingURL=src/facade/dom.map

//# sourceMappingURL=../../src/facade/dom.js.map