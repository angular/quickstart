System.register(["angular2/di", "angular2/src/core/compiler/compiler", "angular2/src/reflection/reflection", "angular2/change_detection", "angular2/src/core/exception_handler", "angular2/src/core/compiler/template_loader", "angular2/src/core/compiler/template_resolver", "angular2/src/core/compiler/directive_metadata_reader", "angular2/src/core/compiler/shadow_dom_strategy", "angular2/src/core/compiler/xhr/xhr", "angular2/src/mock/xhr_mock", "angular2/src/core/compiler/component_url_mapper", "angular2/src/core/compiler/url_resolver", "angular2/src/core/compiler/style_url_resolver", "angular2/src/core/compiler/style_inliner", "angular2/src/core/compiler/css_processor", "angular2/src/facade/collection", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var bind,
      Compiler,
      CompilerCache,
      Reflector,
      reflector,
      Parser,
      Lexer,
      ChangeDetection,
      dynamicChangeDetection,
      ExceptionHandler,
      TemplateLoader,
      TemplateResolver,
      DirectiveMetadataReader,
      ShadowDomStrategy,
      NativeShadowDomStrategy,
      XHR,
      XHRMock,
      ComponentUrlMapper,
      UrlResolver,
      StyleUrlResolver,
      StyleInliner,
      CssProcessor,
      Injector,
      List,
      ListWrapper,
      FunctionWrapper,
      FunctionWithParamTokens;
  function _getRootBindings() {
    return [bind(Reflector).toValue(reflector)];
  }
  function _getAppBindings() {
    return [bind(ShadowDomStrategy).toClass(NativeShadowDomStrategy), Compiler, CompilerCache, TemplateResolver, bind(ChangeDetection).toValue(dynamicChangeDetection), TemplateLoader, DirectiveMetadataReader, Parser, Lexer, ExceptionHandler, bind(XHR).toClass(XHRMock), ComponentUrlMapper, UrlResolver, StyleUrlResolver, StyleInliner, bind(CssProcessor).toFactory((function() {
      return new CssProcessor(null);
    }), [])];
  }
  function createTestInjector(bindings) {
    var rootInjector = new Injector(_getRootBindings());
    return rootInjector.createChild(ListWrapper.concat(_getAppBindings(), bindings));
  }
  function inject(tokens, fn) {
    return new FunctionWithParamTokens(tokens, fn);
  }
  $__export("createTestInjector", createTestInjector);
  $__export("inject", inject);
  return {
    setters: [function($__m) {
      bind = $__m.bind;
      Injector = $__m.Injector;
    }, function($__m) {
      Compiler = $__m.Compiler;
      CompilerCache = $__m.CompilerCache;
    }, function($__m) {
      Reflector = $__m.Reflector;
      reflector = $__m.reflector;
    }, function($__m) {
      Parser = $__m.Parser;
      Lexer = $__m.Lexer;
      ChangeDetection = $__m.ChangeDetection;
      dynamicChangeDetection = $__m.dynamicChangeDetection;
    }, function($__m) {
      ExceptionHandler = $__m.ExceptionHandler;
    }, function($__m) {
      TemplateLoader = $__m.TemplateLoader;
    }, function($__m) {
      TemplateResolver = $__m.TemplateResolver;
    }, function($__m) {
      DirectiveMetadataReader = $__m.DirectiveMetadataReader;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
      NativeShadowDomStrategy = $__m.NativeShadowDomStrategy;
    }, function($__m) {
      XHR = $__m.XHR;
    }, function($__m) {
      XHRMock = $__m.XHRMock;
    }, function($__m) {
      ComponentUrlMapper = $__m.ComponentUrlMapper;
    }, function($__m) {
      UrlResolver = $__m.UrlResolver;
    }, function($__m) {
      StyleUrlResolver = $__m.StyleUrlResolver;
    }, function($__m) {
      StyleInliner = $__m.StyleInliner;
    }, function($__m) {
      CssProcessor = $__m.CssProcessor;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      FunctionWrapper = $__m.FunctionWrapper;
    }],
    execute: function() {
      Object.defineProperty(createTestInjector, "parameters", {get: function() {
          return [[List]];
        }});
      Object.defineProperty(inject, "parameters", {get: function() {
          return [[List], [Function]];
        }});
      FunctionWithParamTokens = $__export("FunctionWithParamTokens", (function() {
        var FunctionWithParamTokens = function FunctionWithParamTokens(tokens, fn) {
          this._tokens = tokens;
          this._fn = fn;
        };
        return ($traceurRuntime.createClass)(FunctionWithParamTokens, {execute: function(injector) {
            var params = ListWrapper.map(this._tokens, (function(t) {
              return injector.get(t);
            }));
            FunctionWrapper.apply(this._fn, params);
          }}, {});
      }()));
      Object.defineProperty(FunctionWithParamTokens, "parameters", {get: function() {
          return [[List], [Function]];
        }});
      Object.defineProperty(FunctionWithParamTokens.prototype.execute, "parameters", {get: function() {
          return [[Injector]];
        }});
    }
  };
});
//# sourceMappingURL=test_injector.js.map

//# sourceMappingURL=../../src/test_lib/test_injector.js.map