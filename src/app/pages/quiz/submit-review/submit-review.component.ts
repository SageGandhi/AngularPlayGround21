import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-review',
  templateUrl: './submit-review.component.html',
  styleUrls: ['./submit-review.component.css']
})
export class SubmitReviewComponent implements OnInit {
  questionList;
  constructor(private router: Router) {}

  ngOnInit() {
    this.questionList=JSON.parse(localStorage.getItem(this.router.url));
    console.log(this.questionList);
  }

}
