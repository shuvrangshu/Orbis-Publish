import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild("sidenav") sidenav: any;
  constructor() { }

  ngOnInit(): void {
  }

  menuToggleClick(value) {
    console.log(value);
    this.sidenav.toggle();
  }
}
