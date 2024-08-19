import { Component } from '@angular/core';
import { AlbunsComponent } from '../albuns/albuns.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [AlbunsComponent, FooterComponent], // Importing the standalone component
  standalone: true, // Mark HomeComponent as standalone if it's standalone
})
export class HomeComponent {}
