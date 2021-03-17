const graphElems = {
  nodes: [
    { data: { id: 'A', foo: 3, bar: 5, baz: 7 } },
    { data: { id: 'B', foo: 7, bar: 1, baz: 3 } },
    { data: { id: 'C', foo: 2, bar: 7, baz: 6 } },
    { data: { id: 'D', foo: 9, bar: 5, baz: 2 } },
    { data: { id: 'E', foo: 2, bar: 4, baz: 5 } }
  ],
  edges: [
    { data: { id: 'AE', weight: 1, source: 'A', target: 'E' } },
    { data: { id: 'AB', weight: 3, source: 'A', target: 'B' } },
    { data: { id: 'BE', weight: 4, source: 'B', target: 'E' } },
    { data: { id: 'BC', weight: 5, source: 'B', target: 'C' } },
    { data: { id: 'CE', weight: 6, source: 'C', target: 'E' } },
    { data: { id: 'CD', weight: 2, source: 'C', target: 'D' } },
    { data: { id: 'DE', weight: 7, source: 'D', target: 'E' } }
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
    { btnId: 'meanAngleDiff', fnName: 'getMeanAngleDiff' },
    { btnId: 'meanPositionDiff', fnName: 'getMeanPositionDiff' }
  ];

  for (let i = 0; i < apiFns.length; i++) {
    document.getElementById(apiFns[i].btnId).addEventListener('click', function () {
      const r = api[apiFns[i].fnName](cy);
      const r2 = JSON.stringify(r, null, 4);
      const el = document.getElementById('results');
      el.textContent = r2;
      el.parentElement.className = 'w3-animate-top';
      setTimeout(() => {
        el.parentElement.className = '';
      }, 500);
    });
  }
}

document.addEventListener('DOMContentLoaded', main);