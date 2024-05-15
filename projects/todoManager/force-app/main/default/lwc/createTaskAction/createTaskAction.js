import { LightningElement } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class CreateTaskAction extends LightningElement {
    isAction = true;

    handleClick() {
        this.refs.createToDo.handleParentClick();
        // const childComponent = this.template.querySelector('c-create-task');
        // if(childComponent) {
        //     childComponent.handleParentClick();
        // }
    }
    closeAction() {
        this.dispatchEvent(new CloseActionScreenEvent());
    }

}

/*
WE can use LWC to create a Target -> custom action (Quick Action).
One LWC can have One Target.
Quick Actions - are only available in lightning RecordPages, with target -> lightning__RecordAction
Quick Actions are of 2 types - Screen Action and Headless Action
*/