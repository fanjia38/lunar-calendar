import { Component } from '@angular/core';
import { FormatDate } from './format-date';
import solarLunar from 'solarLunar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '旧暦の日付を調べる';
  message: String;

  solarDate: FormatDate;
  lunarDate: FormatDate;
  nextDate: FormatDate;

  constructor() {
    this.setMessage();
  }

  submit(date: FormatDate) {
    this.solarDate = date;
    this.calcSolar2Lunar();
    this.calclunar2solar();
    this.setMessage();
  }

  calcSolar2Lunar() {
    if (typeof this.solarDate !== 'undefined') {
      const lunar = solarLunar.solar2lunar(this.solarDate.year, this.solarDate.month, this.solarDate.day);
      this.lunarDate = {
        year: lunar.lYear,
        month: lunar.lMonth,
        day: lunar.lDay
      };
    } else {
      this.lunarDate = undefined;
    }
  }

  calclunar2solar() {
    if (typeof this.lunarDate !== 'undefined' && this.lunarDate.year !== 2017) {
      const solar = solarLunar.lunar2solar(2017, this.lunarDate.month, this.lunarDate.day);
      this.nextDate = {
        year: solar.cYear,
        month: solar.cMonth,
        day: solar.cDay
      };
    } else {
      this.calclunar2solar = undefined;
    }
  }

  setMessage() {
    if (typeof this.lunarDate !== 'undefined') {
      this.message = `旧暦 ${this.lunarDate.year}年${this.lunarDate.month}月${this.lunarDate.day}日 です。`;

      if (typeof this.nextDate !== 'undefined') {
        this.message += `\nその日は、今年の ${this.nextDate.year}年${this.nextDate.month}月${this.nextDate.day}日 にあたります。`;
      }

    } else {
      this.message = '日付を入力してください。';
    }
  }

}
