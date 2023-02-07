import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements AfterViewInit {
  @ViewChild('matSelect') matSelect!: MatSelect;
  @ViewChild('allSelected') allSelected!: MatOption<ElementRef>;
  @Input() title = '';
  @Input() error = '';
  @Input() options: {
    id: string;
    name: string;
  }[] = [];
  @Input() enableSelectAll = false;
  @Input() set validators(validate: unknown) {
    this.selected.addValidators(validate);
  }

  @Input() set isClearFilter(value: number) {
    if (value) {
      this.prevSelectedValue = [];
      if (value) this.selected.setValue(null);
    }
  }

  @Output() checkboxChange = new EventEmitter();
  @Input() selected: any = new FormControl(null);
  readonly Validators = Validators;
  prevSelectedValue: string[] = [];

  ngAfterViewInit(): void {
    this.matSelect._closedStream.subscribe(() => {
      const prevValue = JSON.stringify(this.prevSelectedValue);
      const currValue = JSON.stringify(this.selected.value);
      if (this.selected.value && prevValue !== currValue) {
        this.prevSelectedValue = [...this.selected.value];
        this.checkboxChange.emit(this.selected.value);
      }
    });
  }

  togglePerOne() {
    if (this.enableSelectAll) {
      if (this.allSelected.selected) {
        this.allSelected.deselect();
      }
      if (this.selected.value.length === this.options.length) {
        this.allSelected.select();
        let selectedArr = this.selected.value.shift();
        selectedArr = [...this.options.map((option) => option.id), 'all'];
        this.selected.setValue(selectedArr);
      }
    }
  }

  toggleAllSelection() {
    if (this.allSelected.selected) {
      const selectedArr = [...this.options.map((option) => option.id), 'all'];
      this.selected.setValue(selectedArr);
    } else {
      this.selected.setValue(null);
    }
  }

  clearCheckbox(matSelect: MatSelect) {
    this.selected.setValue(null);
    matSelect.close();
    this.checkboxChange.emit(this.selected.value);
  }
}
