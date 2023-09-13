import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  inputValue: string = '';
  displayValue: string = '';

  updateDisplay() {
    this.displayValue = this.inputValue;}
}
