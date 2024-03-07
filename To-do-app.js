const inputBox = document.getElementById('input-box');
const ListContainer= document.getElementById('list-container');
const alertmsg= document.getElementById('alert');
const divAlert= document.querySelector('.row');


// code for adding text
function AddTask(){
    if(inputBox.value === '')
    {
        // alert("You must write Something");
        alertmsg.style.display="block";
        // console.log(a);
        divAlert.style.border="1px solid red";

    }
    else{
        let li = document.createElement("li"); /*creating html element tag name li (dynamically) */
        li.innerHTML=inputBox.value;
        ListContainer.appendChild(li); /*it display the text */

        let span = document.createElement("span");
        span.innerHTML= "\u00d7"; /*cross icon */
        li.appendChild(span);
    }
    inputBox.value="";/*after add text it will empty input field */
    saveData();
}

// code for cross icon or checked or unchecked

ListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// saving data at localstorage
function saveData(){
    localStorage.setItem("data", ListContainer.innerHTML);
}

// getting data from local storage
function getData(){
    ListContainer.innerHTML=localStorage.getItem("data");
}

getData();