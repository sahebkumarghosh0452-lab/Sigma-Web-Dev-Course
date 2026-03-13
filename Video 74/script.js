let button = document.getElementById("btn")
// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click Please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})

let tid = setTimeout(hehe(),<>2553</>,<>Right</>,<>Left</>)
//returns a timer id , the digit are delay in ms 
clearTimeout(tid) //cancel the execution 

let tsit = setInterval() //similar only diff is that it repeats after given interval of time 
