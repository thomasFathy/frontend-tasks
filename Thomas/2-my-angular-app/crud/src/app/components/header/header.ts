import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodosService } from '../../services/todos';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
  providers:[TodosService]
})
export class Header {
title = input();


}
