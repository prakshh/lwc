import { LightningElement } from 'lwc';
import AlarmClockAssets from '@salesforce/resourceUrl/AlarmClockAssets'
export default class AlarmClockApp extends LightningElement {
  clockImage = AlarmClockAssets+'/AlarmClockAssets/clock.png'
  currentTime = ''
  hours = []
  minutes = []
  meridiems = ['AM', 'PM']

  connectedCallback(){
    this.createHoursOptions()
    this.createMinutesOptions()
    this.currentTimeHandler()
  }
  currentTimeHandler(){
    setInterval(()=>{
      let dateTime = new Date()
      let hour = dateTime.getHours()//getHours() returns the hour (0 to 23) of a date.
      let min = dateTime.getMinutes()
      let sec = dateTime.getSeconds()
      let ampm = "AM"
      if(hour == 0){
        hour = 12
      } else if(hour >=12){
        hour = hour - 12
        ampm = "PM"
      }
      hour = hour<10 ? "0"+hour : hour
      min = min<10 ? "0"+min : min
      sec  = sec<10 ? "0"+sec : sec
  
      this.currentTime = `${hour}:${min}:${sec} ${ampm}`

    }, 1000)
  }

  createHoursOptions() {
    for(let i=0; i<=12; i++){
      let val = i<10 ? "0" + i : i
      this.hours.push(val)
    }
  }

  createMinutesOptions() {
    for(let i=0; i<=59; i++){
      let val = i<10 ? "0" + i : i
      this.minutes.push(val)
    }
  }
}