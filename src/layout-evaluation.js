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

/** e1 and e2 are array of objects
 * @param  { {srcEndpoint: {x: number, y:number}, tgtEndpoint: {x: number, y:number} }[] } e1 
 * @param  { {srcEndpoint: {x: number, y:number}, tgtEndpoint: {x: number, y:number} }[] } e2 
 */
let doIntersect = function (e1, e2) {
  let l1 = findLineEquationFrom2Points(e1.srcEndpoint, e1.tgtEndpoint);
  let l2 = findLineEquationFrom2Points(e2.srcEndpoint, e2.tgtEndpoint);
  let intersectionPoint = findIntersectionPointsOf2Lines(l1, l2);
  if (!intersectionPoint) {
    return false;
  }
  if (intersectionPoint.isParallel) {
    if (!intersectionPoint.canOverlap) {
      return false;
    } else {
      return areLineSegmentsIntersect(e1, e2);
    }

  }
  const xRange1 = [Math.min(e1.srcEndpoint.x, e1.tgtEndpoint.x), Math.max(e1.srcEndpoint.x, e1.tgtEndpoint.x)];
  const xRange2 = [Math.min(e2.srcEndpoint.x, e2.tgtEndpoint.x), Math.max(e2.srcEndpoint.x, e2.tgtEndpoint.x)];
  const yRange1 = [Math.min(e1.srcEndpoint.y, e1.tgtEndpoint.y), Math.max(e1.srcEndpoint.y, e1.tgtEndpoint.y)];
  const yRange2 = [Math.min(e2.srcEndpoint.y, e2.tgtEndpoint.y), Math.max(e2.srcEndpoint.y, e2.tgtEndpoint.y)];
  const { x, y } = intersectionPoint;

  return x >= xRange1[0] && x >= xRange2[0] && x <= xRange1[1] && x <= xRange2[1]
    && y >= yRange1[0] && y >= yRange2[0] && y <= yRange1[1] && y <= yRange2[1];
};

// to check if to line segments that are from THE SAME equation (y = mx + n) intersects
let areLineSegmentsIntersect = function (e1, e2) {
  const x1min = Math.min(e1.srcEndpoint.x, e1.tgtEndpoint.x);
  const x1max = Math.max(e1.srcEndpoint.x, e1.tgtEndpoint.x);
  const x2min = Math.min(e2.srcEndpoint.x, e2.tgtEndpoint.x);
  const x2max = Math.max(e2.srcEndpoint.x, e2.tgtEndpoint.x);

  return x1max >= x2min && x2max >= x1min;
};

/** If line equation is like "y = mx + n", returns an object with type {m: number, n: number}
 * on the other hand line equation can be like x=3. In those cases returns an object like {x: number} 
 * @param  {} p1 {x: number, y: number}
 * @param  {} p2 {x: number, y: number}
 */
let findLineEquationFrom2Points = function (p1, p2) {
  const deltaX = p2.x - p1.x;
  const deltaY = p2.y - p1.y;
  if (deltaY == 0 && deltaX == 0) {
    return null;
  }
  if (deltaX == 0) {
    return { x: p1.x };
  }
  if (deltaY == 0) {
    return { m: 0, n: p1.y };
  }
  const m = deltaY / deltaX;
  const n = (p1.y * p2.x - p1.x * p2.y) / deltaX;
  return { m: m, n: n };
}

/** "y = mx + n" or "x=3" are a line equaltions. Returns xy coordinates of point type {x: number, y: number}
 * @param  {} l1 {m: number, n: number}
 * @param  {} l2 {m: number, n: number}
 */
let findIntersectionPointsOf2Lines = function (l1, l2) {
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
  const deltaM = l2.m - l1.m;
  // there is no intersection between 2 lines, they are parallel
  if (deltaM == 0) {
    return { isParallel: true, canOverlap: l2.n == l1.n };
  }
  let x = (l1.n - l2.n) / deltaM;
  let y = (l1.n * l2.m - l1.m * l2.n) / deltaM;
  return { x: x, y: y };
}

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
      r.push({ srcEndpoint: x.sourceEndpoint(), tgtEndpoint: x.targetEndpoint() });
    } else {
      sp.unshift(x.sourceEndpoint());
      sp.push(x.targetEndpoint());
      for (let i = 0; i < sp.length - 1; i++) {
        r.push({ srcEndpoint: sp[i], tgtEndpoint: sp[i + 1] });
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
  let edgeArray = cy.edges().toArray();

  const edges = cy.edges().map(x => { return { srcEndpoint: x.sourceEndpoint(), tgtEndpoint: x.targetEndpoint() } }); // array that keeps edges
  const nodeSides = []; // array that keeps node sides, length = # of nodes * 4
  nodeArray.forEach(function (node) {
    let bb = node.boundingBox({ includeLabels: false, includeOverlays: false });
    // the reason for +1 and -1s are because bounding box returns 1px more from each side
    nodeSides.push({ srcEndpoint: { x: bb.x1 + 1, y: bb.y1 + 1 }, tgtEndpoint: { x: bb.x1 + bb.w - 1, y: bb.y1 + 1 } }); // top side
    nodeSides.push({ srcEndpoint: { x: bb.x1 + bb.w - 1, y: bb.y1 + 1 }, tgtEndpoint: { x: bb.x2 - 1, y: bb.y2 - 1 } }); // right side
    nodeSides.push({ srcEndpoint: { x: bb.x2 - 1, y: bb.y2 - 1 }, tgtEndpoint: { x: bb.x1 + 1, y: bb.y1 + bb.h - 1 } }); // bottom side
    nodeSides.push({ srcEndpoint: { x: bb.x1 + 1, y: bb.y1 + bb.h - 1 }, tgtEndpoint: { x: bb.x1 + 1, y: bb.y1 + 1 } }); // left side
  });

  for (let i = 0; i < edgeArray.length; i++) {
    let edgeSource = edgeArray[i].source();
    let edgeTarget = edgeArray[i].target();
    for (var j = 0; j < nodeArray.length; j++) {
      let currentNode = nodeArray[j];
      if (!edgeSource.same(currentNode) && !edgeTarget.same(currentNode) &&
        edgeSource.ancestors().intersection(currentNode).length == 0 &&
        edgeTarget.ancestors().intersection(currentNode).length == 0) {
        let top = doIntersect(edges[i], nodeSides[j * 4]); // intersection btw edge and top side
        let right = doIntersect(edges[i], nodeSides[j * 4 + 1]); // intersection btw edge and right side
        let bottom = doIntersect(edges[i], nodeSides[j * 4 + 2]); // intersection btw edge and bottom side
        let left = doIntersect(edges[i], nodeSides[j * 4 + 3]); // intersection btw edge and left side
        if (top || right || bottom || left) {
          overlaps++;
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

    totalLength += getDistance(p, q);
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