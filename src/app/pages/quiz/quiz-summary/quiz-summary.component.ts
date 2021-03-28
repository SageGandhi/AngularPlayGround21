import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QuizCard } from 'src/app/model/quiz/quiz-card';
import { QuizPanel } from 'src/app/model/quiz/quiz-panel';

@Component({
  selector: 'app-quiz-summary',
  templateUrl: './quiz-summary.component.html',
  styleUrls: ['./quiz-summary.component.css']
})
export class QuizSummaryComponent implements OnInit {

  panels: QuizPanel[] = [];
  quizCards: { [id: string]: QuizCard[] } = {};

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<QuizPanel[]>('api/quizPanels')
      .subscribe(quizPanels => { this.panels = quizPanels; })
    this.httpClient.get<{ [id: string]: QuizCard[] }>('api/quizCards')
      .subscribe(quizCards => { this.quizCards = quizCards; })
  }
}
