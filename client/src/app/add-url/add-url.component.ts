import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrls: ['./add-url.component.css'],
})
export class AddUrlComponent implements OnInit {
  @Output() onAddUrl: EventEmitter<string> = new EventEmitter();
  text!: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please enter a url');

      return;
    }

    this.onAddUrl.emit(this.text);

    this.text = '';
  }
}
