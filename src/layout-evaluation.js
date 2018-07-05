module.exports = function() {
	let cy = this;
	return {
		generalProperties: ()=>{return generalProperties(cy)},
		differenceMetrics: differenceMetrics,
	};
};

let generalProperties = function(cy) {
	let totalEdgeLength = getTotalEdgeLength(cy);
	return {
		numberOfEdgeCrosses: findNumberOfCrosses(cy),
		numberOfNodeOverlaps: findNumberOfOverlappingNodes(cy),
		totalArea: getTotalArea(cy),
		totalEdgeLength: totalEdgeLength,
		averageEdgeLength: totalEdgeLength / cy.edges().length,
	};
};

let findNumberOfCrosses = function(cy) {
	let doesIntersect = function(a,b,c,d,p,q,r,s) {
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

let findNumberOfOverlappingNodes = function(cy) {
	let doesOverlap = function(node, otherNode) {
		let bb = node.boundingBox(), bbOther = otherNode.boundingBox();
		return !(bbOther.x1 > bb.x2 || bbOther.x2 < bb.x1 || bbOther.y1 > bb.y2 || bbOther.y2 < bb.y1);
	};

	let overlaps = 0;
	let nodeArray = cy.nodes().toArray();

	for (let i = 0; i < nodeArray.length; i++) {
		let node = nodeArray[i];
		for (let j = i + 1; j < nodeArray.length; j++) {
			let otherNode = nodeArray[j];
			if (doesOverlap(node, otherNode)) {
				overlaps++;
			}
		}
	}
	return overlaps;
};

let getTotalArea = function(cy) {
	let bb = cy.elements().boundingBox();
	return bb.w * bb.h;
}

let getTotalEdgeLength = function(cy) {
	let getDistance = function(p, q) {
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

let getAverageEdgeLength = function(cy) {
	return getTotalEdgeLength(cy) / cy.edges().length;
};

let differenceMetrics = function(cy, otherCy) {
	// align
	cy.fit(50); otherCy.fit(50);                                                                                                                                                                             

	if (cy.zoom() > otherCy.zoom()){
		cy.zoom(otherCy.zoom()); cy.pan(otherCy.pan());
	} else {
		otherCy.zoom(cy.zoom()); otherCy.pan(cy.pan());
	}

	return {
		averageDistanceBetweenGraphs: getAverageDistanceBetweenGraphs(cy, otherCy),
			orthogonalOrdering: orthogonalOrdering(cy, otherCy),
	};
};

let getAverageDistanceBetweenGraphs = function(cy, otherCy) {
	let getDistance = function(p, q) {
		let dx = q.x - p.x, dy = q.y - p.y;
		return Math.sqrt(dx * dx + dy * dy);
	};

	let totalDistance = 0, numberOfNodes = 0;

	cy.nodes().forEach(function(ele) {
		let otherEle = otherCy.getElementById(ele.id());
		if (otherEle.length) {
			numberOfNodes++;
			totalDistance += getDistance(ele.renderedPosition(), otherEle.renderedPosition());
		}
	});
	return numberOfNodes ? totalDistance / numberOfNodes : 0;
};

let orthogonalOrdering = function(cy, otherCy) {
	let calcEdgeAngle = function(edge) {
		let dx = edge.targetEndpoint().x - edge.sourceEndpoint().x;
		let dy = edge.targetEndpoint().y - edge.sourceEndpoint().y;
		let angle = Math.atan2(dx, dy);
		return angle < 0 ? angle + 2 * Math.PI : angle;
	};

	let getWeight = function(theta, lowerBound, upperBound) {
		if ((theta % Math.PI) > Math.PI / 4) {
			let slope = -4 / Math.PI, height = 2, width = Math.PI / 2; 
			let x = Math.floor(upperBound / width) - Math.floor(lowerBound / width);
			let area = 0;
			let lowerBoundY = 2 + (lowerBound % width) * slope, upperBoundY = 2 + (upperBound % width) * slope;

			if (x > 0) {
				area = width * (x - 1);
				area += (width - (lowerBound % width)) * lowerBoundY / 2;
				area += (height + upperBoundY) / 2 * (upperBound % width); 
			} else {
				area += (lowerBoundY + upperBoundY) / 2 * ((upperBound - lowerBound) % width);
			}
			return area;
		} else {
			let slope = 4 / Math.PI, height = 2, width = Math.PI / 2;
			let x = Math.floor(upperBound / width) - Math.floor(lowerBound / width);
			let area = width * Math.floor((upperBound - lowerBound) / width);
			let lowerBoundY = (lowerBound % width) * slope, upperBoundY = (upperBound % width) * slope;

			if (x > 0) {
				area = width * (x - 1);
				area += (width - (lowerBound % width)) * (height + lowerBoundY) / 2;
				area += upperBoundY * (upperBound % width) / 2 ; 
			} else {
				area += (lowerBoundY + upperBoundY) / 2 * ((upperBound - lowerBound) % width);
			}
			return area;
		}
	};

	let getOrder = function(edge, otherEdge) {
		let totalWeight = 0, angle = calcEdgeAngle(edge), otherAngle = calcEdgeAngle(otherEdge);

		if (angle > otherAngle) {
			[angle, otherAngle] = [otherAngle, angle];
		}
		let upperBound = 0;
		while (upperBound != otherAngle) {
			upperBound = Math.PI / 4 * (Math.floor(angle / (Math.PI / 4)) + 1);

			if (upperBound > otherAngle) {
				upperBound = otherAngle;
			}

			if (angle % Math.PI / 2 > Math.PI / 4) {
				totalWeight += getWeight(5, angle, upperBound);
			} else {
				totalWeight += getWeight(0, angle, upperBound);
			}

			angle = upperBound;

		}
		return totalWeight;
	};

	let totalAngle = 0, numberOfEdges = 0;

	cy.edges().forEach(function(ele) {
		let otherEle = otherCy.getElementById(ele.id());
		if (otherEle.length) {
			numberOfEdges++;
			totalAngle += Math.min(getOrder(ele, otherEle), getOrder(otherEle, ele));
		}
	});
	console.log(totalAngle);
	return numberOfEdges ? totalAngle / numberOfEdges : 0;
};
