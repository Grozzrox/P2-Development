import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Brandons-Gaming-Emporium';

  public isCollapsed = false;

  onClick() { return !this.isCollapsed }
}
