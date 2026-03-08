const caseMap = {
    'OLL (coming soon)': {}, // dear god

    '2-Look OLL': {
        'Dot Shape': {
            pattern: `  X O X
X X X X X
O X O X O
X X X X X
  X O X`,
            algs: [
                "F R U R' U' F' f R U R' U' f'",
                "f R U R' U' f' U F R U R' U' F'",
                "f R U R' U' f' U' F R U R' U' F'"
            ]
        },
        'I-Shape': {
            pattern: `  X O X
X X X X X
X O O O X
X X X X X
  X O X`,
            algs: [
                "F R U R' U' F'",
                "R U R' U' M' U R U' r'"
            ]
        },
        'L-Shape': {
            pattern: `  X O X
X X X X X
O X O O X
X X O X X
  X X X`,
            algs: [
                "f R U R' U' f'",
                "y2 F U R U' R' F'",
                "y2 r U R' U' r' R U R U' R'"
            ]
        },
        Antisune: {
            pattern: `  X* X X
O* X O O* X
X O O O X
X X O X O
  O X X`,
            algs: [
                "R U2 R' U' R U' R'",
                "y' R' U' R U' R' U2 R",
                "y L' U' L U' L' U2 L"
            ]
        },
        Sune: {
            pattern: `  O* X X
X X O X O*
X O O O X
X O O X* X
  X X O`,
            algs: [
                "R U R' U R U2 R'",
                "y' R' U2 R U R' U R"
            ]
        },
        H: {
            pattern: `  X X X
O* X O X O*{.25}
X O O O X
O X O X O*
  X X X`,
            algs: [
                "R U R' U R U' R' U R U2 R'",
                "y F R U R' U' R U R' U' R U R' U' F'"
            ]
        },
        L: {
            pattern: `  X* X X*
X O* O X O*
X O O O X
X X O O X
  O X X`,
            algs: [
                "F R' F' r U R U' r'"
            ]
        },
        Pi: {
            pattern: `  X X X
O X O X O*
X O O O X
X X O* X* X
  O X O*`,
            algs: [
                "R U2 R2 U' R2 U' R2 U2 R"
            ]
        },
        T: {
            pattern: `  O X X
X X O O X*
X O O O X
X* X O O X
  O* X X`,
            algs: [
                "r U R' U' r' F R F'"
            ]
        },
        U: {
            pattern: `  X X X
X O* O* O X
X O O O X
X X O X X
  O X O*`,
            algs: [
                "R2 D R' U2 R D' R' U2 R'"
            ]
        }
    },

    PLL: {
        Aa: {
            pattern: `  r g* b
g y y y o
o*{.1} y y y r*
g y y y r
  o b* b`,
            algs: [
                "x L2 D2 L' U' L D2 L' U L'",
                "y' x' L' U L' D2 L U' L' D2 L2",
                "y x R' U R' D2 R U' R' D2 R2",
                "y2 x' R2 D2 R' U' R D2 R' U R'"
            ]
        },
        Ab: {
            pattern: `  o* g*{.6} g*
b* y y y r*
o y y y r
b y y y o*{.1}
  r b g`,
            algs: [
                "x R2 D2 R U R' D2 R U' R",
                "y x L U' L D2 L' U L D2 L2",
                "y2 x R2 D2 R U R' D2 R U' R",
                "y' x' R U' R D2 R' U R D2 R2"
            ]
        },
        F: {
            pattern: `  g b*{.9} r*{.75}
o*{.075} y y y b*
o y y y r*
o y y y g*
  b g*{.05} r*{.125}`,
            algs: [
                "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R"
            ]
        },
        Ga: {
            pattern: `  g*{.1} b r*
o y y y b
g y y y o*
o y y y g
  b r r`,
            algs: [
                "R2 U R' U R' U' R U' R2 U' D R' U R D'",
                "R2 u R' U R' U' R u' R2 y' R' U R"
            ]
        },
        Gb: {
            pattern: `  g o r
o y y y b
r y y y b
o y y y g*
  b* g* r`,
            algs: [
                "R' U' R U D' R2 U R' U R U' R U' R2 D",
                "y F' U' F R2 u R' U R U' R u' R2"
            ]
        },
        Gc: {
            pattern: `  g* r r
o y y y b
b* y y y o
o y y y g*
  b g r`,
            algs: [
                "R2 U' R U' R U R' U R2 U D' R U' R' D",
                "y2 R2 F2 R U2 R U2 R' F R U R' U' R' F R2",
                "R2 u' R U' R U R' u R2 y R U' R'"
            ]
        },
        Gd: {
            pattern: `  g b r*
o* y y y* b*
r y y y g
o y y y g
  b o r`,
            algs: [
                "R U R' U' D R2 U' R U' R' U R' U R2 D'",
                "R U R' y' R2 u' R U' R' U R' u R2"
            ]
        },
        Ja: {
            pattern: `  g r r
o y y y b*
o* y y y g
o y y y g
  b b r*`,
            algs: [
                "x R2 F R F' R U2 r' U r U2",
                "y2 L' U' L F L' U' L U L F' L2 U L",
                "y' R' U L' U2 R U' R' U2 R L",
                "U2 L' U' L F L' U' L U L F' R2 U L"
            ]
        },
        Jb: {
            pattern: `  r* r b
g* y y y o*
g y y y o
g y y y r
  o b b*`,
            algs: [
                "R U R' F' R U R' U' R' F R2 U' R'"
            ]
        },
        Ra: {
            pattern: `  r* g b*
g y y y o*
r* y y y b
g y y y r*
  o o b*`,
            algs: [
                "R U' R' U' R U R D R' U' R D' R' U2 R'",
                "R U R' F' R U2 R' U2 R' F R U R U2 R'",
                "y' L U2 L' U2 L F' L' U' L U L F L2"
            ]
        },
        Rb: {
            pattern: `  o o g
b y y y r
r* y y y g
b y y y o
  r b g`,
            algs: [
                "R2 F R U R U' R' F' R U2 R' U2 R",
                "y' R' U2 R U2 R' F R U R' U' R' F' R2",
                "R' U2 R' D' R U' R' D R U R U' R' U' R",
                "L' U' L F L' U2 L U2 L F' U' L' U2 L"
            ]
        },
        T: {
            pattern: `  g* g r
o y y y b
r* y y y o*
o y y y g
  b b* r`,
            algs: [
                "R U R' U' R' F R2 U' R' U' R U R' F'"
            ]
        },
        E: {
            pattern: `  o* g r
b*{.25} y y y b
r* y y y r*
g y y y g*{.25}
  o b r*`,
            algs: [
                "x' L' U L D' L' U' L D L' U' L D' L' U L D",
                "x' R U' R' D R U R' D' R U R' D R U' R' D'"
            ]
        },
        Na: {
            pattern: `  g g b*
o y y y o
r* y y y o
r y y y r*
  g b b`,
            algs: [
                "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
                "z U R' D R2 U' R D' U R' D R2 U' R D'"
            ]
        },
        Nb: {
            pattern: `  b g* g
r y y y r*
r y y y o
o* y y y o
  b b* g`,
            algs: [
                "R' U R U' R' F' U' F R U R' F R' F' R U' R",
                "L' U' L U' L' U L F L' U' L U L F' L2 U L U2 L' U L",
                "z D' R U' R2 D R' U D' R U' R2 D R' U"
            ]
        },
        V: {
            pattern: `  b r g
r y y y r
o* y y y g
o* y y y o
  b* b* g`,
            algs: [
                "R' U R' U' y R' F' R2 U' R' U R' F R F",
                "R' U R' U' R D' R' D R' U D' R2 U' R2 D R2",
                "z D' R2 D R2 U R' D' R U' R U R' D R U' z'",
                "R U2 R' D R U' R U' R U R2 D R' U' R D2",
                "x' R' F R F' U R U2 R' U' R U' R' U2 R U R' U'"
            ]
        },
        H: {
            pattern: `  g b* g
o y y y r
r* y y y o*
o y y y r
  b g* b`,
            algs: [
                "M2 U M2 U2 M2 U M2",
                "M2 U' M2 U2 M2 U' M2"
            ]
        },
        Ua: {
            pattern: `  g g g
o y y y r
b* y y y o
o y y y r
  b r b`,
            algs: [
                "M2 U M U2 M' U M2",
                "R U' R U R U R U' R' U' R2",
                "y2 R2 U' R' U' R U R U R U' R"
            ]
        },
        Ub: {
            pattern: `  g g* g
o y y y r*
r* y y y b
o y y y r
  b o b`,
            algs: [
                "M2 U' M U2 M' U' M2",
                "R2 U R U R' U' R' U' R' U R'",
                "y2 R' U R' U' R' U' R' U R U R2",
                "y2 R' U R' U' R3 U' R' U R U R2"
            ]
        },
        Z: {
            pattern: `  r b r*
g* y y y b
o y y y r*
g y y y b
  o g* o`,
            algs: [
                "M' U M2 U M2 U M' U2 M2",
                "y M' U' M2 U' M2 U' M' U2 M2",
                "y M2 U M2 U M' U2 M2 U2 M'",
                "M2 U' M2 U' M' U2 M2 U2 M'"
            ]
        }
    },
    
    '2-Look PLL': {
        Diagonal: {
            pattern: `  b X g*
r y y y r
X y y y X*
o y y y o*
  b X g`,
            algs: [
                "F R U' R' U' R U R' F' R U R' U' R' F R F'",
                "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
                "R' U R U' R' F' U' F R U R' F R' F' R U' R",
                "L' U' L U' L' U L F L' U' L U L F' L2 U L U2 L' U L",
                "R' U R' U' y R' F' R2 U' R' U R' F R F",
                "x L2 D2 L' U' L D2 L' U L'",
                "x R2 D2 R U R' D2 R U' R"
            ]
        },
        Headlights: {
            pattern: `  g X r*
o y y y b
X y y y X*
o* y y y g
  b X* r`,
            algs: [
                "R U R' U' R' F R2 U' R' U' R U R' F'",
                "R U R' F' R U R' U' R' F R2 U' R'",
                "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
                "R U R' F' R U2 R' U2 R' F R U R U2 R'",
                "L' U' L F L' U2 L U2 L F' U' L' U2 L",
                "R2 U R' U R' U' R U' R2 U' D R' U R D'",
                "R' U' R U D' R2 U R' U R U' R U' R2 D",
                "R2 U' R U' R U R' U R2 U D' R U' R' D",
                "R U R' U' D R2 U' R U' R' U R' U R2 D'"
            ]
        },
        H: {
            pattern: `  g b* g
o y y y r
r y y y o*
o y y y r
  b g b`,
            algs: [
                "M2 U M2 U2 M2 U M2",
                "M2 U' M2 U2 M2 U' M2"
            ]
        },
        Ua: {
            pattern: `  g g g
o y y y r
b y y y o
o y y y r
  b r* b`,
            algs: [
                "R U' R U R U R U' R' U' R2",
                "M2 U M U2 M' U M2"
            ]
        },
        Ub: {
            pattern: `  g g g
o y y y r
r y y y b*
o y y y r
  b o b*`,
            algs: [
                "R2 U R U R' U' R' U' R' U R'",
                "L' U L' U' L' U' L' U L U L2",
                "M2 U' M U2 M' U' M2"
            ]
        },
        Z: {
            pattern: `  r b r
g y y y b*
o* y y y r
g y y y b
  o g o`,
            algs: [
                "M' U M2 U M2 U M' U2 M2",
                "M' U' M2 U' M2 U' M' U2 M2",
                "M2 U' M2 U' M' U2 M2 U2 M'"
            ]
        }
    }
}