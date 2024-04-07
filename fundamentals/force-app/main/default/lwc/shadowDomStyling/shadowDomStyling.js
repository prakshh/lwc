import { LightningElement } from 'lwc';

export default class ShadowDomStyling extends LightningElement {

    isLoaded = false        // used to increase efficiency by preventing re-rendering repeatedly after doing something
    renderedCallback() {
        if(this.isLoaded) return 
        const style = document.createElement('style')
        style.innerText = `c-shadow-dom-styling .slds-button {
            background: red;
            color: white;
        }`
        this.template.querySelector('lightning-button').appendChild(style)
        this.isLoaded = true
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