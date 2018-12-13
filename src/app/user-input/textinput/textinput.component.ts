import { Component, OnInit } from '@angular/core'; 
import { textInputModel } from '../model/textInputModel';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css']
})
export class TextinputComponent implements OnInit {
  title = 'Simple Text Input';
  model:textInputModel =  new textInputModel(2,"Maruf","12345");

  constructor() { }

  isKeyUp = false 
  isBlur =false
  isMouseenter= false
  isClick= false
  isDoubleClick= false

  ngOnInit() {
  }

  onClick(){
    this.isClick = true
  }

  value = ''
  onKeyUp(evt : any){
    this.isKeyUp = true
    this.value = evt.target.value 
  }

  onBlur(evt : any){

    this.isBlur = true

  }
  onMouseenter(evt : any){
    this.isMouseenter =true

  }
  onDoubleClick(evt : any){
    this.isDoubleClick =true
  }

}
