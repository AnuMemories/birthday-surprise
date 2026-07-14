let attempts = 0;

const correctPassword = "1458";

function checkPassword(){

const input = document.getElementById("password").value.trim();

const message = document.getElementById("message");

const hint = document.getElementById("hint");

if(input === correctPassword){

message.style.color="#7CFC00";

message.innerHTML="❤️ আমি জানতাম তুমি পারবে...";

const loading = document.getElementById("loadingScreen");
loading.style.display = "flex";

let percent=0;

const fill=document.getElementById("loaderFill");

const text=document.getElementById("loaderText");

const timer=setInterval(()=>{

percent++;

fill.style.width=percent+"%";

text.innerHTML=percent+"%";

if(percent>=100){

clearInterval(timer);

location.href="gallery.html";

}

},25);

return;

}

attempts++;

if(attempts===1){

message.style.color="#ffb347";

message.innerHTML="🙂 উফ... মনে হয় একটু ভুল হয়েছে। আরেকবার ভাবো।";

}

else if(attempts===2){

message.style.color="#ffd700";

message.innerHTML="💖 তুমি খুব কাছাকাছি আছো... আর একবার চেষ্টা করো।";

}

else{

message.style.color="#ff6961";

message.innerHTML="❤️ উত্তরটা মনে না থাকলেও কোনো সমস্যা নেই।";

hint.innerHTML=`
<hr style="margin:20px 0;border-color:#ffffff33">

<b>সঠিক উত্তর:</b> ${correctPassword} দিন ❤️

<br><br>

এতদিন ধরেই আমি তোমার অপেক্ষায় আছি...

<br><br>

তুমি চাইলে এখন এই উত্তরটাই লিখে Gallery Unlock করতে পারো। 🌸
`;

}

}
