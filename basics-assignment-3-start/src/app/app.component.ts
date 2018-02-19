import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showPara = true;

  btnClicks = [];
  btnClickNum = 0;

  toggleDisplay() {
    this.btnClickNum++;
    this.btnClicks.push(this.btnClickNum);
    console.table(this.btnClicks);
    return this.showPara === true ? this.showPara = false : this.showPara = true;
  }

  getColor() {
    return 'blue';
  }
}
