System.register(["angular2/src/facade/lang", "angular2/src/facade/dom", "angular2/src/facade/collection", "angular2/src/core/zone/vm_turn_zone"], function($__export) {
  "use strict";
  var isBlank,
      BaseException,
      isPresent,
      DOM,
      Element,
      List,
      ListWrapper,
      MapWrapper,
      VmTurnZone,
      EventManager,
      EventManagerPlugin;
  return {
    setters: [function($__m) {
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
      isPresent = $__m.isPresent;
    }, function($__m) {
      DOM = $__m.DOM;
      Element = $__m.Element;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
    }, function($__m) {
      VmTurnZone = $__m.VmTurnZone;
    }],
    execute: function() {
      EventManager = $__export("EventManager", (function() {
        var EventManager = function EventManager(plugins, zone) {
          this._zone = zone;
          this._plugins = plugins;
          for (var i = 0; i < plugins.length; i++) {
            plugins[i].manager = this;
          }
        };
        return ($traceurRuntime.createClass)(EventManager, {
          addEventListener: function(element, eventName, handler) {
            var plugin = this._findPluginFor(eventName);
            if (isPresent(plugin)) {
              plugin.addEventListener(element, eventName, handler);
            } else {
              this._addNativeEventListener(element, eventName, handler);
            }
          },
          getZone: function() {
            return this._zone;
          },
          _findPluginFor: function(eventName) {
            var plugins = this._plugins;
            for (var i = 0; i < plugins.length; i++) {
              var plugin = plugins[i];
              if (plugin.supports(eventName)) {
                return plugin;
              }
            }
            return null;
          },
          _addNativeEventListener: function(element, eventName, handler) {
            var $__0 = this;
            this._zone.runOutsideAngular((function() {
              DOM.on(element, eventName, (function(event) {
                if (event.target === element) {
                  $__0._zone.run(function() {
                    handler(event);
                  });
                }
              }));
            }));
          }
        }, {});
      }()));
      Object.defineProperty(EventManager, "parameters", {get: function() {
          return [[assert.genericType(List, EventManagerPlugin)], [VmTurnZone]];
        }});
      Object.defineProperty(EventManager.prototype.addEventListener, "parameters", {get: function() {
          return [[Element], [assert.type.string], [Function]];
        }});
      Object.defineProperty(EventManager.prototype._findPluginFor, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(EventManager.prototype._addNativeEventListener, "parameters", {get: function() {
          return [[Element], [assert.type.string], [Function]];
        }});
      EventManagerPlugin = $__export("EventManagerPlugin", (function() {
        var EventManagerPlugin = function EventManagerPlugin() {};
        return ($traceurRuntime.createClass)(EventManagerPlugin, {
          supports: function(eventName) {
            return false;
          },
          addEventListener: function(element, eventName, handler) {
            throw "not implemented";
          }
        }, {});
      }()));
      Object.defineProperty(EventManagerPlugin.prototype.supports, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(EventManagerPlugin.prototype.addEventListener, "parameters", {get: function() {
          return [[Element], [assert.type.string], [Function]];
        }});
    }
  };
});

//# sourceMappingURL=src/core/events/event_manager.map

//# sourceMappingURL=../../../src/core/events/event_manager.js.map