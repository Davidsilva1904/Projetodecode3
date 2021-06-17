import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jad-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isDisplay = false;
  toggleDisplay(){
    this.isDisplay = !this.isDisplay;
  }
 
  constructor() { }
  
 
  ngOnInit(): void {
  }

}
