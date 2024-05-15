import { LightningElement, api } from 'lwc';

export default class CreateTask extends LightningElement {
    @api targetParent;
    taskTitle;
    dueDate;
    showDueDate = false;
    showSave = false;

    connectedCallback(){
        console.log("### Target Parent: " + this.targetParent);
    }
    handleOnChange(event) {
        //this.taskTitle = event.target.value;
        const fieldName = event.target.name;
        if(fieldName === 'taskTitle') {
            this.taskTitle = event.target.value;
            console.log(" ~ this.taskTitle: ", this.taskTitle);
            if(this.taskTitle != '') {
                this.showDueDate = true;
            } else {
                this.showDueDate = false;
            }
        } else if(fieldName === 'dueDate') {
            this.dueDate = event.target.value;
            console.log(" ~ this.dueDate: ", this.dueDate);
            // this.dueDate != '' ? (this.showSave = true) : (this.showSave = false);
            this.dueDate != "" && this.targetParemt != true 
                ? (this.showSave = true) 
                : (this.showSave = false);
        }
    }
}