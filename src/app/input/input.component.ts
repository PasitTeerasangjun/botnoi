import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  num:string = '';
  getValue(){
    var result = parseInt(this.num);
    var count = 1;
    let output = "";
    console.log(result);
    for (var i = 1; i <= (result * 2) - 1; i++){
      for (var j = 0; j < count; j++){
        output += "*";
      }
      if(i < result){
        count++;
      }else{
        count--;
      }
      output += "<br>";
    }
    const out = document.getElementById("text") as HTMLParagraphElement;
    out.innerHTML = output;
    this.num = "";
  }

  reset(){
    let output = "";
    const out = document.getElementById("text") as HTMLParagraphElement;
    out.innerHTML = output;
    this.num = "";
  }
}
