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
    saveLayoutData: function saveLayoutData() {
      return _saveLayoutData(cy);
    },
    getMeanAngleDiff: function getMeanAngleDiff() {
      return _getMeanAngleDiff(cy);
    },
    getMeanPositionDiff: function getMeanPositionDiff() {
      return _getMeanPositionDiff(cy);
    }
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

/** e1 and e2 are array of objects
 * @param  { {srcEndpoint: {x: number, y:number}, tgtEndpoint: {x: number, y:number} }[] } e1 
 * @param  { {srcEndpoint: {x: number, y:number}, tgtEndpoint: {x: number, y:number} }[] } e2 
 */
var doIntersect = function doIntersect(e1, e2) {
  var l1 = findLineEquationFrom2Points(e1.srcEndpoint, e1.tgtEndpoint);
  var l2 = findLineEquationFrom2Points(e2.srcEndpoint, e2.tgtEndpoint);
  var intersectionPoint = findIntersectionPointsOf2Lines(l1, l2);
  if (!intersectionPoint) {
    return false;
  }
  var xRange1 = [Math.min(e1.srcEndpoint.x, e1.tgtEndpoint.x), Math.max(e1.srcEndpoint.x, e1.tgtEndpoint.x)];
  var xRange2 = [Math.min(e2.srcEndpoint.x, e2.tgtEndpoint.x), Math.max(e2.srcEndpoint.x, e2.tgtEndpoint.x)];
  var yRange1 = [Math.min(e1.srcEndpoint.y, e1.tgtEndpoint.y), Math.max(e1.srcEndpoint.y, e1.tgtEndpoint.y)];
  var yRange2 = [Math.min(e2.srcEndpoint.y, e2.tgtEndpoint.y), Math.max(e2.srcEndpoint.y, e2.tgtEndpoint.y)];
  var x = intersectionPoint.x,
      y = intersectionPoint.y;


  return x >= xRange1[0] && x >= xRange2[0] && x <= xRange1[1] && x <= xRange2[1] && y >= yRange1[0] && y >= yRange2[0] && y <= yRange1[1] && y <= yRange2[1];
};

/** If line equation is like "y = mx + n", returns an object with type {m: number, n: number}
 * on the other hand line equation can be like x=3. In those cases returns an object like {x: number} 
 * @param  {} p1 {x: number, y: number}
 * @param  {} p2 {x: number, y: number}
 */
var findLineEquationFrom2Points = function findLineEquationFrom2Points(p1, p2) {
  var deltaX = p2.x - p1.x;
  var deltaY = p2.y - p1.y;
  if (deltaY == 0 && deltaX == 0) {
    return null;
  }
  if (deltaX == 0) {
    return { x: p1.x };
  }
  if (deltaY == 0) {
    return { m: 0, n: p1.y };
  }
  var m = deltaY / deltaX;
  var n = (p1.y * p2.x - p1.x * p2.y) / deltaX;
  return { m: m, n: n };
};

/** "y = mx + n" or "x=3" are a line equaltions. Returns xy coordinates of point type {x: number, y: number}
 * @param  {} l1 {m: number, n: number}
 * @param  {} l2 {m: number, n: number}
 */
var findIntersectionPointsOf2Lines = function findIntersectionPointsOf2Lines(l1, l2) {
  // if both a like lines like x=3 
  if (l1.x && l2.x) {
    if (l1.x == l2.x) {
      return { x: l1.x, y: 0 };
    }
    return null;
  }
  if (l1.x) {
    return { x: l1.x, y: l2.m * l1.x + l2.n };
  }
  if (l2.x) {
    return { x: l2.x, y: l1.m * l2.x + l1.n };
  }
  var deltaM = l2.m - l1.m;
  // there is no intersection between 2 lines, they are parallel
  if (deltaM == 0) {
    return null;
  }
  var x = (l1.n - l2.n) / deltaM;
  var y = (l1.n * l2.m - l1.m * l2.n) / deltaM;
  return { x: x, y: y };
};

var findNumberOfCrosses = function findNumberOfCrosses(cy) {
  var crosses = 0;
  var edges = cy.edges().map(function (x) {
    return { srcEndpoint: x.sourceEndpoint(), tgtEndpoint: x.targetEndpoint() };
  });

  for (var i = 0; i < edges.length; i++) {
    for (var j = i + 1; j < edges.length; j++) {
      if (doIntersect(edges[i], edges[j])) {
        crosses++;
      }
    }
  }
  return crosses;
};

var doesOverlap = function doesOverlap(node, otherNode) {
  var bb = node.boundingBox({ includeLabels: false, includeOverlays: false }),
      bbOther = otherNode.boundingBox({ includeLabels: false, includeOverlays: false });
  return !(bbOther.x1 > bb.x2 || bbOther.x2 < bb.x1 || bbOther.y1 > bb.y2 || bbOther.y2 < bb.y1);
};

var findNumberOfOverlappingNodes = function findNumberOfOverlappingNodes(cy) {
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
    if (isNaN(p.x) || isNaN(p.y) || isNaN(q.x) || isNaN(q.y)) {
      return 0;
    }
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

      var src = edge.source();
      var tgt = edge.target();
      if (doesOverlap(src, tgt)) {
        continue;
      }
      var p = edge.sourceEndpoint();
      var q = edge.targetEndpoint();
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
  setLayoutData4Nodes(cy.nodes(), data, '__root__');
  return data;
};

// set layout data for each compound node or graph
var setLayoutData4Nodes = function setLayoutData4Nodes(nodes, data, parentId) {
  if (!nodes || nodes.length < 1) {
    return;
  }
  if (!data[parentId]) {
    data[parentId] = {};
  }

  // set positions of the nodes in the level
  var nodesOnTheLevel = nodes;
  if (parentId === '__root__') {
    // check if this is the root cy graph
    nodesOnTheLevel = nodes.filter(function (x) {
      return x.isOrphan();
    });
  }

  for (var i = 0; i < nodesOnTheLevel.length; i++) {
    var p = nodesOnTheLevel[i].position();
    data[parentId][nodesOnTheLevel[i].id()] = { x: p.x, y: p.y };
  }
  var parentNodes = nodesOnTheLevel.filter(':parent');
  for (var _i = 0; _i < parentNodes.length; _i++) {
    // set positions of the nodes in deeper levels recursively
    var children = parentNodes[_i].children();
    setLayoutData4Nodes(children, data, parentNodes[_i].id());
  }
};

var _saveLayoutData = function _saveLayoutData(cy) {
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
  var commonLevels = setIntersection(layoutData1, layoutData2);
  for (var i = 0; i < commonLevels.length; i++) {
    var l = commonLevels[i];
    var commons = setIntersection(layoutData1[l], layoutData2[l]);
    for (var j = 0; j < commons.length; j++) {
      for (var k = j + 1; k < commons.length; k++) {
        var metric1 = distFn(layoutData1[l][commons[j]], layoutData1[l][commons[k]]);
        var metric2 = distFn(layoutData2[l][commons[j]], layoutData2[l][commons[k]]);
        totalDiff += Math.abs(metric1 - metric2);
        cntDiff += 1;
      }
    }
  }

  return totalDiff / cntDiff;
};

// calculates the average change of angle (in degrees) between each pair of the nodes
var _getMeanAngleDiff = function _getMeanAngleDiff(cy) {
  return getMeanPairwiseLevelOrderDistance(cy, getAngle);
};

// calculates the average change of positions between each pair of the nodes using L2 distance metric
var _getMeanPositionDiff = function _getMeanPositionDiff(cy) {
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