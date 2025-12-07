import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Projects } from "./components/projects/projects";
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, Projects, Navbar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-portfolio');
}
