import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'o-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  @Output() menuClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onMenuClick(){
    this.menuClick.emit(true);
  }
}
