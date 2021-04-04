import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css']
})
export class CountDownTimerComponent implements OnInit {
  @Input() quizId: string;
  @Input() expiresInMinutes: number;

  hourMostSignificantDigit: number;
  hourLeastSignificantDigit: number;
  minuteMostSignificantDigit: number;
  minuteLeastSignificantDigit: number;
  secondMostSignificantDigit: number;
  secondLeastSignificantDigit: number;

  intervalId: any;

  constructor(private router:Router) { }

  ngOnInit() {
    let currentDateTime = +new Date(), timerExpiresAtMillis = currentDateTime + this.expiresInMinutes * 60 * 1000;
    console.log(`CountDown Timer Started @${currentDateTime} For ${this.expiresInMinutes} Minutes, Expires @${new Date(timerExpiresAtMillis)}`);
    //Check If We Have Saved State In LocalStorage/Or In Server
    //Only Keep Submit Button Enable
    let diffInMilliSecs: number = (timerExpiresAtMillis - (+new Date())) / 1000;
    setTimeout(()=>{
      this.router.navigateByUrl(`${this.router.url}/submit-review`);      
    },diffInMilliSecs)
    this.intervalId = setInterval(() => {
      if (diffInMilliSecs > 0) {
        let seconds = Math.floor(diffInMilliSecs % 60);
        this.secondLeastSignificantDigit = seconds%10;
        this.secondMostSignificantDigit = seconds < 10 ? 0 : Math.floor(seconds/10);
        
        diffInMilliSecs = Math.floor(diffInMilliSecs / 60);

        let minutes = diffInMilliSecs % 60;
        this.minuteLeastSignificantDigit = minutes%10;
        this.minuteMostSignificantDigit = minutes < 10 ? 0 : Math.floor(minutes/10);

        diffInMilliSecs = Math.floor(diffInMilliSecs / 60);
        let hours = diffInMilliSecs % 24;
        this.hourLeastSignificantDigit = hours%10;
        this.hourMostSignificantDigit = hours < 10 ? 0 : Math.floor(hours/10);
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }
}
