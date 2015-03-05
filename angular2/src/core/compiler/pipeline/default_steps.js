System.register(["angular2/change_detection", "angular2/src/facade/collection", "./property_binding_parser", "./text_interpolation_parser", "./directive_parser", "./view_splitter", "./element_binding_marker", "./proto_view_builder", "./proto_element_injector_builder", "./element_binder_builder", "./resolve_css", "./shim_shadow_dom", "angular2/src/core/compiler/directive_metadata", "angular2/src/core/compiler/shadow_dom_strategy"], function($__export) {
  "use strict";
  var ChangeDetection,
      Parser,
      List,
      ListWrapper,
      PropertyBindingParser,
      TextInterpolationParser,
      DirectiveParser,
      ViewSplitter,
      ElementBindingMarker,
      ProtoViewBuilder,
      ProtoElementInjectorBuilder,
      ElementBinderBuilder,
      ResolveCss,
      ShimShadowDom,
      DirectiveMetadata,
      ShadowDomStrategy,
      EmulatedScopedShadowDomStrategy;
  function createDefaultSteps(changeDetection, parser, compiledComponent, directives, shadowDomStrategy, templateUrl) {
    var steps = [new ViewSplitter(parser), new ResolveCss(compiledComponent, shadowDomStrategy, templateUrl), new PropertyBindingParser(parser), new DirectiveParser(directives), new TextInterpolationParser(parser), new ElementBindingMarker(), new ProtoViewBuilder(changeDetection, shadowDomStrategy), new ProtoElementInjectorBuilder(), new ElementBinderBuilder(parser)];
    if (shadowDomStrategy instanceof EmulatedScopedShadowDomStrategy) {
      var step = new ShimShadowDom(compiledComponent, shadowDomStrategy);
      ListWrapper.push(steps, step);
    }
    return steps;
  }
  $__export("createDefaultSteps", createDefaultSteps);
  return {
    setters: [function($__m) {
      ChangeDetection = $__m.ChangeDetection;
      Parser = $__m.Parser;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      PropertyBindingParser = $__m.PropertyBindingParser;
    }, function($__m) {
      TextInterpolationParser = $__m.TextInterpolationParser;
    }, function($__m) {
      DirectiveParser = $__m.DirectiveParser;
    }, function($__m) {
      ViewSplitter = $__m.ViewSplitter;
    }, function($__m) {
      ElementBindingMarker = $__m.ElementBindingMarker;
    }, function($__m) {
      ProtoViewBuilder = $__m.ProtoViewBuilder;
    }, function($__m) {
      ProtoElementInjectorBuilder = $__m.ProtoElementInjectorBuilder;
    }, function($__m) {
      ElementBinderBuilder = $__m.ElementBinderBuilder;
    }, function($__m) {
      ResolveCss = $__m.ResolveCss;
    }, function($__m) {
      ShimShadowDom = $__m.ShimShadowDom;
    }, function($__m) {
      DirectiveMetadata = $__m.DirectiveMetadata;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
      EmulatedScopedShadowDomStrategy = $__m.EmulatedScopedShadowDomStrategy;
    }],
    execute: function() {
      Object.defineProperty(createDefaultSteps, "parameters", {get: function() {
          return [[ChangeDetection], [Parser], [DirectiveMetadata], [assert.genericType(List, DirectiveMetadata)], [ShadowDomStrategy], [assert.type.string]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/pipeline/default_steps.map

//# sourceMappingURL=../../../../src/core/compiler/pipeline/default_steps.js.map