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
    /* Here, we are mutating the data. This is a bad practice
    As, in JavaScript, we should not mutate the data. You should always generate a new copy.
    That means, we should create a new object and pass that to the component.
    */ 
    addressHandlerWithoutTrack(event) {
        this.address = {...this.address, "city": event.target.value}
    }

}