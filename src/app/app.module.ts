import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CandidateComponent } from './candidate/candidate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PositionComponent } from './position/position.component';
import { NavComponent } from './nav/nav.component';
import { UniversitiesComponent } from './universities/universities.component';
import { InterceptorService } from './services/interceptor.service';
import { VoteComponent } from './vote/vote.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CandidateComponent,
    PositionComponent,
    NavComponent,
    UniversitiesComponent,
    VoteComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
