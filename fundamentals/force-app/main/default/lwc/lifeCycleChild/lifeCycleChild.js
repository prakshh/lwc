import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor() {         // this hook is invoked when component instance is created
        super()
        console.log("child constructor called")
    }
    connectedCallback() {   //  this hook is used to fetch the data from the server
        console.log("child connectedCallback called")
    }
    renderedCallback() {    // this hook gets invoked when rendering is completed
        console.log("child renderedCallback called")
    }
    disconnectedCallback() {    // this hook gets invoked when rendering is completed
        console.log("child disconnectedCallback called")
    }
}

/*
when clicked 'Show child'
    child constructor called
    child connectedCallback called
    child renderedCallback called
    parent renderedCallback called
when clicked 'Remove child'
    child disconnectedCallback called
    parent renderedCallback called
*/