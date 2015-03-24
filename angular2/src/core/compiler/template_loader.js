System.register(["angular2/di", "angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/dom/dom_adapter", "./xhr/xhr", "angular2/src/core/annotations/template", "./url_resolver"], function($__export) {
  "use strict";
  var Injectable,
      isBlank,
      isPresent,
      BaseException,
      stringify,
      Map,
      MapWrapper,
      StringMapWrapper,
      StringMap,
      DOM,
      XHR,
      Template,
      UrlResolver,
      TemplateLoader;
  return {
    setters: [function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
      BaseException = $__m.BaseException;
      stringify = $__m.stringify;
    }, function($__m) {
      Map = $__m.Map;
      MapWrapper = $__m.MapWrapper;
      StringMapWrapper = $__m.StringMapWrapper;
      StringMap = $__m.StringMap;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      XHR = $__m.XHR;
    }, function($__m) {
      Template = $__m.Template;
    }, function($__m) {
      UrlResolver = $__m.UrlResolver;
    }],
    execute: function() {
      TemplateLoader = $__export("TemplateLoader", (function() {
        var TemplateLoader = function TemplateLoader(xhr, urlResolver) {
          this._xhr = xhr;
          this._urlResolver = urlResolver;
          this._htmlCache = StringMapWrapper.create();
          this._baseUrls = MapWrapper.create();
          this._urlCache = MapWrapper.create();
        };
        return ($traceurRuntime.createClass)(TemplateLoader, {
          load: function(template) {
            if (isPresent(template.inline)) {
              return DOM.createTemplate(template.inline);
            }
            if (isPresent(template.url)) {
              var url = this.getTemplateUrl(template);
              var promise = StringMapWrapper.get(this._htmlCache, url);
              if (isBlank(promise)) {
                promise = this._xhr.get(url).then(function(html) {
                  var template = DOM.createTemplate(html);
                  return template;
                });
                StringMapWrapper.set(this._htmlCache, url, promise);
              }
              return promise;
            }
            throw new BaseException('Templates should have either their url or inline property set');
          },
          setBaseUrl: function(template, baseUrl) {
            MapWrapper.set(this._baseUrls, template, baseUrl);
            MapWrapper.delete(this._urlCache, template);
          },
          getTemplateUrl: function(template) {
            if (!MapWrapper.contains(this._urlCache, template)) {
              var baseUrl = MapWrapper.get(this._baseUrls, template);
              if (isBlank(baseUrl)) {
                throw new BaseException('The template base URL is not set');
              }
              var templateUrl;
              if (isPresent(template.url)) {
                templateUrl = this._urlResolver.resolve(baseUrl, template.url);
              } else {
                templateUrl = baseUrl;
              }
              MapWrapper.set(this._urlCache, template, templateUrl);
            }
            return MapWrapper.get(this._urlCache, template);
          }
        }, {});
      }()));
      Object.defineProperty(TemplateLoader, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(TemplateLoader, "parameters", {get: function() {
          return [[XHR], [UrlResolver]];
        }});
      Object.defineProperty(TemplateLoader.prototype.load, "parameters", {get: function() {
          return [[Template]];
        }});
      Object.defineProperty(TemplateLoader.prototype.setBaseUrl, "parameters", {get: function() {
          return [[Template], [assert.type.string]];
        }});
      Object.defineProperty(TemplateLoader.prototype.getTemplateUrl, "parameters", {get: function() {
          return [[Template]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/template_loader.map

//# sourceMappingURL=../../../src/core/compiler/template_loader.js.map