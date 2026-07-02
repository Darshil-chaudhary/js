let form = document.getElementById('form')
let tbody = document.getElementById('tbody')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let task = document.getElementById('task').value;
    let priority = document.getElementById('priority').value;

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = task;

    let td2 = document.createElement("td");
    td2.innerText = priority;

    let td3 = document.createElement("td");
    let btn = document.createElement("button")
    btn.innerText = "Delete";
    btn.style.cursor = "pointer";
    btn.style.color = "white";
    btn.style.padding = "8px 18px";
    btn.style.border = "none";
    btn.style.backgroundColor = "red"
    btn.style.borderRadius = "8px"

    td3.appendChild(btn);

    td3.addEventListener("click",function(){
        tr.remove();
    });
    tr.append(td1, td2, td3);
    tbody.append(tr);

})