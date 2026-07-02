let form =document.getElementById('form')
let tbody =document.getElementById('tbody')

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let task =document.getElementById('task').value;
    let priority = document.getElementById('priority').value;

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = task;

    let td2 = document.createElement("td");
    td2.innerText =priority;

    let td3 = document.createElement("td");
    td3.innerText = "Delete";
    td3.style.cursor = "pointer";
    td3.style.color = "red";

    tr.append(td1,td2,td3);
    tbody.append(tr);
    
})