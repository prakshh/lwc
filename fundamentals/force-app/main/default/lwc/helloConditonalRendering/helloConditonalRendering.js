import { LightningElement } from 'lwc';

export default class HelloConditonalRendering extends LightningElement {
    isVisible = false
    handleClick() {
        this.isVisible = true
    }
}