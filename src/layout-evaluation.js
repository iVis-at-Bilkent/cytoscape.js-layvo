module.exports = function () {
  let cy = this;
  return {
    generalProperties: () => { return generalProperties(cy) },
    saveLayoutData: saveLayoutData,
    getMeanSlopeDiff: getMeanSlopeDiff,
    getMeanPositionDiff: getMeanPositionDiff
  };
};

let generalProperties = function (cy) {
  let totalEdgeLength = getTotalEdgeLength(cy);
  return {
    numberOfEdgeCrosses: findNumberOfCrosses(cy),
    numberOfNodeOverlaps: findNumberOfOverlappingNodes(cy),
    totalArea: getTotalArea(cy),
    totalEdgeLength: totalEdgeLength,
    averageEdgeLength: totalEdgeLength / cy.edges().length,
  };
};

let findNumberOfCrosses = function (cy) {
  let doesIntersect = function (a, b, c, d, p, q, r, s) {
    var det, gamma, lambda;
    det = (c - a) * (s - q) - (r - p) * (d - b);
    if (det === 0) {
      return false;
    } else {
      lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
      gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
      return (0.01 < lambda && lambda < 0.99) && (0.1 < gamma && gamma < 0.99);
    }
  };

  let crosses = 0;
  let edgeArray = cy.edges().toArray();

  for (let i = 0; i < edgeArray.length; i++) {
    var p = edgeArray[i].sourceEndpoint(), q = edgeArray[i].targetEndpoint();
    for (var j = i + 1; j < edgeArray.length; j++) {
      var r = edgeArray[j].sourceEndpoint(), s = edgeArray[j].targetEndpoint();
      if (doesIntersect(p.x, p.y, q.x, q.y, r.x, r.y, s.x, s.y)) {
        crosses++;
      }
    }
  }
  return crosses;
};

let findNumberOfOverlappingNodes = function (cy) {
  let doesOverlap = function (node, otherNode) {
    let bb = node.boundingBox({ includeLabels: false, includeOverlays: false }), bbOther = otherNode.boundingBox({ includeLabels: false, includeOverlays: false });
    return !(bbOther.x1 > bb.x2 || bbOther.x2 < bb.x1 || bbOther.y1 > bb.y2 || bbOther.y2 < bb.y1);
  };

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

let getTotalArea = function (cy) {
  let bb = cy.elements().boundingBox();
  return bb.w * bb.h;
}

let getTotalEdgeLength = function (cy) {
  let getDistance = function (p, q) {
    let dx = q.x - p.x, dy = q.y - p.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  let totalLength = 0;
  let edgeArray = cy.edges().toArray();

  for (let edge of edgeArray) {
    let p = edge.sourceEndpoint(), q = edge.targetEndpoint();
    totalLength += getDistance(p, q);
  }
  return totalLength;
};

let layoutData1 = null;

let getLayoutData = function (cy) {
  const data = {};
  setLayoutData4Nodes(cy.nodes(), data, 0);
  return data;
};

let setLayoutData4Nodes = function (nodes, data, level) {
  if (!nodes || nodes.length < 1) {
    return;
  }
  data[level] = {};
  // set positions of the nodes in the level
  const nodesOnTheLevel = nodes.filter(x => x.isOrphan());
  for (let i = 0; i < nodesOnTheLevel.length; i++) {
    data[level][nodesOnTheLevel[i].id()] = nodesOnTheLevel[i].position();
  }
  // set positions of the nodes in deeper levels recursively
  const parentNodes = nodes.filter(':parent');
  for (let i = 0; i < parentNodes.length; i++) {
    const children = parentNodes[i].children();
    setLayoutData4Nodes(children, data, level++);
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
  const levelCount1 = Object.keys(layoutData1).length;
  const levelCount2 = Object.keys(layoutData2).length;
  const commonLevels = Math.min(levelCount1, levelCount2);
  for (let i = 0; i < commonLevels; i++) {
    const commons = setIntersection(layoutData1[i], layoutData2[i]);
    for (let j = 0; j < commons.length; j++) {
      for (let k = j + 1; k < commons.length; k++) {
        const metric1 = distFn(layoutData1[i][commons[j]], layoutData1[i][commons[k]]);
        const metric2 = distFn(layoutData2[i][commons[j]], layoutData2[i][commons[k]]);
        totalDiff += Math.abs(metric1 - metric2);
        cntDiff += 1;
      }
    }
  }

  return totalDiff / cntDiff;
}

// calculates the average change of slope between each pair of the nodes
let getMeanSlopeDiff = function (cy) {
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