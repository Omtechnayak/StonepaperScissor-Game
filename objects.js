let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll('.Choice');
const msgchng = document.querySelector(".msg");
const userupdatescr = document.querySelector("#user-score");
const compupdatescr = document.querySelector("#comp-score");
const bodyclr = document.querySelector("body");

 const winnershow = (userwin,user_choice,comp_choice) =>{
    if (userwin == true){
        userscore++;
        userupdatescr.innerText =userscore;

        console.log("You Won yaa hooo");
        msgchng.innerText = `You Won yahoo!!!\n ${user_choice} Beats ${comp_choice}`;
        msgchng.style.marginRight = "10%";
        msgchng.style.width ="350px";
        msgchng.style.height ="80px";
        msgchng.style.fontSize ="30px";
        msgchng.style.backgroundColor ="green";
        bodyclr.style.backgroundColor ="pink";

        

    }else{
        compscore++;
        compupdatescr.innerText = compscore;

        console.log("You lost try again ....");
        msgchng.innerText = `You lose the game ${comp_choice}\n Beats ${user_choice}`;
        msgchng.style.fontSize ="30px";
        msgchng.style.width ="350px";
        msgchng.style.height ="80px";
        msgchng.style.marginRight = "10%";
        msgchng.style.backgroundColor ="red";
        bodyclr.style.backgroundColor ="#8d8585";
        
        
    };

 };


const compgen = () =>{
 let arr = ['stone','paper','scissor'];
    const computer_choice = Math.floor(Math.random()*3);
    return arr[computer_choice];
};

const playgame = (user_choice) =>{
    user_choice = user_choice.toLowerCase();
    console.log("user choice is =",user_choice);
    const comp_choice = compgen();
    console.log("computer choice is =",comp_choice);

    if (user_choice == comp_choice){
        console.log("Match is Draw !opps");
        msgchng.innerText = "Match is Draw..Try again";
        msgchng.style.fontSize ="30px";
        msgchng.style.width ="400px";
        msgchng.style.height ="50px";
        msgchng.style.marginRight = "5px";
        msgchng.style.backgroundColor ="blue";
        bodyclr.style.backgroundColor ="#92a2db";
    }else{
        let userwin = true;
        if (user_choice == "stone"){
            userwin = comp_choice == "paper" ? false:true;
        }else if(user_choice == "scissor"){
            userwin = comp_choice == "paper"? false:true;
        }else if (user_choice == "scissor"){
            userwin = comp_choice == "stone"? false:true;
        }
        winnershow(userwin,user_choice,comp_choice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");

        playgame(user_choice);
    });
});
