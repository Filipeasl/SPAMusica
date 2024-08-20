import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbunsService } from '../albuns.service';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class AlbunsComponent implements OnInit {
  cards: { title: string; text: string; img: string }[] = [];
  chunkedCards: { title: string; text: string; img: string }[][] = [];

  constructor(private albunsService: AlbunsService) {}

  ngOnInit(): void {
    this.albunsService.GetCards().then((cards) => {
      this.cards = cards;
      this.chunkedCards = this.chunkArray(this.cards, 3);
    }).catch(error => {
      console.error('Error loading cards:', error);
    });
  }

  chunkArray(array: { title: string; text: string; img: string }[], size: number): { title: string; text: string; img: string }[][] {
    const chunkedArr: { title: string; text: string; img: string }[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  }
}
