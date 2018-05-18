import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-input-compnent',
  templateUrl: './input-compnent.component.html',
  styleUrls: ['./input-compnent.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCompnentComponent),
      multi: true
    }
  ]
})
export class InputCompnentComponent implements ControlValueAccessor {

  @Input() label = 'input';
  @Input() type = 'text';
  @Input() placeholder = 'placeholder';
  @Input('value') _value;

  onChange: any = () => { };
  onTouched: any = () => { };

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) { 
    this.onTouched = fn;
  }

  writeValue(value) {
    this.value = value;
  }

  inputChanged(event) {
    this.value = event.currentTarget.value;
  }
}