module.exports = function () {
  let cy = this;
  return {
    generalProperties: () => { return generalProperties(cy) },
    saveLayoutData: () => { return saveLayoutData(cy) },
    getMeanAngleDiff: () => { return getMeanAngleDiff(cy) },
    getMeanPositionDiff: () => { return getMeanPositionDiff(cy) }
  };
};

let generalProperties = function (cy) {
  let totalEdgeLength = getTotalEdgeLength(cy);
  return {
    numberOfEdgeCrosses: findNumberOfCrosses(cy),
    numberOfNodeOverlaps: findNumberOfOverlappingNodes(cy),
    numberOfNodeEdgeOverlaps: findNumberOfOverlappingNodesAndEdges(cy),
    totalArea: getTotalArea(cy),
    totalEdgeLength: totalEdgeLength,
    averageEdgeLength: totalEdgeLength / cy.edges().length
  };
};

class Point {
  constructor(p) {
    this.x = p.x;
    this.y = p.y;
  }
}

// Given three colinear points p, q, r, the function checks if
// point q lies on line segment 'pr'
let onSegment = function (p, q, r) {
  if (q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) &&
    q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y))
    return true;
  return false;
}

// To find orientation of ordered triplet (p, q, r).
// The function returns following values
// 0 --> p, q and r are colinear
// 1 --> Clockwise
// 2 --> Counterclockwise
let orientation = function (p, q, r) {
  // See https://www.geeksforgeeks.org/orientation-3-ordered-points/
  // for details of below formula.
  let val = (q.y - p.y) * (r.x - q.x) -
    (q.x - p.x) * (r.y - q.y);

  if (val == 0) return 0; // colinear

  return (val > 0) ? 1 : 2; // clock or counterclock wise
}

/** e1 and e2 are array of objects
 * @param  { {srcEndpoint: {x: number, y:number}, tgtEndpoint: {x: number, y:number} }[] } e1 
 * @param  { {srcEndpoint: {x: number, y:number}, tgtEndpoint: {x: number, y:number} }[] } e2 
 */
let doIntersect = function (e1, e2) {
  const p1 = new Point(e1.srcEndpoint);
  const q1 = new Point(e1.tgtEndpoint);
  const p2 = new Point(e2.srcEndpoint);
  const q2 = new Point(e2.tgtEndpoint);
  // Find the four orientations needed for general and
  // special cases
  let o1 = orientation(p1, q1, p2);
  let o2 = orientation(p1, q1, q2);
  let o3 = orientation(p2, q2, p1);
  let o4 = orientation(p2, q2, q1);

  // General case
  if (o1 != o2 && o3 != o4)
    return true;

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

let findNumberOfCrosses = function (cy) {
  let crosses = 0;
  const r = getEdgesWithBendpoints(cy);
  const edges = r.lines;

  for (let i = 0; i < edges.length; i++) {
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

let getEdgesWithBendpoints = function (cy) {
  const r = [];
  const edges = cy.edges();
  const consequtiveLines = {};
  for (let i = 0; i < edges.length; i++) {
    const x = edges[i];
    const sp = x.segmentPoints();
    if (!sp) {
      r.push({ srcEndpoint: x.sourceEndpoint(), tgtEndpoint: x.targetEndpoint(), id: x.id() });
    } else {
      sp.unshift(x.sourceEndpoint());
      sp.push(x.targetEndpoint());
      for (let i = 0; i < sp.length - 1; i++) {
        r.push({ srcEndpoint: sp[i], tgtEndpoint: sp[i + 1], id: x.id() });
        if (i != sp.length - 2) {
          const currIdx = r.length - 1;
          const nextIdx = r.length;
          if (consequtiveLines[currIdx]) {
            consequtiveLines[currIdx][nextIdx] = true;
          } else {
            const o = {};
            o[nextIdx] = true;
            consequtiveLines[currIdx] = o;
          }
          if (consequtiveLines[nextIdx]) {
            consequtiveLines[nextIdx][currIdx] = true;
          } else {
            const o = {};
            o[currIdx] = true;
            consequtiveLines[nextIdx] = o;
          }
        }
      }
    }
  }
  return { lines: r, consequtiveLines: consequtiveLines };
};

let doesOverlap = function (node, otherNode) {
  let bb = node.boundingBox({ includeLabels: false, includeOverlays: false }), bbOther = otherNode.boundingBox({ includeLabels: false, includeOverlays: false });
  return !(bbOther.x1 > bb.x2 || bbOther.x2 < bb.x1 || bbOther.y1 > bb.y2 || bbOther.y2 < bb.y1);
};

let findNumberOfOverlappingNodes = function (cy) {
  let overlaps = 0;
  let nodeArray = cy.nodes().toArray();

  for (let i = 0; i < nodeArray.length; i++) {
    let node = nodeArray[i];
    for (let j = i + 1; j < nodeArray.length; j++) {
      let otherNode = nodeArray[j];
      if (!node.ancestors().union(node.descendants()).contains(otherNode) && doesOverlap(node, otherNode)) {
        overlaps++;
      }
    }
  }
  return overlaps;
};

let findNumberOfOverlappingNodesAndEdges = function (cy) {
  let overlaps = 0;
  let nodeArray = cy.nodes().toArray();

  const nodeSides = []; // array that keeps node sides, length = # of nodes * 4
  nodeArray.forEach(function (node) {
    let bb = node.boundingBox({ includeLabels: false, includeOverlays: false });
    // the reason for +1 and -1s are because bounding box returns 1px more from each side
    nodeSides.push({ srcEndpoint: { x: bb.x1 + 1, y: bb.y1 + 1 }, tgtEndpoint: { x: bb.x1 + bb.w - 1, y: bb.y1 + 1 } }); // top side
    nodeSides.push({ srcEndpoint: { x: bb.x1 + bb.w - 1, y: bb.y1 + 1 }, tgtEndpoint: { x: bb.x2 - 1, y: bb.y2 - 1 } }); // right side
    nodeSides.push({ srcEndpoint: { x: bb.x2 - 1, y: bb.y2 - 1 }, tgtEndpoint: { x: bb.x1 + 1, y: bb.y1 + bb.h - 1 } }); // bottom side
    nodeSides.push({ srcEndpoint: { x: bb.x1 + 1, y: bb.y1 + bb.h - 1 }, tgtEndpoint: { x: bb.x1 + 1, y: bb.y1 + 1 } }); // left side
  });

  const edgeData = cy.edges().map((x) => {
    const o = { src: x.source(), tgt: x.target() };
    const sp = x.segmentPoints();
    const points = [x.sourceEndpoint()];
    if (sp) {
      points.push(...sp);
    }
    points.push(x.targetEndpoint());
    const edgeLines = [];
    for (let i = 0; i < points.length - 1; i++) {
      edgeLines.push({ srcEndpoint: points[i], tgtEndpoint: points[i + 1] })
    }
    o.edgeLines = edgeLines;
    return o;
  });

  for (let i = 0; i < edgeData.length; i++) {
    const edgeSource = edgeData[i].src;
    const edgeTarget = edgeData[i].tgt;
    for (let j = 0; j < nodeArray.length; j++) {
      let currentNode = nodeArray[j];
      if (!edgeSource.same(currentNode) && !edgeTarget.same(currentNode) &&
        edgeSource.ancestors().intersection(currentNode).length == 0 &&
        edgeTarget.ancestors().intersection(currentNode).length == 0) {
        for (let k = 0; k < edgeData[i].edgeLines.length; k++) {
          const line = edgeData[i].edgeLines[k];
          const top = doIntersect(line, nodeSides[j * 4]); // intersection btw edge and top side
          const right = doIntersect(line, nodeSides[j * 4 + 1]); // intersection btw edge and right side
          const bottom = doIntersect(line, nodeSides[j * 4 + 2]); // intersection btw edge and bottom side
          const left = doIntersect(line, nodeSides[j * 4 + 3]); // intersection btw edge and left side
          if (top || right || bottom || left) {
            overlaps++;
          }
        }
      }
    }
  }
  return overlaps;
};

let getTotalArea = function (cy) {
  let bb = cy.elements().boundingBox();
  return bb.w * bb.h;
}

let getTotalEdgeLength = function (cy) {
  let getDistance = function (p, q) {
    let dx = q.x - p.x, dy = q.y - p.y;
    if (isNaN(p.x) || isNaN(p.y) || isNaN(q.x) || isNaN(q.y)) {
      return 0;
    }
    return Math.sqrt(dx * dx + dy * dy);
  };

  let totalLength = 0;
  let edgeArray = cy.edges().toArray();

  for (let edge of edgeArray) {
    const src = edge.source();
    const tgt = edge.target();
    if (doesOverlap(src, tgt)) {
      continue;
    }
    let p = edge.sourceEndpoint();
    let q = edge.targetEndpoint();
    const sp = edge.segmentPoints();
    if (!sp) {
      totalLength += getDistance(p, q);
    } else {
      sp.unshift(p);
      sp.push(q);
      for (let i = 0; i < sp.length - 1; i++) {
        totalLength += getDistance(sp[i], sp[i + 1]);
      }
    }
  }
  return totalLength;
};

let layoutData1 = null;

let getLayoutData = function (cy) {
  const data = {};
  setLayoutData4Nodes(cy.nodes(), data, '__root__');
  return data;
};

// set layout data for each compound node or graph
let setLayoutData4Nodes = function (nodes, data, parentId) {
  if (!nodes || nodes.length < 1) {
    return;
  }
  if (!data[parentId]) {
    data[parentId] = {};
  }

  // set positions of the nodes in the level
  let nodesOnTheLevel = nodes;
  if (parentId === '__root__') { // check if this is the root cy graph
    nodesOnTheLevel = nodes.filter(x => x.isOrphan());
  }

  for (let i = 0; i < nodesOnTheLevel.length; i++) {
    const p = nodesOnTheLevel[i].position();
    data[parentId][nodesOnTheLevel[i].id()] = { x: p.x, y: p.y };
  }
  const parentNodes = nodesOnTheLevel.filter(':parent');
  for (let i = 0; i < parentNodes.length; i++) {
    // set positions of the nodes in deeper levels recursively
    const children = parentNodes[i].children();
    setLayoutData4Nodes(children, data, parentNodes[i].id());
  }
};

let saveLayoutData = function (cy) {
  layoutData1 = getLayoutData(cy);
};

// returns an array of strings which is the intersection of keys of 2 objects 
let setIntersection = (o1, o2) => {
  let intersection = [];
  for (let k in o2) {
    if (o1[k]) {
      intersection.push(k)
    }
  }
  return intersection;
};

let getMeanPairwiseLevelOrderDistance = function (cy, distFn) {
  if (!layoutData1) {
    throw 'first you should call "saveLayoutData" to save the layout data!';
  }
  let totalDiff = 0;
  let cntDiff = 0;
  const layoutData2 = getLayoutData(cy);
  const commonLevels = setIntersection(layoutData1, layoutData2);
  for (let i = 0; i < commonLevels.length; i++) {
    const l = commonLevels[i];
    const commons = setIntersection(layoutData1[l], layoutData2[l]);
    for (let j = 0; j < commons.length; j++) {
      for (let k = j + 1; k < commons.length; k++) {
        const metric1 = distFn(layoutData1[l][commons[j]], layoutData1[l][commons[k]]);
        const metric2 = distFn(layoutData2[l][commons[j]], layoutData2[l][commons[k]]);
        totalDiff += Math.abs(metric1 - metric2);
        cntDiff += 1;
      }
    }
  }

  return totalDiff / cntDiff;
}

// calculates the average change of angle (in degrees) between each pair of the nodes
let getMeanAngleDiff = function (cy) {
  return getMeanPairwiseLevelOrderDistance(cy, getAngle);
};

// calculates the average change of positions between each pair of the nodes using L2 distance metric
let getMeanPositionDiff = function (cy) {
  return getMeanPairwiseLevelOrderDistance(cy, getL2Distance);
};

let getAngle = function (p1, p2) {
  const deltaY = p1.y - p2.y;
  const deltaX = p1.x - p2.x;
  return Math.atan2(deltaY, deltaX) * 180 / Math.PI
};

// L2 norm 
let getL2Distance = function (p1, p2) {
  const deltaY = p1.y - p2.y;
  const deltaX = p1.x - p2.x;
  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
};