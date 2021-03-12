const graphElems = {
  nodes: [
    { data: { id: 'a', foo: 3, bar: 5, baz: 7 } },
    { data: { id: 'b', foo: 7, bar: 1, baz: 3 } },
    { data: { id: 'c', foo: 2, bar: 7, baz: 6 } },
    { data: { id: 'd', foo: 9, bar: 5, baz: 2 } },
    { data: { id: 'e', foo: 2, bar: 4, baz: 5 } }
  ],
  edges: [
    { data: { id: 'ae', weight: 1, source: 'a', target: 'e' } },
    { data: { id: 'ab', weight: 3, source: 'a', target: 'b' } },
    { data: { id: 'be', weight: 4, source: 'b', target: 'e' } },
    { data: { id: 'bc', weight: 5, source: 'b', target: 'c' } },
    { data: { id: 'ce', weight: 6, source: 'c', target: 'e' } },
    { data: { id: 'cd', weight: 2, source: 'c', target: 'd' } },
    { data: { id: 'de', weight: 7, source: 'd', target: 'e' } }
  ]
};

function main() {
  var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),
    style: [
      {
        selector: 'node',
        style: {
          'background-color': '#c5e1a5',
          'label': 'data(id)',
          'text-valign': 'center'
        }
      },
      {
        selector: ':parent',
        style: {
          'background-opacity': 0.333
        }
      },
      {
        selector: "node.cy-expand-collapse-collapsed-node",
        style: {
          "background-color": "darkblue",
          "shape": "rectangle"
        }
      },
      {
        selector: 'edge',
        style: {
          'width': 3,
          'line-color': '#c5e1a5',
          'curve-style': 'bezier'
        }
      },
      {
        selector: ':selected',
        style: {
          'overlay-color': "#6c757d",
          'overlay-opacity': 0.3,
          'background-color': "#999999"
        }
      }
    ],
    elements: graphElems
  });

  const api = cy.layvo('get');

  const apiFns = [
    { btnId: 'generalProps', fnName: 'generalProperties' },
    { btnId: 'saveLayoutData', fnName: 'saveLayoutData' },
    { btnId: 'meanSlopeDiff', fnName: 'getMeanSlopeDiff' },
    { btnId: 'meanPositionDiff', fnName: 'getMeanPositionDiff' }
  ];

  for (let i = 0; i < apiFns.length; i++) {
    document.getElementById(apiFns[i].btnId).addEventListener('click', function () {
      const r = api[apiFns[i].fnName](cy);
      const r2 = JSON.stringify(r, null, 4);
      document.getElementById('results').textContent = r2;
    });
  }
}

document.addEventListener('DOMContentLoaded', main);