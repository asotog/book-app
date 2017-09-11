import { Component, ViewChild } from '@angular/core';
import { bookChapter } from './book.model'
import { chapterService } from './chapter.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') form: any; // view form element 

  private _chapter: Array<bookChapter>;// an array of chapters


  constructor(private chap: chapterService) {
    this._chapter = chap._chapter;
    //copied array from service
  }
  private toggleeditval(index: any, content: any, name: any, edit: any) {
    this._chapter[index] = new bookChapter(name, content.value, !edit);
    //updating the _chapter array in component
  }
  private save(index: any, content: any, name: any, edit: any) {
    this.chap._chapter[index] = new bookChapter(name, content.value, !edit);
    // updating data in our service
  }
  private newChapter(name: any, content: any) {
    this.chap._chapter.push(new bookChapter(name.value, content.value, true));
    this.form.nativeElement.reset();
    //adding new chapter
  }
  removeChapter(index: any) {
    this.chap._chapter.splice(index, 1);//remove chapter
  }
}
