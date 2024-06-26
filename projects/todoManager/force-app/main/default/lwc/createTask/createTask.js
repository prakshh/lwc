import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import saveToDo from '@salesforce/apex/ToDoController.saveToDo';

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
            this.dueDate != "" && this.targetParent != true 
                ? (this.showSave = true) 
                : (this.showSave = false);
        }
    }

    handleClick() {
        console.log("#### Buttons click on Child");
        saveToDo({ title: this.taskTitle, dueDate: this.dueDate }).then(
            (result) => {
                if(result === "Success") {
                    this.taskTitle = "";
                    this.dueDate = "";

                    const evt = new ShowToastEvent({
                        title: "Success",
                        message: "A new item has been added in your todo list",
                        variant: "sucesss"
                    });
                    this.dispatchEvent(evt);
                }
            }
        )
        .catch((error)=>{
            console.log("error: ", error);

            const evt = new ShowToastEvent({
                title: "Error",
                message: error.body.message,
                variant: "error"
            });
            this.dispatchEvent(evt);
        })
    }
    @api
    handleParentClick() {
        this.handleClick();
    }
}



/*
Wire Apex to Save records
- To save record, we need to wire apex.
- First, we need to save the record using save Task button
- Then, we need to get the list of records and display it as a list. 

To make the server side callouts, 2 things we can use:
- First, wire an Apex method where we can wire the records on the Load of the page
- Second, imperative method - whenever we need to perform any action on button click, we will use imperative Apex 


Custom object - ToDo
- A ToDo custom object and 3 custom field are created - Title, Due Date, Status

Toast message
- tis shows a pop-up message on top after entering all data
- need to import ShowToastEvent

Created a tab of ToDo object
- this will display list of ToDo objects created
*/