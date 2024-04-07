import { LightningElement } from 'lwc';

export default class ShadowDomStyling extends LightningElement {

    renderedCallback() {
        const style = document.createElement('style')
        style.innerText = `c-shadow-dom-styling .slds-button {
            background: red;
            color: white;
        }`
        this.template.querySelector('lightning-button').appendChild(style)
    }
}

/*

Rare case - 

requirement: client wants you to update standard Salesforce given component styling
to do: Shadow DOM Styling (still, it is NOT recommended)

problem:  - below style doesn't work on html class="btn"

    .btn {
    background: red;
    color: white;
    }

solution: implement 'Shadow DOM Styling' 
*/