System.register(["./src/change_detection/parser/ast", "./src/change_detection/parser/lexer", "./src/change_detection/parser/parser", "./src/change_detection/parser/locals", "./src/change_detection/exceptions", "./src/change_detection/interfaces", "./src/change_detection/proto_change_detector", "./src/change_detection/dynamic_change_detector", "./src/change_detection/binding_propagation_config", "./src/change_detection/pipes/pipe_registry", "./src/change_detection/change_detection_util", "./src/change_detection/pipes/pipe", "./src/change_detection/pipes/iterable_changes", "./src/change_detection/pipes/keyvalue_changes", "./src/change_detection/pipes/null_pipe"], function($__export) {
  "use strict";
  var ProtoChangeDetector,
      DynamicProtoChangeDetector,
      JitProtoChangeDetector,
      PipeRegistry,
      IterableChangesFactory,
      KeyValueChangesFactory,
      NullPipeFactory,
      ChangeDetection,
      defaultPipes,
      DynamicChangeDetection,
      JitChangeDetection,
      _registry,
      dynamicChangeDetection,
      jitChangeDetection;
  var $__exportNames = {
    ChangeDetection: true,
    defaultPipes: true,
    DynamicChangeDetection: true,
    JitChangeDetection: true,
    dynamicChangeDetection: true,
    jitChangeDetection: true,
    undefined: true
  };
  var $__exportNames = {
    ChangeDetection: true,
    defaultPipes: true,
    DynamicChangeDetection: true,
    JitChangeDetection: true,
    dynamicChangeDetection: true,
    jitChangeDetection: true,
    undefined: true
  };
  return {
    setters: [function($__m) {
      $__export("AST", $__m.AST);
    }, function($__m) {
      $__export("Lexer", $__m.Lexer);
    }, function($__m) {
      $__export("Parser", $__m.Parser);
    }, function($__m) {
      $__export("Locals", $__m.Locals);
    }, function($__m) {
      $__export("ExpressionChangedAfterItHasBeenChecked", $__m.ExpressionChangedAfterItHasBeenChecked);
      $__export("ChangeDetectionError", $__m.ChangeDetectionError);
    }, function($__m) {
      $__export("ChangeRecord", $__m.ChangeRecord);
      $__export("ChangeDispatcher", $__m.ChangeDispatcher);
      $__export("ChangeDetector", $__m.ChangeDetector);
      $__export("CHECK_ONCE", $__m.CHECK_ONCE);
      $__export("CHECK_ALWAYS", $__m.CHECK_ALWAYS);
      $__export("DETACHED", $__m.DETACHED);
      $__export("CHECKED", $__m.CHECKED);
    }, function($__m) {
      ProtoChangeDetector = $__m.ProtoChangeDetector;
      DynamicProtoChangeDetector = $__m.DynamicProtoChangeDetector;
      JitProtoChangeDetector = $__m.JitProtoChangeDetector;
      $__export("ProtoChangeDetector", $__m.ProtoChangeDetector);
      $__export("DynamicProtoChangeDetector", $__m.DynamicProtoChangeDetector);
      $__export("JitProtoChangeDetector", $__m.JitProtoChangeDetector);
      $__export("BindingRecord", $__m.BindingRecord);
    }, function($__m) {
      $__export("DynamicChangeDetector", $__m.DynamicChangeDetector);
    }, function($__m) {
      $__export("BindingPropagationConfig", $__m.BindingPropagationConfig);
    }, function($__m) {
      PipeRegistry = $__m.PipeRegistry;
      Object.keys($__m).forEach(function(p) {
        if (!$__exportNames[p])
          $__export(p, $__m[p]);
      });
    }, function($__m) {
      $__export("uninitialized", $__m.uninitialized);
    }, function($__m) {
      Object.keys($__m).forEach(function(p) {
        if (!$__exportNames[p])
          $__export(p, $__m[p]);
      });
    }, function($__m) {
      IterableChangesFactory = $__m.IterableChangesFactory;
    }, function($__m) {
      KeyValueChangesFactory = $__m.KeyValueChangesFactory;
    }, function($__m) {
      NullPipeFactory = $__m.NullPipeFactory;
    }],
    execute: function() {
      ChangeDetection = $__export("ChangeDetection", (function() {
        var ChangeDetection = function ChangeDetection() {
          ;
        };
        return ($traceurRuntime.createClass)(ChangeDetection, {createProtoChangeDetector: function(name) {
            return null;
          }}, {});
      }()));
      Object.defineProperty(ChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      defaultPipes = $__export("defaultPipes", {
        "iterableDiff": [new IterableChangesFactory(), new NullPipeFactory()],
        "keyValDiff": [new KeyValueChangesFactory(), new NullPipeFactory()]
      });
      DynamicChangeDetection = $__export("DynamicChangeDetection", (function($__super) {
        var DynamicChangeDetection = function DynamicChangeDetection(registry) {
          $traceurRuntime.superConstructor(DynamicChangeDetection).call(this);
          this.registry = registry;
        };
        return ($traceurRuntime.createClass)(DynamicChangeDetection, {createProtoChangeDetector: function(name) {
            return new DynamicProtoChangeDetector(this.registry);
          }}, {}, $__super);
      }(ChangeDetection)));
      Object.defineProperty(DynamicChangeDetection, "parameters", {get: function() {
          return [[PipeRegistry]];
        }});
      Object.defineProperty(DynamicChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      JitChangeDetection = $__export("JitChangeDetection", (function($__super) {
        var JitChangeDetection = function JitChangeDetection(registry) {
          $traceurRuntime.superConstructor(JitChangeDetection).call(this);
          this.registry = registry;
        };
        return ($traceurRuntime.createClass)(JitChangeDetection, {createProtoChangeDetector: function(name) {
            return new JitProtoChangeDetector(this.registry);
          }}, {}, $__super);
      }(ChangeDetection)));
      Object.defineProperty(JitChangeDetection, "parameters", {get: function() {
          return [[PipeRegistry]];
        }});
      Object.defineProperty(JitChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      _registry = new PipeRegistry(defaultPipes);
      dynamicChangeDetection = $__export("dynamicChangeDetection", new DynamicChangeDetection(_registry));
      jitChangeDetection = $__export("jitChangeDetection", new JitChangeDetection(_registry));
    }
  };
});
//# sourceMappingURL=change_detection.js.map

//# sourceMappingURL=change_detection.js.map