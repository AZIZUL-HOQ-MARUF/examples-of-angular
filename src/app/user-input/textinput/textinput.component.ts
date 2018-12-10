import { Component, OnInit } from '@angular/core'; 
import { Model } from '../model/Model';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css']
})
export class TextinputComponent implements OnInit {
  title = 'Simple Text Input';
  model:Model =  new Model(2,"Maruf","12345");

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    alert("stated typing")
  }

}
