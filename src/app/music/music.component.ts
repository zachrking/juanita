import { Component, OnInit, ViewChild } from '@angular/core';
import { MatGridList } from '@angular/material';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { NgxSpinnerService } from 'ngx-spinner';




@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  @ViewChild('grid') grid: MatGridList;

  gridByBreakpoint = {
    xl: 6,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
  }
  
  videoCount : number = 0;
  breakpoint: number;

  videos1: any[] = [
    {
      title: 'Mujeres, Mariachi y Mexico (Introduccion)',
      video: 'https://www.youtube.com/embed/HYRWHmVBPmM'
    },
    {
      title: 'Malaguena Salerosa',
      video: 'https://www.youtube.com/embed/1ONWFsijEos'
    },
    {
      title: 'Gringa Chilanga',
      video: 'https://www.youtube.com/embed/H_qYSz-eka0'
    },
    {
      title: 'Cuando Canto',
      video: 'https://www.youtube.com/embed/cvdQDBYM5D8'
    },
    {
      title: 'Mil Besos',
      video: 'https://www.youtube.com/embed/e3UUbbtMGxI'
    },
    {
      title: 'Crucifijo de Piedra',
      video: 'https://www.youtube.com/embed/HruOT8HOyYo'
    },
  ]

  onScroll() {
    console.log('scrolled!!');
    this.spinner.show();

    if (this.videoCount <= 17) {
      this.addVideos()
    } else {
      this.spinner.hide();
    }

  }

  addVideos() {

    setTimeout(() => {
      /** spinner ends after 5 seconds */
        this.spinner.hide();
        }, 1000);

    this.videoCount ++;

    console.log(this.videoCount)

    if (this.videoCount === 1) {
      let videos1 = this.videos1.push({
        title: 'Solo Nos Queda Hoy',
        video: 'https://www.youtube.com/embed/CIRz_GJ-Mcg'
        },{
        title: 'La Voz de Mujer (Concierto para una sola voz)',
        video: 'https://www.youtube.com/embed/HsdVLj2RE8A'
        },{
        title: 'Ya no Vuelvo / Que te vaya Bien',
        video: 'https://www.youtube.com/embed/e1gpXF2569M'
        },)
    }
    
    if (this.videoCount === 2) {
      let videos2 = this.videos1.push({
        title: 'Huapango Enamorado',
        video: 'https://www.youtube.com/embed/zeVXwapOtFo'
        },{
        title: 'El Pastor',
        video: 'https://www.youtube.com/embed/JC0Rou4Dqog'
        },{
        title: 'Vivo Anorando',
        video: 'https://www.youtube.com/embed/1z1b-stjkN0'
        },)
    }

    if (this.videoCount === 3) {
      let videos2 = this.videos1.push({
        title: 'Canta mi son! (Sing my song)',
        video: 'https://www.youtube.com/embed/UfXJcnq_-LQ'
        },{
        title: "Vamos a la fiesta (Let's go to the Party)",
        video: 'https://www.youtube.com/embed/ouhrjY7K5Pc'
        },{
        title: 'En Tejas hay buen mariachi (Texas has great mariachi)',
        video: 'https://www.youtube.com/embed/5Qzt3weouok'
        },)
    }

    if (this.videoCount === 4) {
      let videos2 = this.videos1.push({
        title: 'Corazon de Chapulin (Heart of a Grasshopper)',
        video: 'https://www.youtube.com/embed/ceMyG0r4TZA'
        },{
        title: 'Paloma blanca (White Dove)',
        video: 'https://www.youtube.com/embed/KDbSLFdH1N4'
        },{
        title: 'Las gaviotas (The Seagulls)',
        video: 'https://www.youtube.com/embed/jPITYPFc7RY'
        },)
    }
    if (this.videoCount === 5) {
      let videos2 = this.videos1.push({
        title: 'Mariachi infantil (Youth Mariachi)',
        video: 'https://www.youtube.com/embed/jDLqzn8QT48'
        },{
        title: 'Rancho alegre (Happy Ranch)',
        video: 'https://www.youtube.com/embed/ZP1dGIGwyHc'
        },{
        title: 'Arrurru Tejano (Texas Lullaby)',
        video: 'https://www.youtube.com/embed/3FBFI9ckoVA'
        },)
      }
    if (this.videoCount === 6) {
      let videos2 = this.videos1.push({
        title: 'La carita (The cute little Face)',
        video: 'https://www.youtube.com/embed/8-05ngvsLIQ'
        },{
        title: "Como Mexico no hay dos (There's nothing like Mexico)",
        video: 'https://www.youtube.com/embed/ZP1dGIGwyHc'
        },{
        title: 'El Guajolote goloso (The Turkey who ate like a pig)',
        video: 'https://www.youtube.com/embed/lZQOhSB6Lls'
        },)
      }
    if (this.videoCount === 7) {
      let videos2 = this.videos1.push({
        title: 'A la medianoche (At Midnight)',
        video: 'https://www.youtube.com/embed/jVCixgeCapI'
        },{
        title: "Canto a la paz (Sing for Peace)",
        video: 'https://www.youtube.com/embed/cMLe9UZeGcU'
        },{
        title: 'Alegria (Happiness)',
        video: 'https://www.youtube.com/embed/_TilHoa_acY'
        },)
      }
    if (this.videoCount === 8) {
      let videos2 = this.videos1.push({
        title: 'Baby Santa',
        video: 'https://www.youtube.com/embed/MxI186H_tyM'
        },{
        title: "Ocho Kandelikas (8 Candles)",
        video: 'https://www.youtube.com/embed/8-MHAwDQZKQ'
        },{
        title: 'Noche de Paz (Silent Night)',
        video: 'https://www.youtube.com/embed/Hio4rhIML8k'
        },)
      }
    if (this.videoCount === 9) {
      let videos2 = this.videos1.push({
        title: 'Campana sobre Campana (Pealing Bells)',
        video: 'https://www.youtube.com/embed/CvL-RsSrWA8'
        },{
        title: "Fum Fum Fum",
        video: 'https://www.youtube.com/embed/4ME4yBp5RHA'
        },{
        title: 'Surabaya Santa (composed by Jason Robert Brown)',
        video: 'https://www.youtube.com/embed/lNLrSVxs0_0'
        },)
      }
    if (this.videoCount === 10) {
      let videos2 = this.videos1.push({
        title: 'Noche Inmortal (O Holy Night)',
        video: 'https://www.youtube.com/embed/VX0rwpLIwrs'
        },{
        title: "Los Peces en el Rio (The Fish in the River)",
        video: 'https://www.youtube.com/embed/v6zB5jN5qLw'
        },{
        title: 'Canta Conmigo',
        video: 'https://www.youtube.com/embed/ogmBbOqAbyQ'
        },)
      }
    if (this.videoCount === 11) {
      let videos2 = this.videos1.push({
        title: '?Como Estas Amigo?',
        video: 'https://www.youtube.com/embed/LmhmrjuDFsY'
        },{
        title: "Palmita de Ojos Negros",
        video: 'https://www.youtube.com/embed/hPjt7hy-mk8'
        },{
        title: 'Las Mananitas',
        video: 'https://www.youtube.com/embed/K-HyteSY3pU'
        },)
      }
    if (this.videoCount === 12) {
      let videos2 = this.videos1.push({
        title: 'La Adelita',
        video: 'https://www.youtube.com/embed/Vo44VDzuMls'
        },{
        title: "Panamanian Medley",
        video: 'https://www.youtube.com/embed/nYT35zCyEgY'
        },{
        title: 'Al Tambor de la Alegria',
        video: 'https://www.youtube.com/embed/Cl8JRERHyNk'
        },)
      }
    if (this.videoCount === 13) {
      let videos2 = this.videos1.push({
        title: 'Gatito',
        video: 'https://www.youtube.com/embed/-ksFKlobj9w'
        },{
        title: "Wow-Wow-Wow",
        video: 'https://www.youtube.com/embed/z7SL9yfcfQI'
        },{
        title: 'Tengo Quince Anos',
        video: 'https://www.youtube.com/embed/E7Sz0HaGvqU'
        },)
      }
    if (this.videoCount === 14) {
      let videos2 = this.videos1.push({
        title: 'Tengo Veinte Dedos',
        video: 'https://www.youtube.com/embed/niUIRjohJJg'
        },{
        title: "La Carita",
        video: 'https://www.youtube.com/embed/lHcktvOgQb0'
        },{
        title: 'Vamos a la Fiesta',
        video: 'https://www.youtube.com/embed/wDsJDWrV8zk'
        },)
      }
    if (this.videoCount === 15) {
      let videos2 = this.videos1.push({
        title: 'Para Bailar un Vals',
        video: 'https://www.youtube.com/embed/VavEYvjbon0'
        },{
        title: "La Huerfana Llamita",
        video: 'https://www.youtube.com/embed/1xCEKUgVqvI'
        },{
        title: 'Origin of Rain',
        video: 'https://www.youtube.com/embed/eLHtWjiKq78'
        },)
      }
    if (this.videoCount === 16) {
      let videos2 = this.videos1.push({
        title: 'La Lluvia',
        video: 'https://www.youtube.com/embed/S0C2G9_mzno'
        },{
        title: "Somos Amigos",
        video: 'https://www.youtube.com/embed/Cmd525UYp1I'
        },{
        title: 'A Dormir',
        video: 'https://www.youtube.com/embed/YN0EMu0M44M'
        },)
      }
    if (this.videoCount === 17) {
      let videos2 = this.videos1.push({
        title: '32 non vocal tracks',
        video: 'https://www.youtube.com/embed/F7zBLz-XPOo'
        },{
        title: "Siboney",
        video: 'https://www.youtube.com/embed/h5OVGFxG31Q'
        },{
        title: 'Te llevo en mi piel',
        video: 'https://www.youtube.com/embed/7mZNFEuVEXQ'
        },)
      }
    if (this.videoCount === 18) {
      let videos2 = this.videos1.push({
        title: 'Canto Negro',
        video: 'https://www.youtube.com/embed/7kVMS75uCe8'
        },{
        title: "Alfonsina y el mar",
        video: 'https://www.youtube.com/embed/9_2Sku3Uxek'
        },{
        title: 'Evita',
        video: 'https://www.youtube.com/embed/zeNQAka645g'
        },)
      }
    if (this.videoCount === 19) {
      let videos2 = this.videos1.push({
        title: 'Someone to Watch over me',
        video: 'https://www.youtube.com/embed/HkXoPKVvvVE'
        },{
        title: "Alfonsina y el mar",
        video: 'https://www.youtube.com/embed/9_2Sku3Uxek'
        },{
        title: 'Evita',
        video: 'https://www.youtube.com/embed/zeNQAka645g'
        },)
      }   
    else return;
  }

  constructor(private observableMedia: ObservableMedia, private spinner: NgxSpinnerService) {}

  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }

  ngOnInit() {
  /** spinner starts on init */
  this.spinner.show();

  setTimeout(() => {
  /** spinner ends after 5 seconds */
    this.spinner.hide();
    }, 3000);
  }

}
