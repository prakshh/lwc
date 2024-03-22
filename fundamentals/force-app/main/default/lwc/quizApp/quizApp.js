import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected = {}   //for storing answers
    correctAnswers = 0  //number of cotrect answers
    myQuestions = [
        {
            id: "Question1",
            question: "Which one of the following is not a template loop?",
            answers:{
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            correctAnswer: "c"
        },
        {
            id: "Question2",
            question: "Which one of the following file type is invalid in LWC component folder?",
            answers:{
                a: ".svg",
                b: ".apex",
                c: ".js"
            },
            correctAnswer: "b"
        },
        {
            id: "Question3",
            question: "Which one of the following is not a directive?",
            answers:{
                a: "for:each",
                b: "if:true",
                c: "@track"
            },
            correctAnswer: "c"
        }
    ]

    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.myQuestions.length)
        //it is saying: if selected length != myQuestions length, then return true else return false
        //it will keep the submit button disabled if all answers are not selected 
    }

    changeHandler(event) {
        console.log("name", event.target.name)
        console.log("value", event.target.value)

        //const name = event.target.name
        //const value = event.target.value
        const {name, value} = event.target
        this.selected = {...this.selected, [name]:value}    // it means - this.selected = new copy of this.selected with {"Question1":"a"}
    }

    submitHandler(event) {
        event.preventDefault(); //it will prevent loading of page after clicking submit button
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        /*it means, this.selected = {"Question1":"a", "Question2":"b", "Question3":"c"}
          selected contains user-selected values
          correctAnswer contains correct values
          filter will return all the questions which have correct answer as user-selected answer
          it will return [{"id":"Question1","correctAnswer":"a"}]
        */
        this.correctAnswers = correct.length        //since filter (which is in 'correct') always returns array, we can use it to get the length of array, and hence, number of correct answers
        console.log("this.correctAnswers", this.correctAnswers)
    }

    resetHandler() {
        this.selected = {}
        this.correctAnswers = 0
    }
}

/*
1. Component creation
2. if:true directive
3. Looping - for:each
4. Getter
5. Methods
6. Properties
7. Form submit and reset
8. Html layout
*/