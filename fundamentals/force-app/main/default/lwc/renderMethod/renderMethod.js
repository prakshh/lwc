import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import renderTemplate from './renderMethod.html'

export default class RenderMethod extends LightningElement {

    selectedBtn = ''

    render() {
        //return renderTemplate
        return this.selectedBtn === 'Signup' ? signupTemplate :
                this.selectedBtn === 'Signin' ? signinTemplate :
                 renderTemplate
    }

    handleClick(event) {
        this.selectedBtn = event.target.label
    }
    submitHandler(event) {
        console.log(`${event.target.label} Successful!!!`)
    }
}

/*
render method

- can run before or after connectedCallback()
- helps to render html conditonally
*/