import { LightningElement } from 'lwc';

export default class CreateTask extends LightningElement {
    taskTitle;
    dueDate;
    showDueDate = false;
    showSave = false;

    handleOnChange(event) {
        const fieldName = event.target.name;
        if(fieldName === 'taskTitle') {
            this.taskTitle = event.target.value;
            if(this.taskTitle != '') {
                this.showDueDate = true;
            } else {
                this.showDueDate = false;
            }
        }
        else if(fieldName === 'dueDate') {
            this.dueDate = event.target.value;
            this.dueDate != '' ? (this.showSave = true) : (this.showSave = false);
        }
    }
}