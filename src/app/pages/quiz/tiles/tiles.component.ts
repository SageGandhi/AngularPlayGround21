import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizCard } from 'src/app/model/quiz/quiz-card';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  @Input() quizCard: QuizCard;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  attemptQuiz(quizCard: QuizCard) {
    this.router.navigateByUrl(`/quiz/attempt-quiz/${quizCard.id}`);
  }
}
