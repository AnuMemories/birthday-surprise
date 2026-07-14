function showLetter(){

document.getElementById("letterBtn").style.display="none";

const box=document.getElementById("letterBox");
const typing=document.getElementById("typing");

box.style.display="block";

const text=`Dear Anamika ❤️

Today is your special day.

I wish you endless happiness, good health and beautiful moments.

May every dream of yours come true.

Keep smiling because your smile is truly precious.

Happy Birthday once again... 🎂✨

— Ashik ❤️`;

let i=0;

typing.innerHTML="";

const timer=setInterval(()=>{

typing.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

document.getElementById("nextMemoryBtn").style.display="block";

}

},40);

}
