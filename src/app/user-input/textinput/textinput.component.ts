import { Component, OnInit } from '@angular/core'; 
import { Model } from '../model/Model';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css']
})
export class TextinputComponent implements OnInit {
  title = 'Text Input first'
  model:Model = {
    id : 1,
    name: 'Maruf'
  }

  constructor() { }

  ngOnInit() {
  }

}
