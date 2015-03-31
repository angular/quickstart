System.register(["angular2/di", "angular2/src/core/compiler/xhr/xhr", "angular2/src/core/compiler/style_url_resolver", "angular2/src/core/compiler/url_resolver", "angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/facade/async"], function($__export) {
  "use strict";
  var Injectable,
      XHR,
      StyleUrlResolver,
      UrlResolver,
      ListWrapper,
      isBlank,
      isPresent,
      RegExp,
      RegExpWrapper,
      StringWrapper,
      normalizeBlank,
      Promise,
      PromiseWrapper,
      StyleInliner,
      _importRe,
      _urlRe,
      _mediaQueryRe;
  function _extractUrl(importRule) {
    var match = RegExpWrapper.firstMatch(_urlRe, importRule);
    if (isBlank(match))
      return null;
    return isPresent(match[1]) ? match[1] : match[2];
  }
  function _extractMediaQuery(importRule) {
    var match = RegExpWrapper.firstMatch(_mediaQueryRe, importRule);
    if (isBlank(match))
      return null;
    var mediaQuery = match[1].trim();
    return (mediaQuery.length > 0) ? mediaQuery : null;
  }
  function _wrapInMediaRule(css, query) {
    return (isBlank(query)) ? css : ("@media " + query + " {\n" + css + "\n}");
  }
  return {
    setters: [function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      XHR = $__m.XHR;
    }, function($__m) {
      StyleUrlResolver = $__m.StyleUrlResolver;
    }, function($__m) {
      UrlResolver = $__m.UrlResolver;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
      RegExp = $__m.RegExp;
      RegExpWrapper = $__m.RegExpWrapper;
      StringWrapper = $__m.StringWrapper;
      normalizeBlank = $__m.normalizeBlank;
    }, function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
    }],
    execute: function() {
      StyleInliner = $__export("StyleInliner", (function() {
        var StyleInliner = function StyleInliner(xhr, styleUrlResolver, urlResolver) {
          this._xhr = xhr;
          this._urlResolver = urlResolver;
          this._styleUrlResolver = styleUrlResolver;
        };
        return ($traceurRuntime.createClass)(StyleInliner, {
          inlineImports: function(cssText, baseUrl) {
            return this._inlineImports(cssText, baseUrl, []);
          },
          _inlineImports: function(cssText, baseUrl, inlinedUrls) {
            var $__0 = this;
            var partIndex = 0;
            var parts = StringWrapper.split(cssText, _importRe);
            if (parts.length === 1) {
              return cssText;
            }
            var promises = [];
            while (partIndex < parts.length - 1) {
              var prefix = parts[partIndex];
              var rule = parts[partIndex + 1];
              var url = _extractUrl(rule);
              if (isPresent(url)) {
                url = this._urlResolver.resolve(baseUrl, url);
              }
              var mediaQuery = _extractMediaQuery(rule);
              var promise = void 0;
              if (isBlank(url)) {
                promise = PromiseWrapper.resolve(("/* Invalid import rule: \"@import " + rule + ";\" */"));
              } else if (ListWrapper.contains(inlinedUrls, url)) {
                promise = PromiseWrapper.resolve(prefix);
              } else {
                ListWrapper.push(inlinedUrls, url);
                promise = PromiseWrapper.then(this._xhr.get(url), (function(css) {
                  css = $__0._inlineImports(css, url, inlinedUrls);
                  if (PromiseWrapper.isPromise(css)) {
                    return css.then((function(css) {
                      return prefix + $__0._transformImportedCss(css, mediaQuery, url) + '\n';
                    }));
                  } else {
                    return prefix + $__0._transformImportedCss(css, mediaQuery, url) + '\n';
                  }
                }), (function(error) {
                  return ("/* failed to import " + url + " */\n");
                }));
              }
              ListWrapper.push(promises, promise);
              partIndex += 2;
            }
            return PromiseWrapper.all(promises).then(function(cssParts) {
              var cssText = cssParts.join('');
              if (partIndex < parts.length) {
                cssText += parts[partIndex];
              }
              return cssText;
            });
          },
          _transformImportedCss: function(css, mediaQuery, url) {
            css = this._styleUrlResolver.resolveUrls(css, url);
            return _wrapInMediaRule(css, mediaQuery);
          }
        }, {});
      }()));
      Object.defineProperty(StyleInliner, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(StyleInliner, "parameters", {get: function() {
          return [[XHR], [StyleUrlResolver], [UrlResolver]];
        }});
      Object.defineProperty(StyleInliner.prototype.inlineImports, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(StyleInliner.prototype._inlineImports, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], [assert.genericType(List, assert.type.string)]];
        }});
      Object.defineProperty(StyleInliner.prototype._transformImportedCss, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(_extractUrl, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(_extractMediaQuery, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(_wrapInMediaRule, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      _importRe = RegExpWrapper.create('@import\\s+([^;]+);');
      _urlRe = RegExpWrapper.create('url\\(\\s*?[\'"]?([^\'")]+)[\'"]?|' + '[\'"]([^\'")]+)[\'"]');
      _mediaQueryRe = RegExpWrapper.create('[\'"][^\'"]+[\'"]\\s*\\)?\\s*(.*)');
    }
  };
});
//# sourceMappingURL=style_inliner.js.map

//# sourceMappingURL=../../../src/core/compiler/style_inliner.js.map