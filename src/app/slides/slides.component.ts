import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {

  images: Array<string>;

  constructor(private _http: HttpClient) {}

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

}
