import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormatDate } from '../format-date';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  @Output() submit = new EventEmitter<FormatDate>();

  today = new Date();
  inputDate;

  constructor() { }

  ngOnInit() {
  }

  check() {
    if (typeof this.inputDate !== 'undefined') {
      const splitDate = this.inputDate.split('-');

      const date: FormatDate = {
        year: Number(splitDate[0]),
        month: Number(splitDate[1]),
        day: Number(splitDate[2]),
      };

      this.submit.emit(date);
    }
  }

}
