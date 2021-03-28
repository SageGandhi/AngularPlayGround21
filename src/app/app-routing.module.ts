import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizSummaryComponent } from './pages/quiz/quiz-summary/quiz-summary.component';
import { QuizModule } from './quiz/quiz.module';


const routes: Routes = [
  {path:'',redirectTo:'quiz',pathMatch:'full'},
  {path:'quiz',loadChildren:()=>import('./quiz/quiz.module').then(m => m.QuizModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),QuizModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
