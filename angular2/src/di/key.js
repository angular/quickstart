System.register(["./exceptions", "angular2/src/facade/collection", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var KeyMetadataError,
      MapWrapper,
      Map,
      int,
      isPresent,
      Key,
      KeyRegistry,
      _globalKeyRegistry;
  return {
    setters: [function($__m) {
      KeyMetadataError = $__m.KeyMetadataError;
    }, function($__m) {
      MapWrapper = $__m.MapWrapper;
      Map = $__m.Map;
    }, function($__m) {
      int = $__m.int;
      isPresent = $__m.isPresent;
    }],
    execute: function() {
      Key = $__export("Key", (function() {
        var Key = function Key(token, id) {
          this.token = token;
          this.id = id;
          this.metadata = null;
        };
        return ($traceurRuntime.createClass)(Key, {}, {
          setMetadata: function(key, metadata) {
            if (isPresent(key.metadata) && key.metadata !== metadata) {
              throw new KeyMetadataError();
            }
            key.metadata = metadata;
            return key;
          },
          get: function(token) {
            return _globalKeyRegistry.get(token);
          },
          get numberOfKeys() {
            return _globalKeyRegistry.numberOfKeys;
          }
        });
      }()));
      Object.defineProperty(Key, "parameters", {get: function() {
          return [[], [int]];
        }});
      Object.defineProperty(Key.setMetadata, "parameters", {get: function() {
          return [[Key], []];
        }});
      KeyRegistry = $__export("KeyRegistry", (function() {
        var KeyRegistry = function KeyRegistry() {
          this._allKeys = MapWrapper.create();
        };
        return ($traceurRuntime.createClass)(KeyRegistry, {
          get: function(token) {
            if (token instanceof Key)
              return token;
            if (MapWrapper.contains(this._allKeys, token)) {
              return MapWrapper.get(this._allKeys, token);
            }
            var newKey = new Key(token, Key.numberOfKeys);
            MapWrapper.set(this._allKeys, token, newKey);
            return newKey;
          },
          get numberOfKeys() {
            return MapWrapper.size(this._allKeys);
          }
        }, {});
      }()));
      _globalKeyRegistry = new KeyRegistry();
    }
  };
});
//# sourceMappingURL=key.js.map

//# sourceMappingURL=../../src/di/key.js.map