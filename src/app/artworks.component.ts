import {Component, OnInit} from '@angular/core';
import { Router }            from '@angular/router';

import {Artwork} from './artwork';
import {ArtworkService} from './artwork.service';

@Component({
  moduleId: module.id,
  selector: 'my-artworks',
  providers: [ArtworkService],
  templateUrl: 'artworks.component.html',
  styleUrls: [ 'artworks.component.css' ]
})

export class ArtworksComponent implements OnInit{
  title = "Family";
  artworks: Artwork[];
  selectedHero: Artwork;

  constructor(
    private router: Router,
    private artworkService: ArtworkService) { }

  getArtworks(): void {
    this.artworkService.getArtworks().then(heroes => this.artworks = heroes); //promise from artwork.service
  }

  ngOnInit(): void {
    this.getArtworks();
  }

  onSelect(hero: Artwork): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.artworkService.create(name)
      .then(hero => {
        this.artworks.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Artwork): void {
    this.artworkService
      .delete(hero.id)
      .then(() => {
        this.artworks = this.artworks.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

}



