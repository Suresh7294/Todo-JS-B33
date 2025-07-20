const taskInput=document.getElementById("task");
const addBtn=document.getElementById("add");
const taskList=document.getElementById("tasklist");

addBtn.addEventListener("click",()=>{
    const taskText=taskInput.value.trim();
    if(taskText<=0)
    {
        alert(" Please add the task");
    }
    if(taskText!=0)
        {
        createTask(taskText);
        taskInput.value=" ";
    }

});

function createTask(text)
{
    const taskItem=document.createElement("li");//
    taskItem.innerHTML=`<span>${text}</span>    <button class="delete"><img src="delete.png" alt="delete" height="18" width="25"></button>`;
    taskList.appendChild(taskItem);
 
    const deleteBtn = taskItem.querySelector(".delete");
    deleteBtn.onclick = function () {
        taskItem.remove();
    };
}