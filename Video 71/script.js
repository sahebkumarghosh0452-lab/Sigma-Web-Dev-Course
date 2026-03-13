//HoverOver the text in codespace to know what they dooooooooooooo
document.querySelector(".box").innerHTML = "Hey i am Saheb" ///
document.querySelector(".box").innerHTML 
document.querySelector(".container").innerText
document.querySelector(".container").outerHTML
document.querySelector(".container").textContent
document.querySelector(".container").tagName //def foe ele nodes only 
document.querySelector(".container").nodeName //Def for any node (text , cmt etc)
document.querySelector(".box").hasAttribute("style");
document.querySelector(".box").getAttribute("style"); 
document.querySelector(".box").setAttribute("style","display : inline")
document.querySelector(".box").removeAttribute("style")
document.querySelector(".box").attributes
document.designMode = "on" 
document.querySelector(".box").dataset

//By harry (already)
let div = document.createElement("div");
div.innerHTML = "I have been inserted <b>by harry</b>"
div.setAttribute("class", "created");
document.querySelector(".container").before(div);
document.querySelector(".container").append(div);
document.querySelector(".container").prepend(div);
document.querySelector(".container").after(div);
document.querySelector(".container").replaceWith(div);
let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforebegin", "<b> I am under the water. Please h elp me here too much raining</b>")
//beforebegin - before ele 
//afterbegin - into ele at begin
//beforoend - into ele at the end 
//afterend - immediately after end 
document.querySelector(".box").remove();
document.querySelector(".container").classList //obj type ret statement 
document.querySelector(".container").className //container red bg - green
document.querySelector(".container").classList.add 
document.querySelector(".container").classList.remove
document.querySelector(".container").classList.toggle

