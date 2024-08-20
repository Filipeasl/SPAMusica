import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AlbunsService {
  private apiUrl = 'http://localhost:3000/cards';

  constructor() {}

  async GetCards(): Promise<{ title: string; text: string; img: string }[]> {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching cards:', error);
      return [];
    }
  }
}
