System.register(["angular2/src/facade/lang"], function($__export) {
  "use strict";
  var int,
      isJsObject,
      global,
      List,
      Map,
      Set,
      StringMap,
      MapWrapper,
      StringMapWrapper,
      ListWrapper,
      SetWrapper;
  function isListLikeIterable(obj) {
    if (!isJsObject(obj))
      return false;
    return ListWrapper.isList(obj) || (!(obj instanceof Map) && Symbol.iterator in obj);
  }
  function iterateListLike(obj, fn) {
    if (ListWrapper.isList(obj)) {
      for (var i = 0; i < obj.length; i++) {
        fn(obj[i]);
      }
    } else {
      var iterator = obj[Symbol.iterator]();
      var item;
      while (!((item = iterator.next()).done)) {
        fn(item.value);
      }
    }
  }
  $__export("isListLikeIterable", isListLikeIterable);
  $__export("iterateListLike", iterateListLike);
  return {
    setters: [function($__m) {
      int = $__m.int;
      isJsObject = $__m.isJsObject;
      global = $__m.global;
    }],
    execute: function() {
      List = $__export("List", global.Array);
      Map = $__export("Map", global.Map);
      Set = $__export("Set", global.Set);
      StringMap = $__export("StringMap", global.Object);
      MapWrapper = $__export("MapWrapper", (function() {
        var MapWrapper = function MapWrapper() {};
        return ($traceurRuntime.createClass)(MapWrapper, {}, {
          create: function() {
            return new Map();
          },
          clone: function(m) {
            return new Map(m);
          },
          createFromStringMap: function(stringMap) {
            var result = MapWrapper.create();
            for (var prop = void 0 in stringMap) {
              MapWrapper.set(result, prop, stringMap[prop]);
            }
            return result;
          },
          createFromPairs: function(pairs) {
            return new Map(pairs);
          },
          get: function(m, k) {
            return m.get(k);
          },
          set: function(m, k, v) {
            m.set(k, v);
          },
          contains: function(m, k) {
            return m.has(k);
          },
          forEach: function(m, fn) {
            m.forEach(fn);
          },
          size: function(m) {
            return m.size;
          },
          delete: function(m, k) {
            m.delete(k);
          },
          clear: function(m) {
            m.clear();
          },
          clearValues: function(m) {
            var keyIterator = m.keys();
            var k;
            while (!((k = keyIterator.next()).done)) {
              m.set(k.value, null);
            }
          },
          iterable: function(m) {
            return m;
          },
          keys: function(m) {
            return m.keys();
          },
          values: function(m) {
            return m.values();
          }
        });
      }()));
      Object.defineProperty(MapWrapper.clone, "parameters", {get: function() {
          return [[Map]];
        }});
      Object.defineProperty(MapWrapper.createFromPairs, "parameters", {get: function() {
          return [[List]];
        }});
      StringMapWrapper = $__export("StringMapWrapper", (function() {
        var StringMapWrapper = function StringMapWrapper() {};
        return ($traceurRuntime.createClass)(StringMapWrapper, {}, {
          create: function() {
            return {};
          },
          contains: function(map, key) {
            return map.hasOwnProperty(key);
          },
          get: function(map, key) {
            return map.hasOwnProperty(key) ? map[key] : undefined;
          },
          set: function(map, key, value) {
            map[key] = value;
          },
          isEmpty: function(map) {
            for (var prop = void 0 in map) {
              return false;
            }
            return true;
          },
          forEach: function(map, callback) {
            for (var prop = void 0 in map) {
              if (map.hasOwnProperty(prop)) {
                callback(map[prop], prop);
              }
            }
          },
          merge: function(m1, m2) {
            var m = {};
            for (var attr = void 0 in m1) {
              if (m1.hasOwnProperty(attr)) {
                m[attr] = m1[attr];
              }
            }
            for (var attr = void 0 in m2) {
              if (m2.hasOwnProperty(attr)) {
                m[attr] = m2[attr];
              }
            }
            return m;
          }
        });
      }()));
      ListWrapper = $__export("ListWrapper", (function() {
        var ListWrapper = function ListWrapper() {};
        return ($traceurRuntime.createClass)(ListWrapper, {}, {
          create: function() {
            return new List();
          },
          createFixedSize: function(size) {
            return new List(size);
          },
          get: function(m, k) {
            return m[k];
          },
          set: function(m, k, v) {
            m[k] = v;
          },
          clone: function(array) {
            return array.slice(0);
          },
          map: function(array, fn) {
            return array.map(fn);
          },
          forEach: function(array, fn) {
            for (var i = 0; i < array.length; i++) {
              fn(array[i]);
            }
          },
          push: function(array, el) {
            array.push(el);
          },
          first: function(array) {
            if (!array)
              return null;
            return array[0];
          },
          last: function(array) {
            if (!array || array.length == 0)
              return null;
            return array[array.length - 1];
          },
          find: function(list, pred) {
            for (var i = 0; i < list.length; ++i) {
              if (pred(list[i]))
                return list[i];
            }
            return null;
          },
          reduce: function(list, fn, init) {
            return list.reduce(fn, init);
          },
          filter: function(array, pred) {
            return array.filter(pred);
          },
          any: function(list, pred) {
            for (var i = 0; i < list.length; ++i) {
              if (pred(list[i]))
                return true;
            }
            return false;
          },
          contains: function(list, el) {
            return list.indexOf(el) !== -1;
          },
          reversed: function(array) {
            var a = ListWrapper.clone(array);
            return a.reverse();
          },
          concat: function(a, b) {
            return a.concat(b);
          },
          isList: function(list) {
            return Array.isArray(list);
          },
          insert: function(list, index, value) {
            list.splice(index, 0, value);
          },
          removeAt: function(list, index) {
            var res = list[index];
            list.splice(index, 1);
            return res;
          },
          removeAll: function(list, items) {
            for (var i = 0; i < items.length; ++i) {
              var index = list.indexOf(items[i]);
              list.splice(index, 1);
            }
          },
          removeLast: function(list) {
            return list.pop();
          },
          remove: function(list, el) {
            var index = list.indexOf(el);
            if (index > -1) {
              list.splice(index, 1);
              return true;
            }
            return false;
          },
          clear: function(list) {
            list.splice(0, list.length);
          },
          join: function(list, s) {
            return list.join(s);
          },
          isEmpty: function(list) {
            return list.length == 0;
          },
          fill: function(list, value) {
            var start = arguments[2] !== (void 0) ? arguments[2] : 0;
            var end = arguments[3] !== (void 0) ? arguments[3] : null;
            list.fill(value, start, end === null ? undefined : end);
          },
          equals: function(a, b) {
            if (a.length != b.length)
              return false;
            for (var i = 0; i < a.length; ++i) {
              if (a[i] !== b[i])
                return false;
            }
            return true;
          },
          slice: function(l, from, to) {
            return l.slice(from, to);
          },
          sort: function(l, compareFn) {
            l.sort(compareFn);
          }
        });
      }()));
      Object.defineProperty(ListWrapper.clone, "parameters", {get: function() {
          return [[List]];
        }});
      Object.defineProperty(ListWrapper.forEach, "parameters", {get: function() {
          return [[List], [Function]];
        }});
      Object.defineProperty(ListWrapper.find, "parameters", {get: function() {
          return [[List], [Function]];
        }});
      Object.defineProperty(ListWrapper.reduce, "parameters", {get: function() {
          return [[List], [Function], []];
        }});
      Object.defineProperty(ListWrapper.filter, "parameters", {get: function() {
          return [[], [Function]];
        }});
      Object.defineProperty(ListWrapper.any, "parameters", {get: function() {
          return [[List], [Function]];
        }});
      Object.defineProperty(ListWrapper.contains, "parameters", {get: function() {
          return [[List], []];
        }});
      Object.defineProperty(ListWrapper.insert, "parameters", {get: function() {
          return [[], [int], []];
        }});
      Object.defineProperty(ListWrapper.removeAt, "parameters", {get: function() {
          return [[], [int]];
        }});
      Object.defineProperty(ListWrapper.removeLast, "parameters", {get: function() {
          return [[List]];
        }});
      Object.defineProperty(ListWrapper.fill, "parameters", {get: function() {
          return [[List], [], [int], [int]];
        }});
      Object.defineProperty(ListWrapper.equals, "parameters", {get: function() {
          return [[List], [List]];
        }});
      Object.defineProperty(ListWrapper.slice, "parameters", {get: function() {
          return [[List], [int], [int]];
        }});
      Object.defineProperty(ListWrapper.sort, "parameters", {get: function() {
          return [[List], [Function]];
        }});
      Object.defineProperty(iterateListLike, "parameters", {get: function() {
          return [[], [Function]];
        }});
      SetWrapper = $__export("SetWrapper", (function() {
        var SetWrapper = function SetWrapper() {};
        return ($traceurRuntime.createClass)(SetWrapper, {}, {
          createFromList: function(lst) {
            return new Set(lst);
          },
          has: function(s, key) {
            return s.has(key);
          }
        });
      }()));
      Object.defineProperty(SetWrapper.createFromList, "parameters", {get: function() {
          return [[List]];
        }});
      Object.defineProperty(SetWrapper.has, "parameters", {get: function() {
          return [[Set], []];
        }});
    }
  };
});

//# sourceMappingURL=src/facade/collection.map

//# sourceMappingURL=../../src/facade/collection.js.map