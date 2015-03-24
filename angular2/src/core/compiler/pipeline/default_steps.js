System.register(["angular2/change_detection", "angular2/src/facade/collection", "./property_binding_parser", "./text_interpolation_parser", "./directive_parser", "./view_splitter", "./element_binding_marker", "./proto_view_builder", "./proto_element_injector_builder", "./element_binder_builder", "angular2/src/core/compiler/css_processor", "angular2/src/core/compiler/directive_metadata", "angular2/src/core/compiler/shadow_dom_strategy"], function($__export) {
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
      CssProcessor,
      DirectiveMetadata,
      ShadowDomStrategy,
      EmulatedScopedShadowDomStrategy;
  function createDefaultSteps(changeDetection, parser, compiledComponent, directives, shadowDomStrategy, templateUrl, cssProcessor) {
    var steps = [new ViewSplitter(parser), cssProcessor.getCompileStep(compiledComponent, shadowDomStrategy, templateUrl), shadowDomStrategy.getTemplateCompileStep(compiledComponent), new PropertyBindingParser(parser), new DirectiveParser(directives), new TextInterpolationParser(parser), new ElementBindingMarker(), new ProtoViewBuilder(changeDetection, shadowDomStrategy), new ProtoElementInjectorBuilder(), new ElementBinderBuilder(parser)];
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
      CssProcessor = $__m.CssProcessor;
    }, function($__m) {
      DirectiveMetadata = $__m.DirectiveMetadata;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
      EmulatedScopedShadowDomStrategy = $__m.EmulatedScopedShadowDomStrategy;
    }],
    execute: function() {
      Object.defineProperty(createDefaultSteps, "parameters", {get: function() {
          return [[ChangeDetection], [Parser], [DirectiveMetadata], [assert.genericType(List, DirectiveMetadata)], [ShadowDomStrategy], [assert.type.string], [CssProcessor]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/compiler/pipeline/default_steps.map

//# sourceMappingURL=../../../../src/core/compiler/pipeline/default_steps.js.map