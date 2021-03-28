import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';
import { QuizCard } from 'src/app/model/quiz/quiz-card';
import { QuizPanel } from 'src/app/model/quiz/quiz-panel';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class QuizImportExportService implements InMemoryDbService {
  quizPanel: QuizPanel[] = [
    {
      tagKey: 'attempt_quiz',
      active: true,
      name: 'Attempt Quiz',
      disabled: false,
      hidden: false
    },
    {
      tagKey: 'practice_quiz',
      active: false,
      disabled: false,
      name: 'Practice Quiz',
      hidden: false
    },
    {
      tagKey: 'quiz_attempt_history',
      active: false,
      disabled: true,
      name: 'Quiz Attempt History',
      hidden: false
    },
    {
      tagKey: 'archived_quiz',
      active: false,
      disabled: true,
      name: 'Archived Quiz',
      hidden: false
    }
  ];
  quizCards: { [id: string]: QuizCard[] } = {}
  constructor() { }
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    /***Quiz Tiles Manipulation:Start */
    let tagKeys = ['archived_quiz', 'quiz_attempt_history', 'attempt_quiz', 'practice_quiz'];
    let difficultyLevel = ['Easy', 'Intermediate', 'Advanced', 'Hard'];
    let allQuizCards = [];
    for (let loopCount = 0; loopCount <= 100; loopCount++) {
      allQuizCards.push({
        description: `Long Description For Quiz ${loopCount}`,
        shortDescription: `Short Description For Quiz ${loopCount}`,
        marks: 25 * ((loopCount % 2) + 1),
        tagKey: tagKeys[loopCount % 4],
        id: uuidv4()
      });
    }
    for (let index in tagKeys) {
      this.quizCards[tagKeys[index]] = allQuizCards.filter(element => element.tagKey === tagKeys[index]);
      this.quizCards[tagKeys[index]] = this.quizCards[tagKeys[index]].map(item => {
        item['difficultyLevel'] = difficultyLevel[Math.floor(Math.random() * 4)]
        return item;
      });
    }
    /***Quiz Tiles Manipulation:End */
    //Quiz Json Load
    return of({ quizPanels: this.quizPanel, quizCards: this.quizCards })
  }
}
