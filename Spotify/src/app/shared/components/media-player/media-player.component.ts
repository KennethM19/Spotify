import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { response } from 'express';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css',
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover:
      'https://lastfm.freetls.fastly.net/i/u/300x300/1a1cc9431ffacc1b7be877d61975dfc8.jpg',
    album: 'Gioly & Assia',
    name: 'BEBE (Oficial)',
    url: 'http://localhost/track.mp3',
    _id: 1,
  };
  lisObserver$: Array<Subscription>=[]
  constructor(private multimediaService: MultimediaService) {}
  ngOnInit(): void {
    const observer1$ = this.multimediaService.myObservable1$.subscribe(
      (responseOK) => {
        console.log('👍 El agua llegó perfecto!');
      },
      (responseFail) => {
        console.log('😭 Se tapó la tubería');
      }
    );
  }
  ngOnDestroy(): void {
      
  }
}
