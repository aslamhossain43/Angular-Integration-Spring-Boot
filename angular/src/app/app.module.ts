import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegeComponent } from './college/college.component';
import { routes } from './app.routes';
import { CollegeService } from './college/college.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CollegeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    routes,
    HttpModule
  ],
  providers: [CollegeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
