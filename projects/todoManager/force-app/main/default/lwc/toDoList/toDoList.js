import { LightningElement } from 'lwc';
import getToDoList from '@salesforce/apex/ToDoController.getToDoList';

export default class ToDoList extends LightningElement {}

/*
wire
- purpose of using wire is not only
1. fetching data on load of the page, but also
2. improve performance of LWC as wire will be storing the data as a cache memory,
so whenever you are reloading the page, it won't be getting the latest data estimate,
instead of that, it will be showing data from the cached, until something is changed on the server side
*/