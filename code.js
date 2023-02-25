const button = document.getElementById("button1");
const user_input = document.getElementById("input");
const span = document.getElementById("storyspan");
const page = document.getElementById("page")
const game_state = '';


button.addEventListener("click", function(){

    const new_div = document.createElement("div");
    const new_cont = document.createTextNode(user_input.value)
    new_div.appendChild(new_cont)
    page.appendChild(new_div);
    user_input.value=""
    page.scrollTo(0, page.scrollHeight);

});

document.addEventListener("keydown", function(event){
    if (event.key==="Enter"){

        event.preventDefault();
        const new_div = document.createElement("div");
        const new_cont = document.createTextNode(user_input.value);
        new_div.appendChild(new_cont);
        page.appendChild(new_div);
        check_command(user_input.value);
        user_input.value="";
        page.scrollTo(0, page.scrollHeight);

    }

});


function check_command(content){
    const xxx = content;

    console.log("check command")
    if (content === "yo"){
        console.log('YO WAS SAID');
        console.log(pyscript.runtime.globals.get('phil').desc);
    }
    if(content.toUpperCase() === 'L'){
        console.log("L WAS PRESSSED")
        var phil = pyscript.runtime.globals.get('phil')
        var world = pyscript.runtime.globals.get('world');
        console.log(phil.room);
        //console.log(pyscript.runtime.globals.get('world'));
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
        console.log('A MOVE WAS MADE' + xxx );
    }

};