const todo = document.getElementById("task");
const list = document.querySelector(".lists");

function clicked(){
    if(todo.value === ""){
        alert("Task should not be empty")
    }else{
        let li = document.createElement("li");
        li.innerHTML = todo.value;
        list.appendChild(li);
        todo.value="";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    storeData();
}

list.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){

        e.target.classList.toggle("checked");

    } else if(e.target.tagName === "SPAN"){

          e.target.parentElement.remove();

    }
    storeData();
},false);

function storeData(){

    localStorage.setItem("data",list.innerHTML);

}

function getData(){

    list.innerHTML = localStorage.getItem("data");

}

getData();