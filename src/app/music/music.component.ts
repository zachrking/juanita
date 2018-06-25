import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  
  player: YT.Player;
  private id: Array<string> = ['QUXTr2Sf4Ik', 'KDbSLFdH1N4', 'VavEYvjbon0'];

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }


  constructor() {}

  ngOnInit() { }

}
