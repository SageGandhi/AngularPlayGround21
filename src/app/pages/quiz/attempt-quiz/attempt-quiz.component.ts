import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as questions from './all-quiz';
@Component({
  selector: 'app-attempt-quiz',
  templateUrl: './attempt-quiz.component.html',
  styleUrls: ['./attempt-quiz.component.css']
})
export class AttemptQuizComponent implements OnInit {
  questionList = []
  currentQuiz = {}
  currentIndex = -1
  constructor(private router: Router) {}
  ngOnInit() {
    for (let indexFinder = 0; indexFinder < 100; indexFinder++) {
      let foundIndex = Math.floor(Math.random() * 1000);
      questions.questions[foundIndex]["status"]="default";
      this.questionList.push(questions.questions[foundIndex]);
      this.currentQuiz = this.questionList[0];
      this.currentIndex = 0;
    }
    console.log(this.currentQuiz);
  }
  setCurrentQuiz(index) {
    this.currentQuiz = this.questionList[index];
    this.currentIndex = index;
  }
  reset(currIndex){
    this.currentQuiz['answerProvided']=undefined;    
    console.log(this.currentQuiz);
    //Add Data To Click Stream
  }
  setAnswerValue(event) {
    this.questionList[this.currentIndex]["status"]="primary";
    this.currentQuiz['clickStream']=this.currentQuiz['clickStream']||[];
    this.currentQuiz['clickStream'].push({
      id:"UserEmailId",timestamp:new Date(),
      message:`User Selected Option ${event} for question id ${this.currentQuiz['_id']}`
    });
    console.log(this.currentQuiz['clickStream']);
    this.questionList[this.currentIndex] = this.currentQuiz;
  }
  submit(){
    console.log(this.router.url);    
    localStorage.setItem(`${this.router.url}/submit-review`,JSON.stringify(this.questionList));
    this.router.navigateByUrl(`${this.router.url}/submit-review`);
  }
}
