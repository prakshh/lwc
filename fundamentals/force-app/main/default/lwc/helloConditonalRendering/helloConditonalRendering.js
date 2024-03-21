import { LightningElement } from 'lwc';

export default class HelloConditonalRendering extends LightningElement {
    isVisible = false
    handleClick() {
        this.isVisible = true
    }

    name
    changeHandler(event) {
        this.name = event.target.value
    }
    get helloMethod() {
        return this.name === "hello"
    }

    /*
    note:
        falsy values: x = 0, false, undefined, null, ""
    */
}