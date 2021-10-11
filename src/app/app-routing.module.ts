import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './candidate/candidate.component';
import { LoginComponent } from './login/login.component';
import { PositionComponent } from './position/position.component';
import { RegisterComponent } from './register/register.component';
import { ResultsComponent } from './results/results.component';
import { UniversitiesComponent } from './universities/universities.component';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "candidate",
    component: CandidateComponent
  },
  {
    path: "positions",
    component: PositionComponent
  },
  {
    path: "candidates/:id",
    component: CandidateComponent
  },
  {
    path: "universities",
    component: UniversitiesComponent
  },
  {
    path: "vote",
    component: VoteComponent
  },
  {
    path: "results",
    component: ResultsComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
