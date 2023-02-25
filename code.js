const button = document.getElementById("button1");
const user_input = document.getElementById("input");
const span = document.getElementById("storyspan");
const page = document.getElementById("page")

button.addEventListener("click", function(){
    
    

    const new_div = document.createElement("div");
    const new_cont = document.createTextNode(user_input.value)
    new_div.appendChild(new_cont)
    page.appendChild(new_div);

    user_input.value=""

});

document.addEventListener("keydown", function(event){
    if (event.key==="Enter"){
        event.preventDefault();
        const new_div = document.createElement("div");
        const new_cont = document.createTextNode(user_input.value)
        new_div.appendChild(new_cont)
        page.appendChild(new_div);

        user_input.value="";
        page.scrollTo(0, page.scrollHeight);


    }

});
