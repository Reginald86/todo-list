import { renderTask } from "./dom.js";


export class Task {
    constructor(title, date, description, priority){
        this.title = title;
        this.date = date;
        this.description = description;
        this.priority = priority;
    }
}


export const taskArray = [];

export function createTask () {
    const form = document.querySelector("#taskForm");
    const cancelBtn = document.querySelector("#cancel-taskDialog");
    const openBtn = document.querySelector("#show-taskDialog");
    const dialog = document.querySelector("#taskDialog");

    openBtn.addEventListener("click", () => {
        dialog.showModal();
    })

    cancelBtn.addEventListener("click", () => {
        dialog.close();
        form.reset();
    })

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        renderTask();

        

        dialog.close();
        form.reset();
    })
}

