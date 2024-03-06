import { LightningElement, track } from 'lwc';

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

    @track address = {
         street: '1234 Main st',
         city: 'Seattle',
         state: 'WA',
         zip: '98103'
    }

    trackHandler(event) {
        this.address.city = event.target.value
    }

}