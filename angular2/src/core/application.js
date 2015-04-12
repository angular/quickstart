System.register(["angular2/di", "angular2/src/facade/lang", "angular2/src/dom/browser_adapter", "angular2/src/dom/dom_adapter", "./compiler/compiler", "./compiler/view", "angular2/src/reflection/reflection", "angular2/change_detection", "./exception_handler", "./compiler/template_loader", "./compiler/template_resolver", "./compiler/directive_metadata_reader", "angular2/src/facade/collection", "angular2/src/facade/async", "angular2/src/core/zone/vm_turn_zone", "angular2/src/core/life_cycle/life_cycle", "angular2/src/core/compiler/shadow_dom_strategy", "angular2/src/core/compiler/xhr/xhr", "angular2/src/core/compiler/xhr/xhr_impl", "angular2/src/core/events/event_manager", "angular2/src/core/events/hammer_gestures", "angular2/src/di/binding", "angular2/src/core/compiler/component_url_mapper", "angular2/src/core/compiler/url_resolver", "angular2/src/core/compiler/style_url_resolver", "angular2/src/core/compiler/style_inliner", "angular2/src/core/compiler/css_processor", "angular2/src/core/annotations/annotations", "angular2/src/core/compiler/private_component_loader"], function($__export) {
  "use strict";
  var Injector,
      bind,
      OpaqueToken,
      Type,
      isBlank,
      isPresent,
      BaseException,
      assertionsEnabled,
      print,
      stringify,
      BrowserDomAdapter,
      DOM,
      Compiler,
      CompilerCache,
      ProtoView,
      Reflector,
      reflector,
      Parser,
      Lexer,
      ChangeDetection,
      dynamicChangeDetection,
      jitChangeDetection,
      ExceptionHandler,
      TemplateLoader,
      TemplateResolver,
      DirectiveMetadataReader,
      List,
      ListWrapper,
      Promise,
      PromiseWrapper,
      VmTurnZone,
      LifeCycle,
      ShadowDomStrategy,
      NativeShadowDomStrategy,
      EmulatedUnscopedShadowDomStrategy,
      XHR,
      XHRImpl,
      EventManager,
      DomEventsPlugin,
      HammerGesturesPlugin,
      Binding,
      ComponentUrlMapper,
      UrlResolver,
      StyleUrlResolver,
      StyleInliner,
      CssProcessor,
      Component,
      PrivateComponentLoader,
      _rootInjector,
      _rootBindings,
      appViewToken,
      appChangeDetectorToken,
      appElementToken,
      appComponentAnnotatedTypeToken,
      appDocumentToken;
  function _injectorBindings(appComponentType) {
    return [bind(appDocumentToken).toValue(DOM.defaultDoc()), bind(appComponentAnnotatedTypeToken).toFactory((function(reader) {
      return reader.read(appComponentType);
    }), [DirectiveMetadataReader]), bind(appElementToken).toFactory((function(appComponentAnnotatedType, appDocument) {
      var selector = appComponentAnnotatedType.annotation.selector;
      var element = DOM.querySelector(appDocument, selector);
      if (isBlank(element)) {
        throw new BaseException(("The app selector \"" + selector + "\" did not match any elements"));
      }
      return element;
    }), [appComponentAnnotatedTypeToken, appDocumentToken]), bind(appViewToken).toAsyncFactory((function(changeDetection, compiler, injector, appElement, appComponentAnnotatedType, strategy, eventManager) {
      var annotation = appComponentAnnotatedType.annotation;
      if (!isBlank(annotation) && !(annotation instanceof Component)) {
        var type = appComponentAnnotatedType.type;
        throw new BaseException("Only Components can be bootstrapped; " + ("Directive of " + stringify(type) + " is not a Component"));
      }
      return compiler.compile(appComponentAnnotatedType.type).then((function(protoView) {
        var appProtoView = ProtoView.createRootProtoView(protoView, appElement, appComponentAnnotatedType, changeDetection.createProtoChangeDetector('root'), strategy);
        var view = appProtoView.instantiate(null, eventManager);
        view.hydrate(injector, null, null, new Object(), null);
        return view;
      }));
    }), [ChangeDetection, Compiler, Injector, appElementToken, appComponentAnnotatedTypeToken, ShadowDomStrategy, EventManager]), bind(appChangeDetectorToken).toFactory((function(rootView) {
      return rootView.changeDetector;
    }), [appViewToken]), bind(appComponentType).toFactory((function(rootView) {
      return rootView.elementInjectors[0].getComponent();
    }), [appViewToken]), bind(LifeCycle).toFactory((function(exceptionHandler) {
      return new LifeCycle(exceptionHandler, null, assertionsEnabled());
    }), [ExceptionHandler]), bind(EventManager).toFactory((function(zone) {
      var plugins = [new HammerGesturesPlugin(), new DomEventsPlugin()];
      return new EventManager(plugins, zone);
    }), [VmTurnZone]), bind(ShadowDomStrategy).toFactory((function(styleUrlResolver, doc) {
      return new EmulatedUnscopedShadowDomStrategy(styleUrlResolver, doc.head);
    }), [StyleUrlResolver, appDocumentToken]), Compiler, CompilerCache, TemplateResolver, bind(ChangeDetection).toValue(dynamicChangeDetection), TemplateLoader, DirectiveMetadataReader, Parser, Lexer, ExceptionHandler, bind(XHR).toValue(new XHRImpl()), ComponentUrlMapper, UrlResolver, StyleUrlResolver, StyleInliner, bind(CssProcessor).toFactory((function() {
      return new CssProcessor(null);
    }), []), PrivateComponentLoader];
  }
  function _createVmZone(givenReporter) {
    var defaultErrorReporter = (function(exception, stackTrace) {
      var longStackTrace = ListWrapper.join(stackTrace, "\n\n-----async gap-----\n");
      print((exception + "\n\n" + longStackTrace));
      throw exception;
    });
    var reporter = isPresent(givenReporter) ? givenReporter : defaultErrorReporter;
    var zone = new VmTurnZone({enableLongStackTrace: assertionsEnabled()});
    zone.initCallbacks({onErrorHandler: reporter});
    return zone;
  }
  function bootstrap(appComponentType) {
    var componentServiceBindings = arguments[1] !== (void 0) ? arguments[1] : null;
    var errorReporter = arguments[2] !== (void 0) ? arguments[2] : null;
    BrowserDomAdapter.makeCurrent();
    var bootstrapProcess = PromiseWrapper.completer();
    var zone = _createVmZone(errorReporter);
    zone.run((function() {
      var appInjector = _createAppInjector(appComponentType, componentServiceBindings, zone);
      PromiseWrapper.then(appInjector.asyncGet(appViewToken), (function(rootView) {
        var lc = appInjector.get(LifeCycle);
        lc.registerWith(zone, rootView.changeDetector);
        lc.tick();
        bootstrapProcess.resolve(appInjector);
      }), (function(err) {
        bootstrapProcess.reject(err);
      }));
    }));
    return bootstrapProcess.promise;
  }
  function _createAppInjector(appComponentType, bindings, zone) {
    if (isBlank(_rootInjector))
      _rootInjector = new Injector(_rootBindings);
    var mergedBindings = isPresent(bindings) ? ListWrapper.concat(_injectorBindings(appComponentType), bindings) : _injectorBindings(appComponentType);
    ListWrapper.push(mergedBindings, bind(VmTurnZone).toValue(zone));
    return _rootInjector.createChild(mergedBindings);
  }
  $__export("bootstrap", bootstrap);
  return {
    setters: [function($__m) {
      Injector = $__m.Injector;
      bind = $__m.bind;
      OpaqueToken = $__m.OpaqueToken;
    }, function($__m) {
      Type = $__m.Type;
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
      BaseException = $__m.BaseException;
      assertionsEnabled = $__m.assertionsEnabled;
      print = $__m.print;
      stringify = $__m.stringify;
    }, function($__m) {
      BrowserDomAdapter = $__m.BrowserDomAdapter;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      Compiler = $__m.Compiler;
      CompilerCache = $__m.CompilerCache;
    }, function($__m) {
      ProtoView = $__m.ProtoView;
    }, function($__m) {
      Reflector = $__m.Reflector;
      reflector = $__m.reflector;
    }, function($__m) {
      Parser = $__m.Parser;
      Lexer = $__m.Lexer;
      ChangeDetection = $__m.ChangeDetection;
      dynamicChangeDetection = $__m.dynamicChangeDetection;
      jitChangeDetection = $__m.jitChangeDetection;
    }, function($__m) {
      ExceptionHandler = $__m.ExceptionHandler;
    }, function($__m) {
      TemplateLoader = $__m.TemplateLoader;
    }, function($__m) {
      TemplateResolver = $__m.TemplateResolver;
    }, function($__m) {
      DirectiveMetadataReader = $__m.DirectiveMetadataReader;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      VmTurnZone = $__m.VmTurnZone;
    }, function($__m) {
      LifeCycle = $__m.LifeCycle;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
      NativeShadowDomStrategy = $__m.NativeShadowDomStrategy;
      EmulatedUnscopedShadowDomStrategy = $__m.EmulatedUnscopedShadowDomStrategy;
    }, function($__m) {
      XHR = $__m.XHR;
    }, function($__m) {
      XHRImpl = $__m.XHRImpl;
    }, function($__m) {
      EventManager = $__m.EventManager;
      DomEventsPlugin = $__m.DomEventsPlugin;
    }, function($__m) {
      HammerGesturesPlugin = $__m.HammerGesturesPlugin;
    }, function($__m) {
      Binding = $__m.Binding;
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
      Component = $__m.Component;
    }, function($__m) {
      PrivateComponentLoader = $__m.PrivateComponentLoader;
    }],
    execute: function() {
      _rootBindings = [bind(Reflector).toValue(reflector)];
      appViewToken = $__export("appViewToken", new OpaqueToken('AppView'));
      appChangeDetectorToken = $__export("appChangeDetectorToken", new OpaqueToken('AppChangeDetector'));
      appElementToken = $__export("appElementToken", new OpaqueToken('AppElement'));
      appComponentAnnotatedTypeToken = $__export("appComponentAnnotatedTypeToken", new OpaqueToken('AppComponentAnnotatedType'));
      appDocumentToken = $__export("appDocumentToken", new OpaqueToken('AppDocument'));
      Object.defineProperty(_createVmZone, "parameters", {get: function() {
          return [[Function]];
        }});
      Object.defineProperty(bootstrap, "parameters", {get: function() {
          return [[Type], [assert.genericType(List, Binding)], [Function]];
        }});
      Object.defineProperty(_createAppInjector, "parameters", {get: function() {
          return [[Type], [assert.genericType(List, Binding)], [VmTurnZone]];
        }});
    }
  };
});
//# sourceMappingURL=application.js.map

//# sourceMappingURL=../../src/core/application.js.map