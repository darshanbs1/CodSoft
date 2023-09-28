var i=0;
var count=0;

function add() {
    event.preventDefault();
    if(count==4)
    {
        alert("Only 4 items allowed");
        document.getElementById("task").value="";
        document.getElementById("priority").value="";
        document.getElementById("deadline").value="";

        return;
    }
    var task = document.getElementById("task").value;
    var priority = document.getElementById("priority").value;
    var deadline = document.getElementById("deadline").value;

    document.getElementById("task").value="";
    document.getElementById("priority").value="";
    document.getElementById("deadline").value="";

    document.getElementById("list").innerHTML += `
    <div class="item" id="item${i}">
        <div class="row"><input type="checkbox" id="ch${i}" onclick="st(${i})"></div>
        <div class="row">${task}</div>
        <div class="row">${priority}</div>
        <div class="row">${deadline}</div>
        <div class="row"><button id="del" onclick="del(${i})">Delete</button></div>
    </div>
    `;
    i=i+1;
    count=count+1;
}

function del(i)
{
    event.preventDefault();
    document.getElementById("item"+i).remove();
    count=count-1;

}

function st(i)
{
    if(document.getElementById("ch"+i).checked==true)
    {
        document.getElementById("item"+i).style.textDecoration="line-through";
    }
    else
    {
        document.getElementById("item"+i).style.textDecoration="none";
    }
}
