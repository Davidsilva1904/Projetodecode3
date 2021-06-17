import { Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';



@Component({
  selector: 'jad-button',
  templateUrl: './button.component.html', 
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  isDisplay = false;
  toggleDisplay(){
    this.isDisplay = !this.isDisplay;
  }
  constructor() {
  
  }

}


