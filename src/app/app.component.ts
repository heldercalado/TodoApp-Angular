import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular ToDo';
  name: string = 'Helder';
  constructor() {
    this.changeName('Dude');
  }
  changeName(name: string): void {
    console.log(`Old Name: ${this.name}`);

    this.name = name;
    console.log(`New Name: ${this.name}`);
  }
}
