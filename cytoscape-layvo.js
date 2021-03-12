(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cytoscapeLayvo"] = factory();
	else
		root["cytoscapeLayvo"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var cy = this;
  return {
    generalProperties: function generalProperties() {
      return _generalProperties(cy);
    },
    saveLayoutData: saveLayoutData,
    getMeanSlopeDiff: getMeanSlopeDiff,
    getMeanPositionDiff: getMeanPositionDiff
  };
};

var _generalProperties = function _generalProperties(cy) {
  var totalEdgeLength = getTotalEdgeLength(cy);
  return {
    numberOfEdgeCrosses: findNumberOfCrosses(cy),
    numberOfNodeOverlaps: findNumberOfOverlappingNodes(cy),
    totalArea: getTotalArea(cy),
    totalEdgeLength: totalEdgeLength,
    averageEdgeLength: totalEdgeLength / cy.edges().length
  };
};

var findNumberOfCrosses = function findNumberOfCrosses(cy) {
  var doesIntersect = function doesIntersect(a, b, c, d, p, q, r, s) {
    var det, gamma, lambda;
    det = (c - a) * (s - q) - (r - p) * (d - b);
    if (det === 0) {
      return false;
    } else {
      lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
      gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
      return 0.01 < lambda && lambda < 0.99 && 0.1 < gamma && gamma < 0.99;
    }
  };

  var crosses = 0;
  var edgeArray = cy.edges().toArray();

  for (var i = 0; i < edgeArray.length; i++) {
    var p = edgeArray[i].sourceEndpoint(),
        q = edgeArray[i].targetEndpoint();
    for (var j = i + 1; j < edgeArray.length; j++) {
      var r = edgeArray[j].sourceEndpoint(),
          s = edgeArray[j].targetEndpoint();
      if (doesIntersect(p.x, p.y, q.x, q.y, r.x, r.y, s.x, s.y)) {
        crosses++;
      }
    }
  }
  return crosses;
};

var findNumberOfOverlappingNodes = function findNumberOfOverlappingNodes(cy) {
  var doesOverlap = function doesOverlap(node, otherNode) {
    var bb = node.boundingBox({ includeLabels: false, includeOverlays: false }),
        bbOther = otherNode.boundingBox({ includeLabels: false, includeOverlays: false });
    return !(bbOther.x1 > bb.x2 || bbOther.x2 < bb.x1 || bbOther.y1 > bb.y2 || bbOther.y2 < bb.y1);
  };

  var overlaps = 0;
  var nodeArray = cy.nodes().toArray();

  for (var i = 0; i < nodeArray.length; i++) {
    var node = nodeArray[i];
    for (var j = i + 1; j < nodeArray.length; j++) {
      var otherNode = nodeArray[j];
      if (!node.ancestors().union(node.descendants()).contains(otherNode) && doesOverlap(node, otherNode)) {
        overlaps++;
      }
    }
  }
  return overlaps;
};

var getTotalArea = function getTotalArea(cy) {
  var bb = cy.elements().boundingBox();
  return bb.w * bb.h;
};

var getTotalEdgeLength = function getTotalEdgeLength(cy) {
  var getDistance = function getDistance(p, q) {
    var dx = q.x - p.x,
        dy = q.y - p.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  var totalLength = 0;
  var edgeArray = cy.edges().toArray();

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = edgeArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var edge = _step.value;

      var p = edge.sourceEndpoint(),
          q = edge.targetEndpoint();
      totalLength += getDistance(p, q);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return totalLength;
};

var layoutData1 = null;

var getLayoutData = function getLayoutData(cy) {
  var data = {};
  setLayoutData4Nodes(cy.nodes(), data, 0);
  return data;
};

var setLayoutData4Nodes = function setLayoutData4Nodes(nodes, data, level) {
  if (!nodes || nodes.length < 1) {
    return;
  }
  data[level] = {};
  // set positions of the nodes in the level
  var nodesOnTheLevel = nodes.filter(function (x) {
    return x.isOrphan();
  });
  for (var i = 0; i < nodesOnTheLevel.length; i++) {
    data[level][nodesOnTheLevel[i].id()] = nodesOnTheLevel[i].position();
  }
  // set positions of the nodes in deeper levels recursively
  var parentNodes = nodes.filter(':parent');
  for (var _i = 0; _i < parentNodes.length; _i++) {
    var children = parentNodes[_i].children();
    setLayoutData4Nodes(children, data, level++);
  }
};

var saveLayoutData = function saveLayoutData(cy) {
  layoutData1 = getLayoutData(cy);
};

// returns an array of strings which is the intersection of keys of 2 objects 
var setIntersection = function setIntersection(o1, o2) {
  var intersection = [];
  for (var k in o2) {
    if (o1[k]) {
      intersection.push(k);
    }
  }
  return intersection;
};

var getMeanPairwiseLevelOrderDistance = function getMeanPairwiseLevelOrderDistance(cy, distFn) {
  if (!layoutData1) {
    throw 'first you should call "saveLayoutData" to save the layout data!';
  }
  var totalDiff = 0;
  var cntDiff = 0;
  var layoutData2 = getLayoutData(cy);
  var levelCount1 = Object.keys(layoutData1).length;
  var levelCount2 = Object.keys(layoutData2).length;
  var commonLevels = Math.min(levelCount1, levelCount2);
  for (var i = 0; i < commonLevels; i++) {
    var commons = setIntersection(layoutData1[i], layoutData2[i]);
    for (var j = 0; j < commons.length; j++) {
      for (var k = j + 1; k < commons.length; k++) {
        var metric1 = distFn(layoutData1[i][commons[j]], layoutData1[i][commons[k]]);
        var metric2 = distFn(layoutData2[i][commons[j]], layoutData2[i][commons[k]]);
        totalDiff += Math.abs(metric1 - metric2);
        cntDiff += 1;
      }
    }
  }

  return totalDiff / cntDiff;
};

// calculates the average change of slope between each pair of the nodes
var getMeanSlopeDiff = function getMeanSlopeDiff(cy) {
  return getMeanPairwiseLevelOrderDistance(cy, getAngle);
};

// calculates the average change of positions between each pair of the nodes using L2 distance metric
var getMeanPositionDiff = function getMeanPositionDiff(cy) {
  return getMeanPairwiseLevelOrderDistance(cy, getL2Distance);
};

var getAngle = function getAngle(p1, p2) {
  var deltaY = p1.y - p2.y;
  var deltaX = p1.x - p2.x;
  return Math.atan2(deltaY, deltaX) * 180 / Math.PI;
};

// L2 norm 
var getL2Distance = function getL2Distance(p1, p2) {
  var deltaY = p1.y - p2.y;
  var deltaX = p1.x - p2.x;
  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var impl = __webpack_require__(0);

// registers the extension on a cytoscape lib ref
var register = function register(cytoscape) {
  if (!cytoscape) {
    return;
  } // can't register if cytoscape unspecified

  cytoscape('core', 'layvo', impl); // register with cytoscape.js
};

if (typeof cytoscape !== 'undefined') {
  // expose to global cytoscape (i.e. window.cytoscape)
  register(cytoscape);
}

module.exports = register;

/***/ })
/******/ ]);
});