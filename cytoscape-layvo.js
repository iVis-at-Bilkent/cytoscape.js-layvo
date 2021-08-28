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


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    numberOfNodeEdgeOverlaps: findNumberOfOverlappingNodesAndEdges(cy),
    totalArea: getTotalArea(cy),
    totalEdgeLength: totalEdgeLength,
    averageEdgeLength: totalEdgeLength / cy.edges().length
  };
};

var Point = function Point(p) {
  _classCallCheck(this, Point);

  this.x = p.x;
  this.y = p.y;
};

// Given three colinear points p, q, r, the function checks if
// point q lies on line segment 'pr'


var onSegment = function onSegment(p, q, r) {
  if (q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y)) return true;
  return false;
};

// To find orientation of ordered triplet (p, q, r).
// The function returns following values
// 0 --> p, q and r are colinear
// 1 --> Clockwise
// 2 --> Counterclockwise
var orientation = function orientation(p, q, r) {
  // See https://www.geeksforgeeks.org/orientation-3-ordered-points/
  // for details of below formula.
  var val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);

  if (val == 0) return 0; // colinear

  return val > 0 ? 1 : 2; // clock or counterclock wise
};

/** e1 and e2 are array of objects
 * @param  { {srcEndpoint: {x: number, y:number}, tgtEndpoint: {x: number, y:number} }[] } e1 
 * @param  { {srcEndpoint: {x: number, y:number}, tgtEndpoint: {x: number, y:number} }[] } e2 
 */
var doIntersect = function doIntersect(e1, e2) {
  var p1 = new Point(e1.srcEndpoint);
  var q1 = new Point(e1.tgtEndpoint);
  var p2 = new Point(e2.srcEndpoint);
  var q2 = new Point(e2.tgtEndpoint);
  // Find the four orientations needed for general and
  // special cases
  var o1 = orientation(p1, q1, p2);
  var o2 = orientation(p1, q1, q2);
  var o3 = orientation(p2, q2, p1);
  var o4 = orientation(p2, q2, q1);

  // General case
  if (o1 != o2 && o3 != o4) return true;

  // Special Cases
  // p1, q1 and p2 are colinear and p2 lies on segment p1q1
  if (o1 == 0 && onSegment(p1, p2, q1)) return true;

  // p1, q1 and q2 are colinear and q2 lies on segment p1q1
  if (o2 == 0 && onSegment(p1, q2, q1)) return true;

  // p2, q2 and p1 are colinear and p1 lies on segment p2q2
  if (o3 == 0 && onSegment(p2, p1, q2)) return true;

  // p2, q2 and q1 are colinear and q1 lies on segment p2q2
  if (o4 == 0 && onSegment(p2, q1, q2)) return true;

  return false; // Doesn't fall in any of the above cases
};

var findNumberOfCrosses = function findNumberOfCrosses(cy) {
  var crosses = 0;
  var r = getEdgesWithBendpoints(cy);
  var edges = r.lines;

  for (var i = 0; i < edges.length; i++) {
    for (var j = i + 1; j < edges.length; j++) {
      if (r.consequtiveLines[i] && r.consequtiveLines[i][j]) {
        continue;
      }
      if (doIntersect(edges[i], edges[j])) {
        crosses++;
      }
    }
  }
  return crosses;
};

var getEdgesWithBendpoints = function getEdgesWithBendpoints(cy) {
  var r = [];
  var edges = cy.edges();
  var consequtiveLines = {};
  for (var i = 0; i < edges.length; i++) {
    var x = edges[i];
    var sp = x.segmentPoints();
    if (!sp) {
      r.push({ srcEndpoint: x.sourceEndpoint(), tgtEndpoint: x.targetEndpoint(), id: x.id() });
    } else {
      sp.unshift(x.sourceEndpoint());
      sp.push(x.targetEndpoint());
      for (var _i = 0; _i < sp.length - 1; _i++) {
        r.push({ srcEndpoint: sp[_i], tgtEndpoint: sp[_i + 1], id: x.id() });
        if (_i != sp.length - 2) {
          var currIdx = r.length - 1;
          var nextIdx = r.length;
          if (consequtiveLines[currIdx]) {
            consequtiveLines[currIdx][nextIdx] = true;
          } else {
            var o = {};
            o[nextIdx] = true;
            consequtiveLines[currIdx] = o;
          }
          if (consequtiveLines[nextIdx]) {
            consequtiveLines[nextIdx][currIdx] = true;
          } else {
            var _o = {};
            _o[currIdx] = true;
            consequtiveLines[nextIdx] = _o;
          }
        }
      }
    }
  }
  return { lines: r, consequtiveLines: consequtiveLines };
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

var findNumberOfOverlappingNodesAndEdges = function findNumberOfOverlappingNodesAndEdges(cy) {
  var overlaps = 0;
  var nodeArray = cy.nodes().toArray();

  var nodeSides = []; // array that keeps node sides, length = # of nodes * 4
  nodeArray.forEach(function (node) {
    var bb = node.boundingBox({ includeLabels: false, includeOverlays: false });
    // the reason for +1 and -1s are because bounding box returns 1px more from each side
    nodeSides.push({ srcEndpoint: { x: bb.x1 + 1, y: bb.y1 + 1 }, tgtEndpoint: { x: bb.x1 + bb.w - 1, y: bb.y1 + 1 } }); // top side
    nodeSides.push({ srcEndpoint: { x: bb.x1 + bb.w - 1, y: bb.y1 + 1 }, tgtEndpoint: { x: bb.x2 - 1, y: bb.y2 - 1 } }); // right side
    nodeSides.push({ srcEndpoint: { x: bb.x2 - 1, y: bb.y2 - 1 }, tgtEndpoint: { x: bb.x1 + 1, y: bb.y1 + bb.h - 1 } }); // bottom side
    nodeSides.push({ srcEndpoint: { x: bb.x1 + 1, y: bb.y1 + bb.h - 1 }, tgtEndpoint: { x: bb.x1 + 1, y: bb.y1 + 1 } }); // left side
  });

  var edgeData = cy.edges().map(function (x) {
    var o = { src: x.source(), tgt: x.target() };
    var sp = x.segmentPoints();
    var points = [x.sourceEndpoint()];
    if (sp) {
      points.push.apply(points, _toConsumableArray(sp));
    }
    points.push(x.targetEndpoint());
    var edgeLines = [];
    for (var i = 0; i < points.length - 1; i++) {
      edgeLines.push({ srcEndpoint: points[i], tgtEndpoint: points[i + 1] });
    }
    o.edgeLines = edgeLines;
    return o;
  });

  for (var i = 0; i < edgeData.length; i++) {
    var edgeSource = edgeData[i].src;
    var edgeTarget = edgeData[i].tgt;
    for (var j = 0; j < nodeArray.length; j++) {
      var currentNode = nodeArray[j];
      if (!edgeSource.same(currentNode) && !edgeTarget.same(currentNode) && edgeSource.ancestors().intersection(currentNode).length == 0 && edgeTarget.ancestors().intersection(currentNode).length == 0) {
        for (var k = 0; k < edgeData[i].edgeLines.length; k++) {
          var line = edgeData[i].edgeLines[k];
          var top = doIntersect(line, nodeSides[j * 4]); // intersection btw edge and top side
          var right = doIntersect(line, nodeSides[j * 4 + 1]); // intersection btw edge and right side
          var bottom = doIntersect(line, nodeSides[j * 4 + 2]); // intersection btw edge and bottom side
          var left = doIntersect(line, nodeSides[j * 4 + 3]); // intersection btw edge and left side
          if (top || right || bottom || left) {
            overlaps++;
          }
        }
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
      var sp = edge.segmentPoints();
      if (!sp) {
        totalLength += getDistance(p, q);
      } else {
        sp.unshift(p);
        sp.push(q);
        for (var i = 0; i < sp.length - 1; i++) {
          totalLength += getDistance(sp[i], sp[i + 1]);
        }
      }
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
  for (var _i2 = 0; _i2 < parentNodes.length; _i2++) {
    // set positions of the nodes in deeper levels recursively
    var children = parentNodes[_i2].children();
    setLayoutData4Nodes(children, data, parentNodes[_i2].id());
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