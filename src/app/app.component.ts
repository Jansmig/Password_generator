import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;
  password: String = '';
  length = 0;

  onChangeUseLetters(){
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers(){
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols(){
    this.useSymbols = !this.useSymbols;
  }

  onChangeLength(value: string){
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onButtonClick(){

    if(!this.useLetters && !this.useNumbers && !this.useSymbols) {
      this.password = "select some checkbox!";
      return;
    }

    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';
    let chars = '';

    if(this.useLetters) {
      chars = chars + letters;
    };
    if(this.useNumbers) {
      chars = chars + numbers;
    }
    if(this.useSymbols) {
      chars = chars + symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[index]; 
    }
    this.password = generatedPassword;
  }

}
