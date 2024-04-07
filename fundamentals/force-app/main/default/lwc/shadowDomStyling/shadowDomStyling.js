import { LightningElement } from 'lwc';

export default class ShadowDomStyling extends LightningElement {}

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