import { ViewEncapsulation, Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent{
  title = 'projetodecode';
  isDisplay = false;
  toggleDisplay(){
    this.isDisplay = !this.isDisplay;
  }
}
