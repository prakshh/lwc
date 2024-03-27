import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    userNames = ['Tony', 'Steve', 'Natasha', 'Wanda', 'Bruce']
    fetchDetailHandler() {
        const elem = this.template.querySelector('h1')
        elem.style.border = "1px solid red"     //setting style dynamically using querySelector
        //console.log(elem)               // <h1>Hey, I'm a header</h1>
        console.log(elem.innerText)       // Hey, I'm a header
        const userElements = this.template.querySelectorAll('.name')
        Array.from(userElements).forEach(item=>{
            console.log(item.innerText)
            item.setAttribute("title", item.innerText)      //setting attribute (adding title tag) dynamically using querySelector
        })
    }
}

/*
its not always recommended to use querySelector / querySelectorAll
as its a costly operation and should be avoided whenever possible.

rare real-life use case:
    if the requirement is to display the html tags
*/