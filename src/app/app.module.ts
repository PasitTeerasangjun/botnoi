import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDividerModule } from '@angular/material/divider';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { ApiComponent } from './api/api.component';
import { ResumeComponent } from './resume/resume.component';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgIconsModule } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InputComponent,
    ApiComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    MatDividerModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    FontAwesomeModule,
    NgIconsModule.withIcons({ heroUsers }),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
