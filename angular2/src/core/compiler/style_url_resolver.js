System.register(["angular2/di", "angular2/src/facade/lang", "./url_resolver"], function($__export) {
  "use strict";
  var Injectable,
      RegExp,
      RegExpWrapper,
      StringWrapper,
      UrlResolver,
      StyleUrlResolver,
      _cssUrlRe,
      _cssImportRe,
      _quoteRe;
  return {
    setters: [function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      RegExp = $__m.RegExp;
      RegExpWrapper = $__m.RegExpWrapper;
      StringWrapper = $__m.StringWrapper;
    }, function($__m) {
      UrlResolver = $__m.UrlResolver;
    }],
    execute: function() {
      StyleUrlResolver = $__export("StyleUrlResolver", (function() {
        var StyleUrlResolver = function StyleUrlResolver(resolver) {
          this._resolver = resolver;
        };
        return ($traceurRuntime.createClass)(StyleUrlResolver, {
          resolveUrls: function(cssText, baseUrl) {
            cssText = this._replaceUrls(cssText, _cssUrlRe, baseUrl);
            cssText = this._replaceUrls(cssText, _cssImportRe, baseUrl);
            return cssText;
          },
          _replaceUrls: function(cssText, re, baseUrl) {
            var $__0 = this;
            return StringWrapper.replaceAllMapped(cssText, re, (function(m) {
              var pre = m[1];
              var url = StringWrapper.replaceAll(m[2], _quoteRe, '');
              var post = m[3];
              var resolvedUrl = $__0._resolver.resolve(baseUrl, url);
              return pre + "'" + resolvedUrl + "'" + post;
            }));
          }
        }, {});
      }()));
      Object.defineProperty(StyleUrlResolver, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(StyleUrlResolver, "parameters", {get: function() {
          return [[UrlResolver]];
        }});
      Object.defineProperty(StyleUrlResolver.prototype.resolveUrls, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(StyleUrlResolver.prototype._replaceUrls, "parameters", {get: function() {
          return [[assert.type.string], [RegExp], [assert.type.string]];
        }});
      _cssUrlRe = RegExpWrapper.create('(url\\()([^)]*)(\\))');
      _cssImportRe = RegExpWrapper.create('(@import[\\s]+(?!url\\())[\'"]([^\'"]*)[\'"](.*;)');
      _quoteRe = RegExpWrapper.create('[\'"]');
    }
  };
});

//# sourceMappingURL=src/core/compiler/style_url_resolver.map

//# sourceMappingURL=../../../src/core/compiler/style_url_resolver.js.map