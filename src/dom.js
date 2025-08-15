import { Task, taskArray } from "./task.js";
import { format } from 'date-fns';


export function renderTask () {
    const title = document.querySelector("#taskTitle").value.trim();
    const date = document.querySelector("#taskDate").value;
    const formattedDate = format(new Date(date), 'MMMM d, yyyy');
    const description = document.querySelector("#taskDescription").value.trim();
    const priority = document.querySelector("#taskPriority").value;

    const taskTitle = document.createElement("h2");
    const taskDate = document.createElement("p");
    const taskDescription = document.createElement("p");
    const taskPriority = document.createElement("p");
    const taskCard = document.createElement("div");
    const section = document.querySelector("section");

       if(priority === "low") {
        taskPriority.style.backgroundColor = "green";
    } else if(priority === "medium") {
        taskPriority.style.backgroundColor = "yellow";
    } else {
        taskPriority.style.backgroundColor = "red";
    }

 
    const newTask = new Task(title,formattedDate, description, priority);
    console.log(newTask.title)


    console.log(newTask)

    taskArray.push(newTask);

    console.log(taskArray)


    taskTitle.textContent = newTask.title;
    taskDate.textContent = newTask.date;
    taskDescription.textContent = newTask.description;
    taskPriority.textContent = newTask.priority

    section.append(taskCard);
    taskCard.append(taskTitle, taskDate, taskDescription, taskPriority);
   

};


