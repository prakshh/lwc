import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = 'Zero to Hero'
    animalSounds = {
        dog: 'woof',
        horse: 'neigh'
    }
    title = 'LWC'

    changeHandler(event) {
        this.title = event.target.value
    }
}