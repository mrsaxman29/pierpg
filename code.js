const button = document.getElementById("button1");
const user_input = document.getElementById("input");
const span = document.getElementById("storyspan");
const page = document.getElementById("page")
const game_state = '';

const world = {};
const directs = ["N", "S", "E", "W"];
const count = 0;


console.log("PRRRRIIIII");

class Item {
    constructor(name, desc, value) {
      this.name = name;
      this.desc = desc;
      this.value = value;
      this.ready = true;
    }
  
    toString() {
      return this.desc;
    }
  
    use() {
      const eee = phil.inventory[0];
      if (eee.ready) {
        console.log(`You used the ${this.name}.`);
        console.log("\n\x1b[32m", `You're score increased by ${this.value}`, "\n");
        phil.score += this.value;
        const score = phil.score;
        console.log(`You have ${score} points`);
        this.ready = false;
        console.log("\x1b[0m");
        //playsound("bell.mp3");
      } else {
        console.log("\nYou just did that. Why not do something else?");
        //playsound("badbell.mp3");
      }
    }
  };

class Room {
  constructor(name, desc, items, exits, people, list) {
    this.name = name;
    this.desc = desc;
    this.items = items;
    this.exits = exits;
    this.people = people;
    this.list = list;
  }

  toString() {
    return this.desc;
  }
};
  
class Player {
  constructor(name, desc, room) {
    this.name = name;
    this.desc = desc;
    this.maxscore = 100;
    this.score = 0;
    this.chat = 10;
    this.inventory = [];
    this.room = room;
  }

  move(dirr) {
    console.log("MOVE FUNCTION");
    //this.direction = dirr;
    let outs = world[phil.room].exits;
    this.destination = outs[dirr];
  }

  question() {
    if (world[phil.room].people.name == "sir") {
      let ww = random.choice(scam_list);
      console.log("\n" + ww + "\n");
    } else if (world[phil.room].people.name == "nathalie") {
      let ww = random.choice(nathalie_questions);
      console.log("\n" + ww + "\n");
    } else if (world[phil.room].people.name == "charles") {
      let ww = random.choice(charles_questions);
      console.log("\n" + ww + "\n");
    } else {
      let oo = random.choice(question_list);
      console.log("\n" + oo + "\n");
    }
  }

  talk(name) {
    this.name = name;
    console.log("Do you need any help?\n");
    let gg = world[phil.room].people;
    gg.question();
    console.log();
    let ll = prompt("type your response:");
    let pp = ll.split(" ");
    if (pp.some((item) => content.includes(item))) {
      console.log("What did you just say to me!?");
      console.log("\n~They look pissed~\n");
      phil.score -= 10;
      console.log("Your score is: " + phil.score);
      
      
    } else {
      console.log("~They look pleased with you and say 'Thanks'\n");
      phil.score += 15;
      let yyy = phil.score;
      console.log(
        "Your score has increased by 15 points! \n Your score is: " + yyy
      );
    }
  }

  toString() {
    return this.desc;
  }
};

button.addEventListener("click", function(){

    const new_div = document.createElement("div");
    const new_cont = document.createTextNode(user_input.value)
    new_div.appendChild(new_cont)
    page.appendChild(new_div);
    user_input.value=""
    page.scrollTo(0, page.scrollHeight);

});

function display_input(){

    const new_div = document.createElement("div");
    const new_cont = document.createTextNode(user_input.value);
    new_div.appendChild(new_cont);
    page.appendChild(new_div);
};

function display_room_info(){

    let here = phil.room;
    let location = world[here];
    let item = location.items;
    console.log(item.desc);
    let person = location.people;
    console.log(person);
    let exits = location.exits;
    let exits_list = "You see exits to the ";
    for (ex in exits){
        exits_list += ex;
        exits_list += " ";  //do better here
    };

    console.log(exits_list);
    

    const new_div = document.createElement("div");
    const new_cont = document.createTextNode(location.desc);
    new_div.appendChild(new_cont);
    page.appendChild(new_div);



    if (person !== null){
        const new_div = document.createElement("div");
        const new_cont = document.createTextNode("Here with you, you see " + person.desc);
        new_div.appendChild(new_cont);
        page.appendChild(new_div);
        
    }

    if (item !== null){

        const new_div = document.createElement("div");
        const new_cont = document.createTextNode("You See... " + item.desc);
        new_div.appendChild(new_cont);
        page.appendChild(new_div);
    };

    const new_div2 = document.createElement("div");
    const new_cont2 = document.createTextNode(exits_list);
    new_div2.appendChild(new_cont2);
    page.appendChild(new_div2);






};

document.addEventListener("keydown", function(event){
    if (event.key==="Enter"){

        event.preventDefault();
        display_input();
        check_command(user_input.value);
        user_input.value="";
        page.scrollTo(0, page.scrollHeight);
        
        //console.log(world);

    }
});


function check_command(content){
    

    console.log("check command");

    if(content.toUpperCase() === 'L'){
        console.log("L WAS PRESSSED");
        
        console.log(world[phil.room].desc);
        console.log("LOOK OVER")

        display_room_info();

        
    }
    if(content.toUpperCase() === 'P'){
        console.log("P WAS PRESSSED")
    }
    if(content.toUpperCase() === 'U'){
        console.log("U WAS PRESSSED")
    }
    if(content.toUpperCase() === 'I'){
        console.log("I WAS PRESSSED")
    }
    if(content.toUpperCase() === 'T'){
        console.log("T WAS PRESSSED")
    }
    if(content.toUpperCase() === 'N' || content.toUpperCase() === 'S' 
    || content.toUpperCase() === 'E' || content.toUpperCase() === 'W'){
        console.log('A MOVE WAS MADE TO THE ' + content.toUpperCase());
        phil.move(content.toUpperCase());
        console.log(phil.destination);
        phil.room = phil.destination;
        console.log(phil.room);
    }

};

function choose (array){
    var arr_length = array.length;
    var rand = Math.random();
    var index = Math.floor(rand * arr_length);
    var selection = array[index];
    console.log(selection);
    return selection;
}

function initialize_players(){ //make this set random rooms for npcs & maybe set may to have correct location data for p[layers]
    console.log("init player location...")
};

function check_doors(){
    console.log("dooor checking...");
};


// more variable declirations

var phil = new Player("Phil", "A friendly employee and fiance.", "stockroom");
const sir = new Player("sir", "A young buck with shiffty eyes.", "street")
const customer = new Player("Robbin", "Robbin Ross: a grey streaked bougie white mom.", "store")
const customer2 = new Player("Mr. Ortega", "Mr. Ortega: a large man with questionable employment.", "nowhere1")
const charles = new Player("Charles Henery Starke II", "A top heavy doctor with hair that's never the same color as yesterday. He co-owns Pier Wines and pops in usually when he needs booze.", "nowhere3" )
const nick = new Player("nick", "A young sales rep from Long Island", "nowhere4")
const mark = new Player("mark", "Mark's last name is still unknown after a decade but it definitley ends in a vowel. Mark is a goomba and is the 'mayor' of Williamsburg. If you need something, Mark's got it.", "nowhere5")
const nathalie = new Player("nathalie", "A cute asian-australian girl with high waisted pants is on her computer doing homework.","intro" )
const ghost = new Player("No one is here.", "No one is here", "")


// world

const broom = new Item("broom", "A Broom: A long pole with bristles at one end used for sweeping the floor.", 10)
const mop = new Item("mop", "A Mop: A long plastic pole with a frayed head at the bottom used for cleaning the floor", 15)
const package = new Item("package", "A small brown box addressed to Amanda Roberts", 5)
const wallet = new Item("wallet", "A blue leather wallet with smooth finish. Inside are credit cards with the name Robin Ross", 5)
const chairs = new Item("chairs", "Two metal planked chairs.", 5)
const glasses = new Item("glasses", "Various glass ware of questionable size, shape and condition.", 10)
const bottles = new Item("bottles", "Shiny glass wine bottles of assorted juices.", 5)

const intro = new Room("intro", "Press ENTER to start the game", null, {}, null, []);
const bodega = new Room("bodega", "Inside the bodega there are random snacks, drinks and other products everywhere.", null, {"W": "street"}, null, []);
const stockroom = new Room("stockroom", "You're in the STOCK ROOM. It's filled with various boxes and supplies for the store.", broom, {"E": "bathroom", "W": "desk"}, null, []);
const bathroom = new Room("bathroom", "You are in a small BATHROOM with poorly painted white walls", mop, {"W": "stockroom"}, null, []);
const desk = new Room("desk", "You see a DESK, some corkboards, a filing cabinet and chairs", package, {"E": "stockroom", "N": "register"}, null, []);
const register = new Room("register", "An L-shaped counter with cash drawer, credit card machine and monitor is in front of you", wallet, {"E": "store", "S": "desk", "N": "door"}, null, []);
const door = new Room("door", "A glass door", null, {"N": "street", "S": "store"}, null, []);
const street = new Room("street", "The sidewalk in front of the store is covered by a black awning. \nThere is smeared dog poop on the sidewalk not far away.", chairs, {"S": "door", "E": "bodega"}, sir, []);
const store = new Room("store", "The main selling floor is covered by bins filled with wine. \nAlong the wall shelves with neatly stacked bottles cover the far side of the store.", bottles, {"S": "bar", "W": "register", "N": "door"}, customer, []);
const bar = new Room("bar", "A high counter covered in aluminium abutting a purple wall with port hole windows is across the room from the door.  \nBlack letter blocks with silver letters spell out PIER WINES", glasses, {"N": "store", "W": "desk"}, null, []);

const rooms = [intro, bodega, stockroom, bathroom, desk, register, door, street, store, bar];



rooms.forEach(element => {
    console.log(element.name);
    
    Object.defineProperty(world, element.name, {value: element});
    console.log(world);

    
});

