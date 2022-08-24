
// const li=document.createElement("li");

// li.className = "list-group-item list-group-item-secondary";

// li.setAttribute("title", "new item");
// li.setAttribute("data-id","5");

// const text=document.createTextNode("Todo 5");
// li.appendChild(text);

// const a=document.createElement("a");
// a.setAttribute("href","#");
// a.className = "delete-item float-right";
// a.innerHTML= '<i class="fas fa-times"></i>';
// li.appendChild(a);

// document.querySelector("#task-list").appendChild(li);
// console.log(li);

// const li=document.createElement("li");
// li.className="list-group-item list-group-item-secondary";
// li.setAttribute("title","new item");
// li.setAttribute("data-id","5");

// const text=document.createTextNode("Todo 5");
// li.appendChild(text);

// const a=document.createElement("a");
// a.setAttribute("href","#");
// a.className="delete-item float-right";
// a.innerHTML = '<i class="fas fa-times"></li>';
// li.appendChild(a);

// document.querySelector("#task-list").appendChild(li);

// const tasklist=document.querySelector("#task-list");

// tasklist.children[2].remove();

// const cardHeader = document.querySelector(".card-header");
// const h3=document.createElement("h3");
// h3.setAttribute("class","card-header");
// h3.appendChild(document.createTextNode("Yeni Listeler"));

// const parent = document.querySelector(".card");
// parent.replaceChild(h3, cardHeader);

// const taskList=document.querySelector("#task-list");
// let value;
// link = taskList.children[0].children[0];
//  value = link.className;
//  value = link.classList;


//  link.classList.add("new");
//  link.classList.remove("new");

//  value=link.getAttribute("href");
// value=link.setAttribute("href","https://instagram.com/balkiserhat");

// console.log(value);


// buton eventleri
// const btn =document.querySelector("#btnDeleteAll");

// btn.addEventListener("click",btnClick);
// const btn2 =document.querySelector("#btnAddNewTask");

// btn2.addEventListener("click",btnClick);

// function btnClick(a){
//     a.preventDefault();
//     console.log("butona tıklandı");
// }

// const btn = document.querySelector("#btnAddNewTask");
// const ul = document.querySelector("#task-list");

// btn.addEventListener("click",run);
// ul.addEventListener("click",run);
// btn.addEventListener("dblclick",run);
// function run(event){
//     console.log("event type:"+event.type);
// }


const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName")
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const items = ["Todo 1", "Todo 2", "Todo 3", "Todo 4", "Todo 5"];

loadItems();
eventListener();


function eventListener() {
    form.addEventListener("submit", addNewItem);
    taskList.addEventListener("click", deleteItem);
    btnDeleteAll.addEventListener("click", deleteAllItems);
}

function loadItems() {
    items.forEach(function (item){
        createItem(item);
    })
}

function createItem(text){
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(text));

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);
    taskList.appendChild(li);

}

function addNewItem(e) {

    if (input.value === "") {
        alert("Add New Item");
    }

    else {
        createItem(input.value);
    }




    e.preventDefault();
}

function deleteItem(e) {
    if (e.target.className === "fas fa-times") {
        e.target.parentElement.parentElement.remove();
    }
}

function deleteAllItems() {
    taskList.remove();
}
