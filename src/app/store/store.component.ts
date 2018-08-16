import { Component, OnInit, ViewChild } from '@angular/core';
import { MatGridList } from '@angular/material';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  @ViewChild('grid') grid: MatGridList;

  gridByBreakpoint = {
    xl: 6,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
  }

  albums1: any[] = [
    {
      albumName: '¡Canta Mi Son!',
      albumImage: "./../../assets/Images/JuanitaPhotos/products/canta-mi-son.jpg",
      albumDescription: "<div> Juanita’s latest CD of music for children, '¡Canta mi son!', has won a National Association of Parenting Products Gold award and a Disney iParenting Media award. Her voice and her music, for children and adults, are amazing! Juanita has lots of great songs for kids, some of them particularly good for children learning Spanish as a second language. Her music exposes children to native-speaker pronunciation and has a strong cultural component, as it is closely tied to the musical traditions of Mexico and other Latin American countries. In addition, in her songbooks for Volumes 1 and 2 of Canta conmigo there is a teacher/parent guide that has dance, movement, and cultural explanations and suggestions.<span class='italic'>- Jennifer of<a href='https://www.spanishplayground.net/juanita-ulloa-songs-children-learning-spanish'>SpanishPlayground.com</a></span>" 
    },
    {
      albumName: 'Paz y Alegria',
      albumImage: "./../../assets/Images/JuanitaPhotos/products/paz-y-alegria.jpg"
    }
  ]

  constructor(private observableMedia: ObservableMedia) { }

  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }
  
  ngOnInit() {
  }

}
