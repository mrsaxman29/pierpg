const button = document.getElementById("button1");
const user_input = document.getElementById("input");
const span = document.getElementById("storyspan");
const page = document.getElementById("page")
var game_state = 'commands';

const world = {};
const directs = ["N", "S", "E", "W"];
const count = 0;


const nobody_msg = "THERE ISNT ANYONE EHRE";



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
  };

  talk(npc_object) {
    let name = npc_object.name;
    console.log("Do you need any help?\n");

    if (name == "sir"){
      let npc_response = choose(scam_list);
      const new_div = document.createElement("div");
      const new_cont = document.createTextNode(npc_response);
      new_div.appendChild(new_cont);
      page.appendChild(new_div);
    }
    else if (name == "charles"){
      let npc_response = choose(charles_questions);
      const new_div = document.createElement("div");
      const new_cont = document.createTextNode(npc_response);
      new_div.appendChild(new_cont);
      page.appendChild(new_div);
    }
    else if (name == "nathalie"){
      let npc_response = choose(nathalie_questions);
      const new_div = document.createElement("div");
      const new_cont = document.createTextNode(npc_response);
      new_div.appendChild(new_cont);
      page.appendChild(new_div);
    }
    else{
      let npc_response = choose(question_list);
      const new_div = document.createElement("div");
      const new_cont = document.createTextNode(npc_response);
      new_div.appendChild(new_cont);
      page.appendChild(new_div);
    };

    // handle typinmg reponse here
    
    
  };

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
    //console.log(item.desc);
    let person = location.people;
    //console.log(person);
    let exits = location.exits;
    let exits_list = "You see exits to the ";
    for (ex in exits){
        exits_list += ex;
        exits_list += " ";  //do better here
    };

    console.log(exits_list);
    

    const new_div = document.createElement("div");
    const new_cont = document.createTextNode('');
    new_div.appendChild(new_cont);
    //new_div.style.backgroundColor="purple";
    page.appendChild(new_div);
    var msg1 =location.desc;



    if (person !== null){
        var msg2 = "Here with you, you see " + person.desc + "\r\n...";
        const new_div = document.createElement("div");
        const new_cont = document.createTextNode('');
        new_div.appendChild(new_cont);
        page.appendChild(new_div);
        

        
    }else{msg2=' '};

    if (item !== null){
        var msg3 = "You See... \r\n\n" + item.desc + "\r\n...";
        const new_div = document.createElement("div");
        const new_cont = document.createTextNode('');
        new_div.appendChild(new_cont);
        page.appendChild(new_div);
    };

    const new_div2 = document.createElement("div");
    const new_cont2 = document.createTextNode("");
    new_div2.appendChild(new_cont2);
    page.appendChild(new_div2);

    var full_msg = msg1+msg2+msg3;

    typeWriterEffect(new_div, full_msg);

    new_div2.appendChild(document.createElement("br"));

    setTimeout(typeWriterEffect, 2500, new_div2, exits_list);







};

document.addEventListener("keydown", function(event){
    if (event.key==="Enter"){

        event.preventDefault();
        display_input();

        if(game_state == "commands"){
          check_command(user_input.value);
          user_input.value="";
          page.scrollTo(0, page.scrollHeight);
        }
        else{
          check_response(user_input.value);
        };
    };
});

function check_response(text_input){
  console.log("Checking Answer to Question");
  let words = text_input.split(' ');
  console.log(words);
  words.forEach((word) => {
    console.log(word);
    if (badwords.includes(word)){
      console.log('BBBABDBBBABDBABDBADBADBBB   BREAK HERE')
    };
  });

  user_input.value='';

  game_state = "commands";

};

function typeWriterEffect(element, text) {
  const div = element;
  let i = 0;
  const timer = setInterval(() => {
    div.innerHTML += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(timer);
    }
  }, 10); // Change this value to control the speed of typing
}


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
        if (world[phil.room].items == null){
            const new_div = document.createElement("div");
            const new_cont = document.createTextNode("There's nothing to pickup here");
            new_div.appendChild(new_cont);
            page.appendChild(new_div);

        }
        else if(phil.inventory.length == 0){
            phil.inventory.push(world[phil.room].items);
            console.log(phil.inventory[0].desc);
            world[phil.room].items = null;
            console.log(world[phil.room].items);
            //phil.inventory[0].desc
            const new_div = document.createElement("div");
            const new_cont = document.createTextNode("You picked up a " + phil.inventory[0].name);
            new_div.appendChild(new_cont);
            page.appendChild(new_div);

        }
        else{
            phil.inventory.push(world[phil.room].items);
            console.log(phil.inventory[0].desc);
            console.log(phil.inventory[1].desc);
            world[phil.room].items = phil.inventory[0];
            console.log(world[phil.room].items);
            phil.inventory.splice(0,1);
            const new_div = document.createElement("div");
            const new_cont = document.createTextNode("You picked up a " + phil.inventory[0].name);
            new_div.appendChild(new_cont);
            page.appendChild(new_div);

        };
    }
    if(content.toUpperCase() === 'U'){
        console.log("U WAS PRESSSED")

        if (phil.inventory.length == 0){
            const new_div = document.createElement("div");
            const new_cont = document.createTextNode("You have nothing to use");
            new_div.appendChild(new_cont);
            page.appendChild(new_div);

        }
        else{
            if(phil.inventory[0].ready == true){
                phil.score += phil.inventory[0].value;
                console.log(phil.score);
                const new_div = document.createElement("div");
                const new_cont = document.createTextNode("You used the " + phil.inventory[0].name + ". Your score is now " + phil.score);
                new_div.appendChild(new_cont);
                page.appendChild(new_div);
                phil.inventory[0].ready = false;
                }
            else{
                const new_div = document.createElement("div");
                const new_cont = document.createTextNode("Youu just used that. Try something else...");
                new_div.appendChild(new_cont);
                page.appendChild(new_div);

            };


        };
        



    }
    if(content.toUpperCase() === 'I'){
        console.log("I WAS PRESSSED")
        if(phil.inventory.length == 0){
            const new_div = document.createElement("div");
            const new_cont = document.createTextNode("You aren't holding anything");
            new_div.appendChild(new_cont);
            page.appendChild(new_div);

        }
        else{
            const new_div = document.createElement("div");
            const new_cont = document.createTextNode("You're holding " + phil.inventory[0].desc);
            new_div.appendChild(new_cont);
            page.appendChild(new_div);

        }
    }
    if(content.toUpperCase() === 'T'){
        console.log("T WAS PRESSSED")
        if(world[phil.room].people == null){
          const msg = "THIS SHOULD BE TYPED";
          var passed_msg = '';
          var new_div = document.createElement("div");
          const new_cont = document.createTextNode("...");
          new_div.appendChild(new_cont);
          page.appendChild(new_div);

          typeWriterEffect(new_div, msg);
          
          
        }
        else{
          phil.talk(world[phil.room].people);
          console.log("SOMEONE IS HERE TO TALK TO");
          game_state = "talking";
          
        };

    }
    if(content.toUpperCase() === 'N' || content.toUpperCase() === 'S' 
    || content.toUpperCase() === 'E' || content.toUpperCase() === 'W'){
        console.log('A MOVE WAS MADE TO THE ' + content.toUpperCase());
        let doors = world[phil.room].exits;
        if (content.toUpperCase() in doors){
            console.log("WE CAN GOOOOOOO");
            phil.move(content.toUpperCase());
            phil.room = phil.destination;
            console.log(phil.room);
            display_room_info();
        } 
        else {
            const new_div = document.createElement("div");
            const new_cont = document.createTextNode("You can't go that direction");
            new_div.appendChild(new_cont);
            page.appendChild(new_div);



        }


        

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

const question_list = ["Do you have orange wine?", "Do you have AIR Vodka?", "Do you have this chilled?", "Can I please use your bathroom?", "Can I get what I had last time?", "I had a wine on vacation six years ago in Malta that started with a P. Do you know what I'm talking about?", "Is this dry?", "What time do you close?", "Can I get a discount?", "Do you sell beer?"]
const scam_list = ["Yo. Do you have Henny?", "What's up boss.  Do you guys have large Patron?", "Ey Pa.  You guys have Ciroc?", "Yo my man, do you take Kinch?"]
const nathalie_questions = ["Have you seen my vape pen?", "Can I ask you some questions for my project?", "Did you see that episode of 90 Day Fiance with Eric-ie?  He's my favorite.", "I forget my keys...", "Where's Danny"]
const charles_questions = ["How much money is in the safe?", "Do we have any good Amarones?", "What are you doing later for dinner?", "I love Trump. I think he owns the Fed; that little fa&!@t Bernake isn't s*$^."]



rooms.forEach(element => {
    console.log(element.name);
    Object.defineProperty(world, element.name, {value: element});
    console.log(world);
    
});

const new_div3 = document.createElement("div");
const new_cont3 = document.createTextNode("You work at a local wine shop. Explore the store...(l)ook around (p)ick up (u)se (i)nventory (t)alk (n)orth (s)outh (e)ast (w)est:  ");
new_div3.appendChild(new_cont3);
page.appendChild(new_div3);



/// Display Txt : commands each time at end of print
/// exits (or text after with commands neeeds to scroll dowen to bottom)
/// inverntory I is typewritter 
/// make npcs move around after a certain number of turns 
/// fix talk function
/// write better dialogue 
///