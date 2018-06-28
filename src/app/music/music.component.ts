import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  
  videoCount : number = 0;

  videos1: any[] = [
    {
      title: 'Los Peces en el Rio',
      video: 'https://www.youtube.com/embed/QUXTr2Sf4Ik'
    },
    {
      title: 'Paloma blanca (White Dove)',
      video: 'https://www.youtube.com/embed/KDbSLFdH1N4'
    },
    {
      title: 'Para Bailar un Vals',
      video: 'https://www.youtube.com/embed/VavEYvjbon0'
    },
    {
      title: 'La Huerfana Llamita',
      video: 'https://www.youtube.com/embed/1xCEKUgVqvI'
    },
    {
      title: 'Cuando Canto',
      video: 'https://www.youtube.com/embed/cvdQDBYM5D8'
    },
    {
      title: 'Malaguena Salerosa',
      video: 'https://www.youtube.com/embed/1ONWFsijEos'
    },

  ]

  onScroll() {
    console.log('scrolled!!');

    if (this.videoCount <= 5) {
      this.addVideos()
    }
  }

  addVideos() {

    this.videoCount ++;

    console.log(this.videoCount)

    if (this.videoCount === 1) {
      let videos1 = this.videos1.push({
        title: 'Viva Anorando',
        video: 'https://www.youtube.com/embed/1z1b-stjkN0'
        },{
        title: 'Lamento Gitano',
        video: 'https://www.youtube.com/embed/uZWs5zNUcE4'
        },{
        title: 'Mariachi infantil (Youth Mariachi)',
        video: 'https://www.youtube.com/embed/jDLqzn8QT48'
        },)
    }
    
    if (this.videoCount === 2) {
      let videos2 = this.videos1.push({
        title: '10',
        video: 'https://www.youtube.com/embed/1z1b-stjkN0'
        },{
        title: '11',
        video: 'https://www.youtube.com/embed/uZWs5zNUcE4'
        },{
        title: '12',
        video: 'https://www.youtube.com/embed/jDLqzn8QT48'
        },)
    }

    if (this.videoCount === 3) {
      let videos2 = this.videos1.push({
        title: '13',
        video: 'https://www.youtube.com/embed/1z1b-stjkN0'
        },{
        title: '14',
        video: 'https://www.youtube.com/embed/uZWs5zNUcE4'
        },{
        title: '15',
        video: 'https://www.youtube.com/embed/jDLqzn8QT48'
        },)
    }

    if (this.videoCount === 4) {
      let videos2 = this.videos1.push({
        title: '16',
        video: 'https://www.youtube.com/embed/1z1b-stjkN0'
        },{
        title: '17',
        video: 'https://www.youtube.com/embed/uZWs5zNUcE4'
        },{
        title: '18',
        video: 'https://www.youtube.com/embed/jDLqzn8QT48'
        },)
    }
    if (this.videoCount === 5) {
      let videos2 = this.videos1.push({
        title: '19',
        video: 'https://www.youtube.com/embed/1z1b-stjkN0'
        },{
        title: '20',
        video: 'https://www.youtube.com/embed/uZWs5zNUcE4'
        },{
        title: '21',
        video: 'https://www.youtube.com/embed/jDLqzn8QT48'
        },)
      }
    else return;
  }

  constructor() {}

  ngOnInit() { }

}
