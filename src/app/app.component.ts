import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'orbis-client';

  @ViewChild("sidenav") sidenav: any;
  menuToggleClick(value) {
    console.log(value);
    this.sidenav.toggle();
  }

}
