const hover1=document.getElementById("c1")
const hover2=document.getElementById("c2")
const hover3=document.getElementById("c3")
const hover4=document.getElementById("c4")
const hover5=document.getElementById("c5")
const submit=document.getElementById("submit")
const selected=document.getElementById("mainbox")
const score=document.getElementById("score")
submit.addEventListener("click",action);
hover2.addEventListener("mouseover",(event)=>hover1.style.backgroundColor="hsl(217, 12%, 63%)")
hover2.addEventListener("mouseout",(event)=>hover1.style.backgroundColor="hsl(203, 21%, 16%)")
hover3.addEventListener("mouseover",(event)=>hover2.style.backgroundColor="hsl(217, 12%, 63%)")
hover3.addEventListener("mouseout",(event)=>hover2.style.backgroundColor="hsl(203, 21%, 16%)")
hover4.addEventListener("mouseover",(event)=>hover3.style.backgroundColor="hsl(217, 12%, 63%)")
hover4.addEventListener("mouseout",(event)=>hover3.style.backgroundColor="hsl(203, 21%, 16%)")
hover5.addEventListener("mouseover",(event)=>hover4.style.backgroundColor="hsl(217, 12%, 63%)")
hover5.addEventListener("mouseout",(event)=>hover4.style.backgroundColor="hsl(203, 21%, 16%)")
function action()
{   const checked =document.querySelector('input[name="circle"]:checked').value;
    console.log('selected::', checked);
    
    selected.innerHTML =
    '<img src="images/illustration-thank-you.svg" alt="icon-star" clas="img"><div id="selected">You selected<span id="score"></span>out of 5</div><div class="header"><h1>Thank you!<br></h1><h2>We appreciate you taking the time to give a raiting.<br>If you ever need more support, dont hesitate to<br>get in touch</h2></div>'
    
    document.getElementById("style-sheet").href = "styleA.css";
    
    const score=document.getElementById("score")
    score.innerHTML = "&nbsp;" + checked + "&nbsp;"; 
}
//hover1.addEventListener("mouseover",(event)=> hover1.style.backgroundColor="hsl(203, 21%, 16%)");
//hover1.addEventListener("mouseout",(event)=> hover1.style.backgroundColor="hsl(203, 21%, 16%)")
//hover1.addEventListener("click",(event)=> hover1.style.backgroundColor="red")
//hover1.addEventListener("mouseout",(event)=> hover1.style.backgroundColor="hsl(203, 21%, 16%)")

