import { LightningElement } from 'lwc';

export default class CreateTask extends LightningElement {
    taskTitle;
    dueDate;

    handleOnChange(event) {
        //this.taskTitle = event.target.value;
        const fieldName = event.target.name;
        if(fieldName === 'taskTitle') {
            this.taskTitle = event.target.value;
            console.log(" ~ this.taskTitle: ", this.taskTitle);
        } else if(fieldName === 'dueDate') {
            this.dueDate = event.target.value;
            console.log(" ~ this.dueDate: ", this.dueDate);
        }
    }
}