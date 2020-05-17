import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { CardInput } from 'src/model/CardInput';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss']
})
export class InputCardComponent implements OnInit {

  @Input()
  input: CardInput;

  @Input()
  index: number;

  @ViewChild('myInput') formInput;

  @Output()
  inputEmitter: EventEmitter<boolean> = new EventEmitter();

  fill: string = "assets/icons/fill.svg";
  error: string = "assets/icons/error.svg";
  success: string = "assets/icons/success.svg";

  state: string = this.fill;

  isError: boolean = false;
  isSuccess: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.input?.formControl.valueChanges.subscribe(change => {
      this.setState();
    });
  }

  setSuccess() {
    this.state = this.success;
  }

  setError() {
    this.state = this.error;
  }

  setFill() {
    this.state = this.fill;
  }

  focus() {
    this.formInput.nativeElement.focus();
  }

  setState() {
    if (this.input.formControl.invalid && this.input.formControl.touched) {
      this.isError = true;
      this.isSuccess = false;
      this.setError();
    }

    else if (this.input.formControl.valid) {
      this.isError = false;
      this.isSuccess = true;
      this.setSuccess();
    }

    else {
      this.isError = false;
      this.isSuccess = false;
      this.setFill();
    }
  }

  onBlur() {
    this.inputEmitter.emit();
    this.setState();
  }

}
