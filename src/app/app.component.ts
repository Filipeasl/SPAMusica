import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SPAMusica';
}
