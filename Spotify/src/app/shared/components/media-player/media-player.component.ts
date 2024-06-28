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
  
  lisObserver$: Array<Subscription>=[]
  state : string = 'paused'
  constructor(public multimediaService: MultimediaService) {}
  ngOnInit(): void {
    const observer1$ = this.multimediaService.playerStatus$.subscribe(status => this.state = status)
    this.lisObserver$ = [observer1$]
  }
  ngOnDestroy(): void {
      this.lisObserver$.forEach(s => s.unsubscribe());
  }
}
