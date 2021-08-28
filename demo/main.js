const graphElems = {
  nodes: [
    { data: { id: 'A' } },
    { data: { id: 'B' } },
    { data: { id: 'C' } },
    { data: { id: 'D' } },
    { data: { id: 'E' } }
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
  "edges": [
    {
      "data": {
        "id": "e1507251",
        "source": "n3",
        "target": "n6"
      },
      "position": {
        "x": 0,
        "y": 0
      },
    },
    {
      "data": {
        "id": "e1630253",
        "source": "n1",
        "target": "n7"
      },
      "position": {
        "x": 0,
        "y": 0
      },
    },
    {
      "data": {
        "id": "e1633839",
        "source": "n2",
        "target": "n12"
      },
      "position": {
        "x": 0,
        "y": 0
      },
    },
    {
      "data": {
        "id": "e1494653",
        "source": "n5",
        "target": "n7"
      },
      "position": {
        "x": 0,
        "y": 0
      },
    },
    {
      "data": {
        "id": "e1630675",
        "source": "n4",
        "target": "n8"
      },
      "position": {
        "x": 0,
        "y": 0
      },
    },
    {
      "data": {
        "id": "e2",
        "source": "n0",
        "target": "n11"
      },
      "position": {
        "x": 0,
        "y": 0
      },
    },
    {
      "data": {
        "id": "e1506457",
        "source": "n3",
        "target": "n9"
      },
      "position": {
        "x": 0,
        "y": 0
      },
    },
    {
      "data": {
        "id": "e1631811",
        "source": "n1",
        "target": "n13"
      },
      "position": {
        "x": 0,
        "y": 0
      },
    },
    {
      "data": {
        "id": "e1491682",
        "source": "n0",
        "target": "n10"
      },
      "position": {
        "x": 0,
        "y": 0
      },
    },
    {
      "data": {
        "id": "e1",
        "source": "n3",
        "target": "n6"
      }
    },
    {
      "data": {
        "id": "e3",
        "source": "n3",
        "target": "n6"
      }
    },
    {
      "data": {
        "id": "e4",
        "source": "c0",
        "target": "n2"
      }
    },
    {
      "data": {
        "id": "e5",
        "source": "n13",
        "target": "n4"
      }
    },
    {
      "data": {
        "id": "e6",
        "source": "n7",
        "target": "n13"
      }
    },
    {
      "data": {
        "id": "e7",
        "source": "c2",
        "target": "n4"
      }
    }
  ],
  "nodes": [
    {
      "data": {
        "id": "c6"
      },
      "position": {
        "x": 718.6602608511446,
        "y": -466.58175752331385
      },
    },
    {
      "data": {
        "id": "n7",
        "parent": "c2"
      },
      "position": {
        "x": 599.2051143200714,
        "y": -593.9879326474002
      },
    },
    {
      "data": {
        "id": "n8",
        "parent": "c5"
      },
      "position": {
        "x": 838.1154073822177,
        "y": -604.0625135332722
      },
    },
    {
      "data": {
        "id": "n0",
        "parent": "c0"
      },
      "position": {
        "x": 605.3020537489481,
        "y": -120.30348168041903
      },
    },
    {
      "data": {
        "id": "c2",
        "parent": "c6"
      },
      "position": {
        "x": 599.2051143200714,
        "y": -560.1936092135843
      },
    },
    {
      "data": {
        "id": "n4",
        "parent": "c5"
      },
      "position": {
        "x": 767.2238601078444,
        "y": -529.9684727412781
      },
    },
    {
      "data": {
        "id": "n9",
        "parent": "c4"
      },
      "position": {
        "x": 364.60884004872986,
        "y": -350.9450261906665
      },
    },
    {
      "data": {
        "id": "n6",
        "parent": "c4"
      },
      "position": {
        "x": 452.8978042501929,
        "y": -435.13966563972684
      },
    },
    {
      "data": {
        "id": "n2",
        "parent": "c3"
      },
      "position": {
        "x": 463.83949506866736,
        "y": -125.41006104696544
      },
    },
    {
      "data": {
        "id": "c5",
        "parent": "c6"
      },
      "position": {
        "x": 813.669633745031,
        "y": -567.0154931372751
      },
    },
    {
      "data": {
        "id": "c1",
        "parent": "c6"
      },
      "position": {
        "x": 750.7626804763943,
        "y": -376.6534537047966
      },
    },
    {
      "data": {
        "id": "n10",
        "parent": "c0"
      },
      "position": {
        "x": 701.5523745525331,
        "y": -115.92687257961151
      },
    },
    {
      "data": {
        "id": "c4"
      },
      "position": {
        "x": 408.7533221494614,
        "y": -393.9940389223434
      },
    },
    {
      "data": {
        "id": "n5",
        "parent": "c2"
      },
      "position": {
        "x": 600.9255161443109,
        "y": -526.3992857797685
      },
    },
    {
      "data": {
        "id": "c0"
      },
      "position": {
        "x": 664.4272141507406,
        "y": -157.3757066455022
      },
    },
    {
      "data": {
        "id": "n3",
        "parent": "c4"
      },
      "position": {
        "x": 359.3080674250231,
        "y": -437.0430516540203
      },
    },
    {
      "data": {
        "id": "n11",
        "parent": "c0"
      },
      "position": {
        "x": 650.734971485825,
        "y": -198.82454071139287
      },
    },
    {
      "data": {
        "id": "n1",
        "parent": "c1"
      },
      "position": {
        "x": 722.8127956400535,
        "y": -345.60100151335547
      },
    },
    {
      "data": {
        "id": "c3"
      },
      "position": {
        "x": 417.67626854269486,
        "y": -162.17214733535826
      },
    },
    {
      "data": {
        "id": "n12",
        "parent": "c3"
      },
      "position": {
        "x": 393.5130420167223,
        "y": -198.93423362375108
      },
    },
    {
      "data": {
        "id": "n13",
        "parent": "c1"
      },
      "position": {
        "x": 756.712565312735,
        "y": -407.70590589623777
      },
    }
  ]
};

const segmentedEdgedElems = {
  "nodes": [
    {
      "data": {
        "id": "0"
      },
      "position": {
        "x": 600,
        "y": 600
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "1"
      },
      "position": {
        "x": 300,
        "y": 800
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "2"
      },
      "position": {
        "x": 600,
        "y": 500
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "3"
      },
      "position": {
        "x": 200,
        "y": 400
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "4"
      },
      "position": {
        "x": 300,
        "y": 500
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "5"
      },
      "position": {
        "x": 300,
        "y": 300
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "6"
      },
      "position": {
        "x": 600,
        "y": 700
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "7"
      },
      "position": {
        "x": 300,
        "y": 100
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "8"
      },
      "position": {
        "x": 800,
        "y": 300
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "9"
      },
      "position": {
        "x": 800,
        "y": 600
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "10"
      },
      "position": {
        "x": 500,
        "y": 800
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "11"
      },
      "position": {
        "x": 200,
        "y": 500
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "12"
      },
      "position": {
        "x": 100,
        "y": 400
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "13"
      },
      "position": {
        "x": 500,
        "y": 500
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "14"
      },
      "position": {
        "x": 800,
        "y": 800
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "15"
      },
      "position": {
        "x": 500,
        "y": 600
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "16"
      },
      "position": {
        "x": 101.16340729623793,
        "y": 196.50977811128618
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "17"
      },
      "position": {
        "x": 400,
        "y": 900
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "18"
      },
      "position": {
        "x": 700,
        "y": 100
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "19"
      },
      "position": {
        "x": 800,
        "y": 700
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    }
  ],
  "edges": [
    {
      "data": {
        "id": "0_2",
        "source": "0",
        "target": "2"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "0_6",
        "source": "0",
        "target": "6"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "0_15",
        "source": "0",
        "target": "15"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "0_9",
        "source": "0",
        "target": "9"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "1_4",
        "source": "1",
        "target": "4"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "1_17",
        "source": "1",
        "target": "17"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "1_10",
        "source": "1",
        "target": "10"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "2_18",
        "source": "2",
        "target": "18"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "2_16",
        "source": "2",
        "target": "16"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "2_13",
        "source": "2",
        "target": "13"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "3_5",
        "source": "3",
        "target": "5"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "3_11",
        "source": "3",
        "target": "11"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "3_13",
        "source": "3",
        "target": "13"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "3_12",
        "source": "3",
        "target": "12"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "4_13",
        "source": "4",
        "target": "13"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "4_11",
        "source": "4",
        "target": "11"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "4_5",
        "source": "4",
        "target": "5"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "5_7",
        "source": "5",
        "target": "7"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "5_8",
        "source": "5",
        "target": "8"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "6_19",
        "source": "6",
        "target": "19"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "7_18",
        "source": "7",
        "target": "18"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "8_9",
        "source": "8",
        "target": "9"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "10_15",
        "source": "10",
        "target": "15"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "10_14",
        "source": "10",
        "target": "14"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "12_16",
        "source": "12",
        "target": "16"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "14_19",
        "source": "14",
        "target": "19"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "15_17",
        "source": "15",
        "target": "17"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    }
  ]
};

const segmentData = [
  {
    "id": "1_17",
    "segmentDist": "70.71067811865476px",
    "segmentWeight": "0.5"
  },
  {
    "id": "2_18",
    "segmentDist": "97.01425001453319px",
    "segmentWeight": "0.058823529411764636"
  },
  {
    "id": "2_16",
    "segmentDist": "257.2478777137633px",
    "segmentWeight": "0.2647058823529411"
  },
  {
    "id": "3_5",
    "segmentDist": "-70.71067811865476px",
    "segmentWeight": "0.5"
  },
  {
    "id": "3_13",
    "segmentDist": "-94.8683298050514px",
    "segmentWeight": "0.8999999999999998"
  },
  {
    "id": "15_17",
    "segmentDist": "94.8683298050514px",
    "segmentWeight": "0.10000000000000057"
  }
];

const segmentedEdgedElems2 = {
  "nodes": [
    {
      "data": {
        "id": "0"
      },
      "position": {
        "x": 600,
        "y": 600
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "1"
      },
      "position": {
        "x": 200,
        "y": 300
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "2"
      },
      "position": {
        "x": 600,
        "y": 500
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "3"
      },
      "position": {
        "x": 700,
        "y": 300
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "4"
      },
      "position": {
        "x": 400,
        "y": 300
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "5"
      },
      "position": {
        "x": 400,
        "y": 200
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "6"
      },
      "position": {
        "x": 800,
        "y": 600
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "7"
      },
      "position": {
        "x": 400,
        "y": 100
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "8"
      },
      "position": {
        "x": 300,
        "y": 200
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "9"
      },
      "position": {
        "x": 300,
        "y": 600
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "10"
      },
      "position": {
        "x": 600,
        "y": 800
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "11"
      },
      "position": {
        "x": 500,
        "y": 300
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "12"
      },
      "position": {
        "x": 800,
        "y": 300
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "13"
      },
      "position": {
        "x": 400,
        "y": 400
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "14"
      },
      "position": {
        "x": 800,
        "y": 800
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "15"
      },
      "position": {
        "x": 600,
        "y": 700
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "16"
      },
      "position": {
        "x": 800,
        "y": 500
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "17"
      },
      "position": {
        "x": 100,
        "y": 700
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "18"
      },
      "position": {
        "x": 600,
        "y": 100
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    },
    {
      "data": {
        "id": "19"
      },
      "position": {
        "x": 800,
        "y": 700
      },
      "group": "nodes",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": false,
      "classes": ""
    }
  ],
  "edges": [
    {
      "data": {
        "id": "0_2",
        "source": "0",
        "target": "2"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "0_6",
        "source": "0",
        "target": "6"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "0_15",
        "source": "0",
        "target": "15"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "0_9",
        "source": "0",
        "target": "9"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "1_4",
        "source": "1",
        "target": "4"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "1_17",
        "source": "1",
        "target": "17"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "1_10",
        "source": "1",
        "target": "10"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "2_18",
        "source": "2",
        "target": "18"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "2_16",
        "source": "2",
        "target": "16"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "2_13",
        "source": "2",
        "target": "13"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "3_5",
        "source": "3",
        "target": "5"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "3_11",
        "source": "3",
        "target": "11"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "3_13",
        "source": "3",
        "target": "13"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "3_12",
        "source": "3",
        "target": "12"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "4_13",
        "source": "4",
        "target": "13"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "4_11",
        "source": "4",
        "target": "11"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "4_5",
        "source": "4",
        "target": "5"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "5_7",
        "source": "5",
        "target": "7"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "5_8",
        "source": "5",
        "target": "8"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "6_19",
        "source": "6",
        "target": "19"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "7_18",
        "source": "7",
        "target": "18"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "8_9",
        "source": "8",
        "target": "9"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "10_15",
        "source": "10",
        "target": "15"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "10_14",
        "source": "10",
        "target": "14"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "12_16",
        "source": "12",
        "target": "16"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "14_19",
        "source": "14",
        "target": "19"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    },
    {
      "data": {
        "id": "15_17",
        "source": "15",
        "target": "17"
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "group": "edges",
      "removed": false,
      "selected": false,
      "selectable": true,
      "locked": false,
      "grabbable": true,
      "pannable": true,
      "classes": ""
    }
  ]
};

const segmentData2 = [
  {
    "id": "1_17",
    "segmentWeight": "0.058823529411764636",
    "segmentDist": "97.01425001453319px"
  },
  {
    "id": "1_10",
    "segmentWeight": "0.6097560975609757",
    "segmentDist": "312.34752377721213px"
  },
  {
    "id": "2_13",
    "segmentWeight": "0.8",
    "segmentDist": "-89.44271909999159px"
  },
  {
    "id": "3_5",
    "segmentWeight": "0.1",
    "segmentDist": "94.86832980505137px"
  },
  {
    "id": "3_13",
    "segmentWeight": "0.10000000000000038",
    "segmentDist": "-94.86832980505142px"
  }
];

function outputResults(result, isOutputRaw = false) {
  let r = result;
  if (!isOutputRaw) {
    r = JSON.stringify(result, null, 4);
  }
  const el = document.getElementById('results');
  el.textContent = r;
  el.parentElement.className = 'w3-animate-top';
  setTimeout(() => {
    el.parentElement.className = '';
  }, 500);
}

function main() {
  var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),
    style: [
      {
        selector: 'node',
        style: {
          'background-color': '#c5e1a5',
          'label': 'data(id)',
          'text-valign': 'center',
          'shape': 'rectangle'
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
    elements: graphElems,
    wheelSensitivity: 0.1,
  });

  const api = cy.layvo('get');

  document.getElementById('meanPositionDiff').addEventListener('click', function () {
    try {
      let r = api.getMeanPositionDiff();
      if (r.toFixed) {
        r = r.toFixed(2) + ' pixels';
      }
      outputResults(r, true);
    } catch (e) {
      window.alert('Error: ' + e);
    }
  });

  document.getElementById('meanAngleDiff').addEventListener('click', function () {
    try {
      let r = api.getMeanAngleDiff();
      if (r.toFixed) {
        r = r.toFixed(2) + ' degrees';
      }
      outputResults(r, true);
    } catch (e) {
      window.alert('Error: ' + e);
    }
  });

  document.getElementById('saveLayoutData').addEventListener('click', function () {
    api.saveLayoutData();
    outputResults();
  });

  document.getElementById('isShowBigGraph').addEventListener('change', function () {
    cy.$().remove();
    if (this.checked) {
      cy.json({ elements: nestedGraphElems });
      cy.fit();
    } else {
      cy.json({ elements: graphElems });
      cy.layout({ name: 'grid' }).run();
      cy.fit();
    }
  });

  document.getElementById('isShowSegmentedEdges').addEventListener('change', function () {
    cy.$().remove();
    if (this.checked) {
      cy.json({ elements: segmentedEdgedElems2 });
      for (let i = 0; i < segmentData2.length; i++) {
        const c = segmentData2[i];
        const edge = cy.$id(c.id);
        edge.css('segment-weights', c.segmentWeight);
        edge.css('segment-distances', c.segmentDist);
        edge.css('curve-style', 'segments');
      }
      cy.style().selector('edge')
        .style({
          'edge-distances': 'node-position'
        })
        .update();
      cy.fit();
    } else {
      cy.json({ elements: graphElems });
      cy.style().selector('edge')
        .style({ 'curve-style': 'bezier' }).update();
      cy.layout({ name: 'grid' }).run();
      cy.fit();
    }
  });

  document.getElementById('randomize').addEventListener('click', function () {
    cy.layout({ name: 'random' }).run();
  });

  document.getElementById('generalProps').addEventListener('click', function () {
    const r = api.generalProperties();
    for (const k in r) {
      if (r[k].toFixed) {
        r[k] = Number(r[k].toFixed(2));
      }
    }
    const r2 = JSON.stringify(r, null, 4);
    const el = document.getElementById('results');
    el.textContent = r2;
    outputResults(r);
  });
}

document.addEventListener('DOMContentLoaded', main);