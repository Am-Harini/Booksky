//select popup-box,popup-overley,button
var popbox = document.querySelector(".popup-box")
var overley = document.querySelector(".popup-overley")
var button= document.getElementById("btn")

button.addEventListener("click",function(){
    popbox.style.display="block" 
    overley.style.display="block"
})

var cancelbtn= document.getElementById("cancelbtn")
cancelbtn.addEventListener("click",function(event){
event.preventDefault()
popbox.style.display="none" 
    overley.style.display="none"
})



//select add button,bookname,bookauthor,bookdetails,main
var add = document.getElementById("added");
var bookname=document.getElementById("bookname");
var bookauthor = document.getElementById("bookauthor");
var bookdetails=document.getElementById("bookdetails");
var main = document.querySelector(".main");
var Name = document.getElementById("name");
var description = document.getElementById("Description");

add.addEventListener("click",function(event){
    event.preventDefault()
    description.textContent="";
    Name.textContent="";
    var bname = bookname.value.trim();
    if(bname === ""){
        Name.textContent="Please Enter Book Name.";
        return;
    }
    var bookdes = bookdetails.value.trim();
    if(bookdes === ""){
        description.textContent="Please Enter Book Description.";
        return;
    }
    var div = document.createElement("div")
    div.setAttribute("class","one")
    div.innerHTML=`<h1>${bookname.value}</h1>
   <h3>${bookauthor.value}</h3>
    <p>${bookdetails.value}</p>
  <button onclick="dlt(event)">Delete</button>`
    main.append(div)
popbox.style.display="none" 
overley.style.display="none"
})
function dlt(event){
    event.target.parentElement.remove()
}