const tiles = {
  floor: {
    E: { width: 4, height: 4, codename: 'e', category: 'floor' },
    EA: { width: 6, height: 6, codename: 'ea', category: 'floor' },
    U: { width: 8, height: 8, codename: 'u', category: 'floor' },
    R: { width: 4, height: 8, codename: 'r', category: 'floor', color: '#CFC' },
    S: { width: 2, height: 4, codename: 's', category: 'floor', color: '#CFC' },
    SA: { width: 2, height: 6, codename: 'sa', category: 'floor', color: '#CFC' },
    SB: { width: 2, height: 8, codename: 'sb', category: 'floor', color: '#CFC' }
  },
  edge: {
    'E-EDGE-WALL': { width: 4, height: 5, codename: 'e-edge-wall', category: 'edge wall' },
    'EA-EDGE-WALL': { width: 6, height: 7, codename: 'ea-edge-wall', category: 'edge wall' },
    'U-EDGE-WALL': { width: 8, height: 9, codename: 'u-edge-wall', category: 'edge wall' },
    'R-EDGE-WALL': { width: 4, height: 9, codename: 'r-edge-wall', category: 'edge wall', color: '#CFC' },
    'S-EDGE-WALL': { width: 2, height: 5, codename: 's-edge-wall', category: 'edge wall', color: '#CFC' },
    'SA-EDGE-WALL': { width: 2, height: 7, codename: 'sa-edge-wall', category: 'edge wall', color: '#CFC' },
    'SB-EDGE-WALL': { width: 2, height: 9, codename: 'sb-edge-wall', category: 'edge wall', color: '#CFC' }
  },
  wall: {
    A: { width: 1, height: 4, codename: 'a', category: 'wall', color: '#CCF' },
    BA: { width: 1, height: 3, codename: 'ba', category: 'wall', color: '#CCF' },
    B: { width: 1, height: 4, codename: 'b', category: 'wall', color: '#CCF' },
    C: { width: 1, height: 5, codename: 'c', category: 'wall', color: '#CCF' },
    D: { width: 1, height: 6, codename: 'd', category: 'wall', color: '#CCF' }
  }
}

export default tiles
