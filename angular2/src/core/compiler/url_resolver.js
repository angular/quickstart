System.register(["angular2/src/facade/lang", "angular2/src/dom/dom_adapter"], function($__export) {
  "use strict";
  var isPresent,
      isBlank,
      RegExpWrapper,
      BaseException,
      DOM,
      UrlResolver,
      _schemeRe;
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      RegExpWrapper = $__m.RegExpWrapper;
      BaseException = $__m.BaseException;
    }, function($__m) {
      DOM = $__m.DOM;
    }],
    execute: function() {
      UrlResolver = $__export("UrlResolver", (function() {
        var UrlResolver = function UrlResolver() {
          if (isBlank(UrlResolver.a)) {
            UrlResolver.a = DOM.createElement('a');
          }
        };
        return ($traceurRuntime.createClass)(UrlResolver, {resolve: function(baseUrl, url) {
            if (isBlank(baseUrl)) {
              UrlResolver.a.href = url;
              return UrlResolver.a.href;
            }
            if (isBlank(url) || url == '')
              return baseUrl;
            if (url[0] == '/') {
              throw new BaseException(("Could not resolve the url " + url + " from " + baseUrl));
            }
            var m = RegExpWrapper.firstMatch(_schemeRe, url);
            if (isPresent(m[1])) {
              return url;
            }
            UrlResolver.a.href = baseUrl + '/../' + url;
            return UrlResolver.a.href;
          }}, {});
      }()));
      Object.defineProperty(UrlResolver.prototype.resolve, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      _schemeRe = RegExpWrapper.create('^([^:/?#]+:)?');
    }
  };
});

//# sourceMappingURL=src/core/compiler/url_resolver.map

//# sourceMappingURL=../../../src/core/compiler/url_resolver.js.map