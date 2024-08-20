import { Component } from '@angular/core';
import { AlbunsComponent } from '../albuns/albuns.component';
import { FooterComponent } from '../footer/footer.component';
import { SongsComponent } from "../songs/songs.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [AlbunsComponent, FooterComponent, SongsComponent],
  standalone: true,
})
export class HomeComponent {

}
