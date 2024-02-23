const inputBox = document.querySelector('input');
const listContainer = document.getElementById("list");
function addTask()
{
    if(inputBox.value === "")
    {
        alert("You must write something.");
    }
    else
    {
        let text = document.createElement("h2");
        text.innerHTML = inputBox.value ;
        listContainer.appendChild(text);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        text.appendChild(span);
        document.getElementById("list").style.display = "block";
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
        if(document.getElementById("list").innerHTML.trim() == "")
        {
            document.getElementById("list").style.display = "none";
        }
    }
},false);
function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
    if(!document.getElementById("list").innerHTML.trim() == "")
    {
        document.getElementById("list").style.display = "block";
    }
}
showTask();