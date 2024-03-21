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

    // getter example
    
    users = ["tony", "wanda", "natasha"]
    num1 = 10
    num2 = 20

    /*firstUser = this.users[0]

        - this would set firstUser to the value of this.users[0] at the moment of assignment, but it wouldn't dynamically reflect changes to users array. If you later update the users array, firstUser wouldn't automatically update.

        - this is where a getter method becomes useful. By using a getter method, you ensure that firstUser always reflects the current first user in the users array, even if the array changes after the component is initialized. It provides a dynamic way to retrieve the value, ensuring consistency and real-time updates.
     */

    get firstUser() {
         return this.users[0]
    }

    get multiply() {
        return this.num1 * this.num2
    }



}