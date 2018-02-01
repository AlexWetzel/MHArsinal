const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/MonHunDB",
  {
    useMongoClient: true
  }
);

  // weapon: { type: String, required: true},
  // moveID: { type: String, required: true},
  // name: { type: String, required: true},
  // description: { type: String},
  // cancels: [{
  //   moveID: {type: String},
  //   input: {type: String}
  // }]

const movelistSeed = [
  {
    moveID: "CB00",
    name: "Neutral Stance (Sheathe Weapon)",
    description:
      "In this state, you are able to move freely and use/gather items.",
    cancels: [
      {
        moveID: "CB01",
        input: "triangle"
      },
      {
        moveID: "CB02",
        input: "fwd-plus-triangle"
      },
      {
        moveID: "CB03",
        input: "R2"
      }
    ]
  },
  {
    moveID: "CB01",
    name: "Draw Weapon",
    description:
      "Draw your weapon into a neutral stance without attacking.",
    cancels: [
      {
        moveID: "CB04",
        input: "triangle"
      },
      // {
      //   moveID: "CB07",
      //   input: "circle"
      // },
      {
        moveID: "CB08",
        input: "hold circle"
      },
      {
        moveID: "CB10",
        input: "triangle-plus-circle"
      },
      {
        moveID: "CB11",
        input: "R2-plus-circle"
      },
      {
        moveID: "CB14",
        input: "R2-plus-triangle"
      }
    ]
  },
  {
    moveID: "CB02",
    name: "Sword: Forward Slash",
    description:
      "Draw your weapon into a sword slash, acting as the first hit in a basic combo.",
    cancels: [
      {
        moveID: "CB05",
        input: "triangle"
      },
      // {
      //   moveID: "CB07",
      //   input: "circle"
      // },
      {
        moveID: "CB08",
        input: "hold circle"
      },
      {
        moveID: "CB09",
        input: "triangle-plus-circle"
      },
      {
        moveID: "CB11",
        input: "R2-plus-circle"
      },
      {
        moveID: "CB14",
        input: "R2-plus-triangle"
      },
      {
        moveID: "CB23",
        input: "dir-plus-circle"
      }
    ]
  },
  {
    moveID: "CB03",
    name: "Axe: Smash",
    description:
      "Draw your weapon into axe mode. The beginning of the attack acts as a guard.",
    cancels: [
      {
        moveID: "CB16",
        input: "triangle"
      },
      {
        moveID: "CB19",
        input: "triangle"
      },
      {
        moveID: "CB20",
        input: "triangle-plus-circle"
      },
      // SAED, need to implement properly
      // {
      //   moveID: "CB21",
      //   input: "triangle-plus-circle"
      // },
      {
        moveID: "CB22",
        input: "R2"
      }
    ]
  },
  {
    moveID: "CB04",
    name: "Sword: Weak Slash",
    description:
      "A forward slash. First hit in a basic, 3-hit combo.",
    cancels: [
      {
        moveID: "CB05",
        input: "triangle"
      },
      // {
      //   moveID: "CB07",
      //   input: "circle"
      // },
      {
        moveID: "CB08",
        input: "hold circle"
      },
      {
        moveID: "CB09",
        input: "triangle-plus-circle"
      },
      {
        moveID: "CB11",
        input: "R2-plus-circle"
      },
      {
        moveID: "CB14",
        input: "R2-plus-triangle"
      },
      {
        moveID: "CB23",
        input: "dir-plus-circle"
      }
    ]
  },
  {
    moveID: "CB05",
    name: "Sword: Return Stroke",
    description:
      "A backward-moving slash. Second hit in a basic, 3-hit combo.",
    cancels: [
      {
        moveID: "CB06",
        input: "triangle"
      },
      // {
      //   moveID: "CB07",
      //   input: "circle"
      // },
      {
        moveID: "CB08",
        input: "hold circle"
      },
      {
        moveID: "CB09",
        input: "triangle-plus-circle"
      },
      {
        moveID: "CB11",
        input: "R2-plus-circle"
      },
      {
        moveID: "CB14",
        input: "R2-plus-triangle"
      },
      {
        moveID: "CB23",
        input: "dir-plus-circle"
      }
    ]
  },
  {
    moveID: "CB06",
    name: "Sword: Spinning Slash",
    description:
      "A counter-clockwise spin ending in a strong slash. The shield will block attacks while you swing the sword.",
    cancels: [
      // {
      //   moveID: "CB07",
      //   input: "circle"
      // },
      {
        moveID: "CB08",
        input: "hold circle"
      },
      {
        moveID: "CB09",
        input: "triangle-plus-circle"
      },
      {
        moveID: "CB11",
        input: "R2-plus-circle"
      },
      {
        moveID: "CB14",
        input: "R2-plus-triangle"
      },
      {
        moveID: "CB23",
        input: "dir-plus-circle"
      }
    ]
  },
  {
    moveID: "CB07",
    name: "Sword: Charged Rising Slash",
    description:
      "An upward sword slash. An incorrectly timed sword charge will result in this move. Release the button when the sword is behind your back",
    cancels: [
      {
        moveID: "CB06",
        input: "triangle"
      },
      {
        moveID: "CB09",
        input: "triangle-plus-circle"
      },
      {
        moveID: "CB11",
        input: "R2-plus-circle"
      },
      {
        moveID: "CB14",
        input: "R2-plus-triangle"
      },
      {
        moveID: "CB23",
        input: "dir-plus-circle"
      }
    ]
  },
  {
    moveID: "CB08",
    name: "Sword: Charged Double Slash",
    description:
      "Strong upward and downward sword slashes. A powerful move that charges phials well.",
    cancels: [
      {
        moveID: "CB06",
        input: "triangle"
      },
      {
        moveID: "CB09",
        input: "triangle-plus-circle"
      },
      {
        moveID: "CB11",
        input: "R2-plus-circle"
      },
      {
        moveID: "CB14",
        input: "R2-plus-triangle"
      },
      {
        moveID: "CB23",
        input: "dir-plus-circle"
      }
    ]
  },
  {
    moveID: "CB09",
    name: "Sword: Shield thrust",
    description:
      "Thrust the shield forward, dealing 2 hits.",
    cancels: [
      {
        moveID: "CB04",
        input: "triangle"
      },
      // {
      //   moveID: "CB07",
      //   input: "circle"
      // },
      {
        moveID: "CB08",
        input: "hold circle"
      }, 
      {
        moveID: "CB011",
        input: "R2-plus-circle"
      }, 
      {
        moveID: "CB14",
        input: "R2-plus-triangle"
      },
      {
        moveID: "CB20",
        input: "triangle-plus-circle"
      },
      // SAED, need to implement properly
      // {
      //   moveID: "CB21",
      //   input: "triangle-plus-circle"
      // },
      {
        moveID: "CB23",
        input: "dir-plus-circle"
      }   
    ]
  },
  {
    moveID: "CB10",
    name: "Sword: Forward Slash",
    description:
      "A forward moving slash that can substitute the fist hit in a basic combo.",
    cancels: [
      {
        moveID: "CB05",
        input: "triangle"
      },
      // {
      //   moveID: "CB07",
      //   input: "circle"
      // },
      {
        moveID: "CB08",
        input: "hold circle"
      },
      {
        moveID: "CB09",
        input: "triangle-plus-circle"
      },
      {
        moveID: "CB11",
        input: "R2-plus-circle"
      },
      {
        moveID: "CB14",
        input: "R2-plus-triangle"
      },
      {
        moveID: "CB23",
        input: "dir-plus-circle"
      }
    ]
  },
  {
    moveID: "CB11",
    name: "Sword: Charge Phials",
    description:
      "Load the phial charge into your shield. Yellow charge loads 3 phials, and red charge loads 5. If phial charge is too low, no phials are charged, and the animation is longer.",
    cancels: [
      {
        moveID: "CB09",
        input: "triangle-plus-circle"
      },
      // {
      //   moveID: "CB12",
      //   input: "triangle"
      // },
      {
        moveID: "CB13",
        input: "hold triangle"
      },
      {
        moveID: "CB18",
        input: "circle"
      }
    ]
  },
  {
    moveID: "CB12",
    name: "Sword: Return Stroke",
    description:
      "After a phial load, remove the sword in a slashing motion.",
    cancels: [
      {
        moveID: "CB06",
        input: "triangle"
      },
      // {
      //   moveID: "CB07",
      //   input: "circle"
      // },
      {
        moveID: "CB08",
        input: "hold circle"
      },
      {
        moveID: "CB09",
        input: "triangle-plus-circle"
      },
      {
        moveID: "CB11",
        input: "R2-plus-circle"
      },
      {
        moveID: "CB14",
        input: "R2-plus-triangle"
      },
      {
        moveID: "CB23",
        input: "dir-plus-circle"
      }
    ]
  },
  {
    moveID: "CB13",
    name: "Sword: Condensed elemental slash",
    description:
      "After a phial load, charge the sword in the shield, and release as the shield clamps down on the sword to do a powerful slash. If the shield has been charged with phial energy, the attack becomes much stronger. Furthermore, the sword will gain the weapon's phial effect, and wil no longer bounce as long as the buff is active.",
    cancels: [
      {
        moveID: "CB06",
        input: "triangle"
      },
      // {
      //   moveID: "CB07",
      //   input: "circle"
      // },
      {
        moveID: "CB08",
        input: "hold circle"
      },
      {
        moveID: "CB09",
        input: "triangle-plus-circle"
      },
      {
        moveID: "CB11",
        input: "R2-plus-circle"
      },
      {
        moveID: "CB14",
        input: "R2-plus-triangle"
      },
      {
        moveID: "CB23",
        input: "dir-plus-circle"
      }
    ]
  },
  {
    moveID: "CB14",
    name: "Sword: Morph Slash",
    description:
      "Insert the sword into your shield, transitioning into an overhead slash.",
    cancels: [
      {
        moveID: "CB16",
        input: "triangle"
      },
      {
        moveID: "CB19",
        input: "triangle"
      },
      {
        moveID: "CB20",
        input: "triangle-plus-circle"
      },
      // SAED, need to implement properly
      // {
      //   moveID: "CB21",
      //   input: "triangle-plus-circle"
      // },
      {
        moveID: "CB22",
        input: "R2"
      }
    ]
  },
  {
    moveID: "CB15",
    name: "Axe: Dash Slam",
    description:
      "Run forward, swinging your axe down.",
    cancels: [
      {
        moveID: "CB16",
        input: "triangle"
      },
      {
        moveID: "CB19",
        input: "circle"
      },
      {
        moveID: "CB22",
        input: "R2"
      }
    ]
  },
  {
    moveID: "CB16",
    name: "Axe: Rising Slash",
    description:
      "Swing your axe in an upward motion above your head.",
    cancels: [
      {
        moveID: "CB17",
        input: "triangle"
      },
      {
        moveID: "CB19",
        input: "circle"
      },
      {
        moveID: "CB22",
        input: "R2"
      }
    ]
  },
  {
    moveID: "CB17",
    name: "Axe: Overhead Slash",
    description:
      "Swing your axe downward vertically.",
    cancels: [
      {
        moveID: "CB15",
        input: "fwd-plus-triangle"
      },
      {
        moveID: "CB18",
        input: "circle"
      },
      {
        moveID: "CB22",
        input: "R2"
      }
    ]
  },
  {
    moveID: "CB18",
    name: "Axe: Elemental Discharge I",
    description:
      "A quick horizontal axe swing. With loaded phials, deals extra damage and one phial explosion on impact. Costs 1 phial.",
    cancels: [
      {
        moveID: "CB16",
        input: "triangle"
      },
      {
        moveID: "CB19",
        input: "circle"
      },
      {
        moveID: "CB20",
        input: "triangle-plus-circle"
      },
      // SAED, need to implement properly
      // {
      //   moveID: "CB21",
      //   input: "triangle-plus-circle"
      // },
      {
        moveID: "CB22",
        input: "R2"
      }
    ]
  },
  {
    moveID: "CB19",
    name: "Axe: Elemental Discharge II",
    description:
      "An overhead double axe swing. With loaded phials, deals extra damage and does one phial explosion for each impact. Costs 1 phial.",
    cancels: [
      {
        moveID: "CB16",
        input: "triangle"
      },
      {
        moveID: "CB20",
        input: "circle"
      },
      // SAED, need to implement properly
      // {
      //   moveID: "CB21",
      //   input: "circle"
      // },
      {
        moveID: "CB22",
        input: "R2"
      }
    ]
  },
  {
    moveID: "CB20",
    name: "Axe: Amped Element Disharge",
    description:
      "A strong overhead downward chop. With loaded phials, deals extra damage and three phial explosions on impact. Costs 1 phial. Transforms into sword mode.",
    cancels: [
      // Roll cancel
      {
        moveID: "CB01",
        input: ""
      }
    ]
  },
  {
    moveID: "CB21",
    name: "Axe: Super Amped Element Disharge",
    description:
      "A strong overhead downward chop. With loaded phials, deals extra damage and three phial explosions on impact. Costs 1 phial. Transforms into sword mode.",
    cancels: [
      // Roll cancel
      {
        moveID: "CB01",
        input: ""
      }
    ]
  },
  {
    moveID: "CB22",
    name: "Axe: Morph Slash",
    description:
      "Split the axe in a spinning motion ending in a slash.",
    cancels: [
      {
        moveID: "CB04",
        input: "triangle"
      },
      // {
      //   moveID: "CB07",
      //   input: "circle"
      // },
      {
        moveID: "CB08",
        input: "hold circle"
      },
      {
        moveID: "CB09",
        input: "triangle-plus-circle"
      },
      {
        moveID: "CB11",
        input: "R2-plus-circle"
      },
      {
        moveID: "CB14",
        input: "R2-plus-triangle"
      },
      {
        moveID: "CB23",
        input: "dir-plus-circle"
      }
    ]
  },
  {
    moveID: "CB23",
    name: "Sword: Sliding Slash",
    description:
      "An evasive slide ending in a spinning slash.",
    cancels: [
    // Check to see if the sword combo can be cancled into
      // {
      //   moveID: "CB07",
      //   input: "circle"
      // },
      {
        moveID: "CB08",
        input: "hold circle"
      },
      {
        moveID: "CB09",
        input: "triangle-plus-circle"
      },
      {
        moveID: "CB11",
        input: "R2-plus-circle"
      },
      {
        moveID: "CB14",
        input: "R2-plus-triangle"
      }
    ]
  },

];

db.Movelist
  .remove({})
  .then(() => db.Movelist.collection.insertMany(movelistSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });