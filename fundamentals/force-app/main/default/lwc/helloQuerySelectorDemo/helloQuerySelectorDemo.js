import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    fetchDetailHandler() {
        const elem = this.template.querySelector('h1')
        //console.log(elem)               // <h1>Hey, I'm a header</h1>
        console.log(elem.innerText)       // Hey, I'm a header
    }
}