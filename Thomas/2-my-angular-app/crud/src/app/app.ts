import { Component, signal, input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Portofolio } from './components/portofolio/portofolio';
import { Greetings } from './components/greetings/greetings';
import { Counter } from './components/counter/counter';

@Component({
  selector: 'app-root',
  imports: [Header,Greetings,RouterOutlet,Portofolio],
  templateUrl: './app.html',
  styleUrl: './app.css',
  // template: `<h1>fuckumean</h1>`
})
export class App {
  protected readonly title = signal('newProject');
  homeMessage = signal("hello world from App component")
  headerMessage= signal("Home");

  keyUpHandler(event: KeyboardEvent){

    console.log(`${event.key}`);
    
  }

  // keyUpHandler(event: Event): void{

  //   console.log ((event.target as HTMLInputElement).value);
    
  // }

}
