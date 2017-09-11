import { Injectable } from '@angular/core';
import { bookChapter } from './book.model'

@Injectable()
export class chapterService {
  public _chapter: Array<bookChapter> = [new bookChapter("What are components in angular?", "Components are the most basic building block of an UI in an Angular application. An Angular application is a tree of Angular components. Angular components are a subset of directives. Unlike directives, components always have a template and only one component can be instantiated per an element in a template.", true)
    , new bookChapter("What are decorators in angular?", "The decorator function is supplied information about the class , parameter or method, and the decorator function returns something in its place, or manipulates its target in some way. Typically the  a decorator returns is the same thing that was passed in, but it has been augmented in some way.", true),
  new bookChapter("What are pipes in angular?", "The Angular AsyncPipe is an interesting example of an impure pipe. The AsyncPipe accepts a Promise or Observable as input and subscribes to the input automatically, eventually returning the emitted values.", true)];
}
