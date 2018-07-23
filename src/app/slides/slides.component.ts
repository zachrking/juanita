import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatGridList } from '@angular/material';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {
  @ViewChild('grid') grid: MatGridList;

  gridByBreakpoint = {
    xl: 6,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
  }

  breakpoint: number;
  images: Array<string>;

  constructor(private _http: HttpClient, private observableMedia: ObservableMedia,) {}

  ngOnInit() {
    this.images = ["../assets/Images/JuanitaPhotos/juanitaLrg.jpg",
    "../assets/Images/JuanitaPhotos/headshot2009greendrss.jpeg",
    "../assets/Images/JuanitaPhotos/Grito_JU y mariachi Cuauhtemoc.JPG",
    "../assets/Images/JuanitaPhotos/IMG_1342.jpeg",
    "../assets/Images/JuanitaPhotos/J Ulloa sausalito 2.jpeg",
    "../assets/Images/JuanitaPhotos/Juanita La risa natural.jpg",
    "../assets/Images/JuanitaPhotos/Juanita_goesfree 1400.jpeg",
    "../assets/Images/JuanitaPhotos/Xmas foto JU.jpeg"]
  }

  // ngAfterContentInit() {
  //   this.observableMedia.asObservable().subscribe((change: MediaChange) => {
  //     this.grid.cols = this.gridByBreakpoint[change.mqAlias];
  //   });
  }

}
