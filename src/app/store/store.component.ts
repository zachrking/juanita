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
      albumImage: "./../../assets/Images/JuanitaPhotos/CantaMiSon.jpg",
      albumDescription: `"Juanita’s latest CD of music for children, '¡Canta mi son!', has won a National Association 
       of Parenting Products Gold award and a Disney iParenting Media award. Her voice and her music, for children and adults,
       are amazing! Juanita has lots of great songs for kids, some of them particularly good for children learning Spanish as a second language. 
       Her music exposes children to native-speaker pronunciation and has a strong cultural component, as it is closely tied to the musical traditions
       of Mexico and other Latin American countries. In addition, in her songbooks for Volumes 1 and 2 of Canta conmigo there is a teacher/parent guide 
       that has dance, movement, and cultural explanations and suggestions."<br><span class='italic'>- Jennifer of
       <a href='https://www.spanishplayground.net/juanita-ulloa-songs-children-learning-spanish'>SpanishPlayground.com</a>`
    },
    {
      albumName: 'Paz y Alegria',
      albumImage: "./../../assets/Images/JuanitaPhotos/PazYAlegria.jpg",
      albumDescription: `"In "Paz y Alegria” (Peace & Joy), her new album, she sings of a peace and joy that embraces all religion. 
       Juanita endeavors to make her lyrics seem like part of her emotional biography, drawing out a note until it seems exhausted, 
       then punctuating it with a lyrical catch in her throat that sounds like the small sobs of a strong woman, or sometimes it is 
       closer to the full-throttle glottal attack of a Linda Ronstadt. Sometimes Juanita slows down the tempo, teases out the vowel 
       sounds, adds a huapango twist of a rhythm from Mexico or a fandango beat from Spain, or the big band sound from the forties,  
       or a fiery Lando rhythm from the Afro-Peruvian culture." <br><span class='italic'>- Elena del Valle of 
       <a href='https://www.hispanicmpr.com/2005/10/14/juanita-ulloa%E2%80%99s-new-christmas-album-paz-y-alegria-creates-a-new-%E2%80%9Coperachi%E2%80%9D-sound/'>
       HispanicMPR.com</a>`
    },
    {
      albumName: 'Mujeres y Mariachi',
      albumImage: './../../assets/Images/JuanitaPhotos/ulloa5.jpg',
      albumDescription: `things!`
    },
    {
      albumName: 'Lamento Gitano',
      albumImage: './../../assets/Images/JuanitaPhotos/juanitaulloa2.jpg',
      albumDescription: `things!`
    },
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
