import { LightningElement, api } from 'lwc';

export default class CreateTask extends LightningElement {
    @api targetParent;
    taskTitle;
    dueDate;
    showDueDate = false;
    showSave = false;

    connectedCallback() {
        console.log('####Target Parent = ' + this.targetParent);
    }

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
            this.dueDate != '' && this.targetParent != true ? (this.showSave = true) : (this.showSave = false);
        }
    }
}