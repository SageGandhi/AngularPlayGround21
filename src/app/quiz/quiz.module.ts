import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { RouterModule, Routes } from '@angular/router';
import { QuizSummaryComponent } from '../pages/quiz/quiz-summary/quiz-summary.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { TilesComponent } from '../pages/quiz/tiles/tiles.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { AttemptQuizComponent } from '../pages/quiz/attempt-quiz/attempt-quiz.component';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';
import { CountDownTimerComponent } from '../pages/quiz/count-down-timer/count-down-timer.component';
import { SubmitReviewComponent } from '../pages/quiz/submit-review/submit-review.component';
import { FlipBlockComponent } from '../pages/flip-block/flip-block.component';
import { FlipBlockDividerComponent } from '../pages/flip-block-divider/flip-block-divider.component';

const routes: Routes = [
  {
    path: 'quiz',
    children: [{ path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: QuizSummaryComponent },
    { path: 'attempt-quiz/:id', component: AttemptQuizComponent },
    { path: 'attempt-quiz/:id/submit-review', component: SubmitReviewComponent }
    ]
  }
];


@NgModule({
  declarations: [
    QuizSummaryComponent,
    TilesComponent,
    AttemptQuizComponent,
    CountDownTimerComponent,
    SubmitReviewComponent,
    FlipBlockComponent,
    FlipBlockDividerComponent,
  ],
  imports: [
    CommonModule,
    NzCollapseModule,
    RouterModule.forChild(routes),
    NzCardModule,
    NzGridModule,
    NzButtonModule,
    NzDrawerModule,
    NzTagModule,
    NzProgressModule,
    NzRadioModule,
    FormsModule
  ],
  exports: [RouterModule, TilesComponent]
})
export class QuizModule { }
