import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    constructor() {         // this hook is invoked when component instance is created
        super()
        console.log("parent constructor called")
    }
    connectedCallback() {   //  this hook is used to fetch the data from the server
        console.log("parent connectedCallback called")
    }
    renderedCallback() {    // this hook gets invoked when rendering is completed
                            // it runs/executed/gets called up/gets invoked every time when you change any thing in the component
        console.log("parent renderedCallback called")
    }
    name
    changeHandler(event) {
        this.name = event.target.value    
    }
    isChildVisible = false
    handleClick() {
        // this.isChildVisible = true
        this.isChildVisible = !this.isChildVisible              // making it toggle
    }
}

/*
parent constructor called
parent connectedCallback called
child constructor called
child connectedCallback called
child renderedCallback called
parent renderedCallback called

when you type qwerty in the input textbox, due to its number of characters = 6, it is considered to be 6 changes. 
so, below is printed in the console

6parent renderedCallback called
*/


/*
Lifecycle hooks

mounting phase - constructor(), connectedCallback(), render(), renderedCallback()
unmounting phase - disconnectedCallback()
error phase - errorCallback()
*/