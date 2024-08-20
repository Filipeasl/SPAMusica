import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SongsComponent implements OnInit {
  songs: { title: string; duration: string }[] = [];

  constructor(private songsService: SongsService) {}

  ngOnInit(): void {
    this.songsService.getSongs().then((songs) => {
      this.songs = songs;
    }).catch(error => {
      console.error('Error loading songs:', error);
    });
  }
}