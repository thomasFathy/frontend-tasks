import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  projects = [
    { name: 'Project One', description: 'Awesome project one', image: 'assets/project1.png', link: '#' },
    { name: 'Project Two', description: 'Awesome project two', image: 'assets/project2.png', link: '#' }
  ];
}
