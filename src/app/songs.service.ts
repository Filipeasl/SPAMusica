import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private apiUrl = 'http://localhost:3000/songs';

  constructor() {}

  async getSongs(): Promise<{ title: string; duration: string }[]> {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching songs:', error);
      return [];
    }
  }
}