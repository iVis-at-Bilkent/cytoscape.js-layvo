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

const nestedGraphElems =
{
  nodes: [
    {
      "data": {
        "id": "n0",
        "parent": "c0"
      },
      "position": {
        "x": 562.8505422862692,
        "y": -61.93265341923558
      }
    },
    {
      "data": {
        "id": "c2",
        "parent": "c1615975210707"
      },
      "position": {
        "x": 684.8331412169119,
        "y": -544.1455313433507
      }
    },
    {
      "data": {
        "id": "n1041661",
        "parent": "c5"
      },
      "position": {
        "x": 930.4770573858546,
        "y": -584.0712475835801
      }
    },
    {
      "data": {
        "id": "n1043092",
        "parent": "c0"
      },
      "position": {
        "x": 610.5392460259137,
        "y": 13.712459630181279
      }
    },
    {
      "data": {
        "id": "n1042473",
        "parent": "c2"
      },
      "position": {
        "x": 727.4840405313448,
        "y": -589.1528539593281
      }
    },
    {
      "data": {
        "id": "n1044197",
        "parent": "c0"
      },
      "position": {
        "x": 493.65955939209505,
        "y": 11.74092247807841
      }
    },
    {
      "data": {
        "id": "n1044824",
        "parent": "c5"
      },
      "position": {
        "x": 1014.9290611153779,
        "y": -437.15895527195994
      }
    },
    {
      "data": {
        "id": "c1",
        "parent": "c1615975210707"
      },
      "position": {
        "x": 739.3673244401191,
        "y": -337.5503043609722
      }
    },
    {
      "data": {
        "id": "n1041408",
        "parent": "c0"
      },
      "position": {
        "x": 659.1008630898542,
        "y": -57.556044318428064
      }
    },
    {
      "data": {
        "id": "c4"
      },
      "position": {
        "x": 355.7125591735687,
        "y": -306.0452631588964
      }
    },
    {
      "data": {
        "id": "n5",
        "parent": "c2"
      },
      "position": {
        "x": 676.9844741816105,
        "y": -508.7111560036524
      }
    },
    {
      "data": {
        "id": "c0"
      },
      "position": {
        "x": 576.3802112409746,
        "y": -63.37062641001407
      }
    },
    {
      "data": {
        "id": "n1043382",
        "parent": "c2"
      },
      "position": {
        "x": 590.547148532848,
        "y": -588.0107025959273
      }
    },
    {
      "data": {
        "id": "n1043362",
        "parent": "c0"
      },
      "position": {
        "x": 608.2834600231461,
        "y": -140.45371245020942
      }
    },
    {
      "data": {
        "id": "n1",
        "parent": "c1"
      },
      "position": {
        "x": 722.8127956400535,
        "y": -345.60100151335547
      }
    },
    {
      "data": {
        "id": "n1041946",
        "parent": "c2"
      },
      "position": {
        "x": 790.3078080162197,
        "y": -566.0755499671163
      }
    },
    {
      "data": {
        "id": "n1048164",
        "parent": "c1"
      },
      "position": {
        "x": 820.1963986285436,
        "y": -280.6471036566933
      }
    },
    {
      "data": {
        "id": "n1043926",
        "parent": "c1"
      },
      "position": {
        "x": 756.712565312735,
        "y": -407.70590589623777
      }
    },
    {
      "data": {
        "id": "n1042682",
        "parent": "c2"
      },
      "position": {
        "x": 664.6511944917013,
        "y": -576.299802871284
      }
    },
    {
      "data": {
        "id": "n1053931",
        "parent": "c1"
      },
      "position": {
        "x": 658.5382502516945,
        "y": -267.3947028257066
      }
    },
    {
      "data": {
        "id": "n1042518",
        "parent": "c2"
      },
      "position": {
        "x": 579.3584744176042,
        "y": -499.13820872737324
      }
    },
    {
      "data": {
        "id": "n1042996",
        "parent": "c5"
      },
      "position": {
        "x": 1064.5234685165049,
        "y": -596.9872616228257
      }
    },
    {
      "data": {
        "id": "n2",
        "parent": "c3"
      },
      "position": {
        "x": 285.1893843298937,
        "y": -67.03923278578199
      }
    },
    {
      "data": {
        "id": "n1044899",
        "parent": "c3"
      },
      "position": {
        "x": 371.6612088793842,
        "y": -16.365606271071165
      }
    },
    {
      "data": {
        "id": "n1076797",
        "parent": "c3"
      },
      "position": {
        "x": 193.6902659878778,
        "y": -41.7127113018257
      }
    },
    {
      "data": {
        "id": "n1045573",
        "parent": "c3"
      },
      "position": {
        "x": 214.86293127794863,
        "y": -140.5634053625676
      }
    },
    {
      "data": {
        "id": "c3"
      },
      "position": {
        "x": 282.675737433631,
        "y": -78.46450581681938
      }
    },
    {
      "data": {
        "id": "n3",
        "parent": "c4"
      },
      "position": {
        "x": 355.7704414697999,
        "y": -348.60240277343934
      }
    },
    {
      "data": {
        "id": "c5",
        "parent": "c1615975210707"
      },
      "position": {
        "x": 997.5002629511797,
        "y": -517.0731084473928
      }
    },
    {
      "data": {
        "id": "n1047612",
        "parent": "c4"
      },
      "position": {
        "x": 262.06494005216774,
        "y": -349.5861490077072
      }
    },
    {
      "data": {
        "id": "n1048215",
        "parent": "c4"
      },
      "position": {
        "x": 449.36017829496967,
        "y": -346.6990167591459
      }
    },
    {
      "data": {
        "id": "n1047880",
        "parent": "c4"
      },
      "position": {
        "x": 361.0712140935066,
        "y": -262.50437731008554
      }
    },
    {
      "data": {
        "id": "n4",
        "parent": "c5"
      },
      "position": {
        "x": 993.6319212421317,
        "y": -522.8932208308316
      }
    },
    {
      "data": {
        "id": "c1615975210707"
      },
      "position": {
        "x": 820.0183984053554,
        "y": -431.5006887931111
      }
    }
  ],
  edges: [
    {
      "data": {
        "id": "e4",
        "source": "n1",
        "target": "n1042682"
      }
    },
    {
      "data": {
        "id": "e1491682",
        "source": "n0",
        "target": "n1041408"
      }
    },
    {
      "data": {
        "id": "e3",
        "source": "n0",
        "target": "n1044197"
      }
    },
    {
      "data": {
        "id": "e1496331",
        "source": "n5",
        "target": "n1043382"
      }
    },
    {
      "data": {
        "id": "e1433263",
        "source": "n2",
        "target": "n1076797"
      }
    },
    {
      "data": {
        "id": "e2",
        "source": "n0",
        "target": "n1043362"
      }
    },
    {
      "data": {
        "id": "e12",
        "source": "n5",
        "target": "n1042518"
      }
    },
    {
      "data": {
        "id": "e1636754",
        "source": "n1",
        "target": "n1048164"
      }
    },
    {
      "data": {
        "id": "e1631811",
        "source": "n1",
        "target": "n1043926"
      }
    },
    {
      "data": {
        "id": "e1494653",
        "source": "n5",
        "target": "n1042682"
      }
    },
    {
      "data": {
        "id": "e1495672",
        "source": "n0",
        "target": "n1043092"
      }
    },
    {
      "data": {
        "id": "e14",
        "source": "n5",
        "target": "n1043382"
      }
    },
    {
      "data": {
        "id": "e1505831",
        "source": "n3",
        "target": "n1047612"
      }
    },
    {
      "data": {
        "id": "e1494171",
        "source": "n5",
        "target": "n1042473"
      }
    },
    {
      "data": {
        "id": "e13",
        "source": "n5",
        "target": "n1041946"
      }
    },
    {
      "data": {
        "id": "e1507251",
        "source": "n3",
        "target": "n1048215"
      }
    },
    {
      "data": {
        "id": "e1506457",
        "source": "n3",
        "target": "n1047880"
      }
    },
    {
      "data": {
        "id": "e5",
        "source": "n1",
        "target": "n1042518"
      }
    },
    {
      "data": {
        "id": "e6",
        "source": "n2",
        "target": "n1044899"
      }
    },
    {
      "data": {
        "id": "e1633839",
        "source": "n2",
        "target": "n1045573"
      }
    },
    {
      "data": {
        "id": "e1496279",
        "source": "n0",
        "target": "n1043362"
      }
    },
    {
      "data": {
        "id": "e1630253",
        "source": "n1",
        "target": "n1042682"
      }
    },
    {
      "data": {
        "id": "e1629315",
        "source": "n4",
        "target": "n1041946"
      }
    },
    {
      "data": {
        "id": "e1630050",
        "source": "n1",
        "target": "n1042518"
      }
    },
    {
      "data": {
        "id": "e1628936",
        "source": "n4",
        "target": "n1041661"
      }
    },
    {
      "data": {
        "id": "e1632936",
        "source": "n4",
        "target": "n1044824"
      }
    },
    {
      "data": {
        "id": "e1643907",
        "source": "n1",
        "target": "n1053931"
      }
    },
    {
      "data": {
        "id": "e1633037",
        "source": "n2",
        "target": "n1044899"
      }
    },
    {
      "data": {
        "id": "e1630675",
        "source": "n4",
        "target": "n1042996"
      }
    },
    {
      "data": {
        "id": "e1498199",
        "source": "n0",
        "target": "n1044197"
      }
    }
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
          'background-opacity': 0.333,
          'text-valign': 'bottom'
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
      try {
        const r = api[apiFns[i].fnName](cy);
        const r2 = JSON.stringify(r, null, 4);
        const el = document.getElementById('results');
        el.textContent = r2;
        // just for animation        
        el.parentElement.className = 'w3-animate-top';
        setTimeout(() => {
          el.parentElement.className = '';
        }, 500);
      } catch (e) {
        window.alert('Error: ' + e);
      }
    });
  }

  document.getElementById('isShowBigGraph').addEventListener('change', function () {
    if (this.checked) {
      cy.json({ elements: nestedGraphElems });
      cy.fit();
    } else {
      cy.json({ elements: graphElems });
      cy.layout({ name: 'grid' }).run();
      cy.fit();
    }
  });

  document.getElementById('randomize').addEventListener('click', function () {
    cy.layout({ name: 'random' }).run();
  });
}

document.addEventListener('DOMContentLoaded', main);