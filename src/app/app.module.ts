import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { chapterService } from './chapter.service'
import { AppComponent } from './app.component';
import { SqueezeBoxModule } from 'squeezebox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, SqueezeBoxModule, FormsModule
  ],
  providers: [chapterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
