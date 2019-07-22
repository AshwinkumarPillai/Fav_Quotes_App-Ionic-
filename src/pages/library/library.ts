import {Component, OnInit} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Quote } from "../../data/quotes.interface";
import quotes from "../../data/quotes";
import {QuotesPage} from "../quotes/quotes";


@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{

  quotesCollection: {category: string, quotes: Quote[], icon: string}[];
  gotoquotes = QuotesPage;

  ngOnInit(){
    this.quotesCollection = quotes;
  }

}
