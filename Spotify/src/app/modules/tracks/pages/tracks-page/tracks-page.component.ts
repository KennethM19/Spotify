import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css',
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor(private trackService: TrackService) {}
  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataRandom();
  }
  async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise();
  }

  loadDataRandom(): void {
    this.trackService.getAllRandom$()
    .subscribe((response: TrackModel[]) => {
    this.tracksRandom = response
    })
    }
    

  ngOnDestroy(): void {}
}
