/**
 * Created by simonletort on 2/22/17.
 */
import {Component, OnInit} from '@angular/core';

import { Artwork } from './artwork';
import { ArtworkService } from './artwork.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  artworks: Artwork[] = [];

  constructor(private artworkService: ArtworkService) { }

  ngOnInit(): void {
    this.artworkService.getArtworks()
      .then(artworks => this.artworks = artworks.slice(1, 5));
  }
}
