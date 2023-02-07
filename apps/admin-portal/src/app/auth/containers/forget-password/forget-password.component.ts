import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { VALIDATION } from '@dkaccess/share-utils';
import { ValidationSvc } from '@dkaccess/share-service';
import { STATUS_NOTIFY_TYPE } from  '@dkaccess/share-utils';
import { CommonHelper } from '@dkaccess/share-utils';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  reactiveForm!: FormGroup;
  formErrors = {
    email: '',
  };

  validationMessages = {
    email: {
      required: VALIDATION.MAIL_REQUIRED,
      pattern: VALIDATION.MAIL_PATTERN,
    },
  };

  constructor(
    private _validationSvc: ValidationSvc,
    private authService: AuthService,
    private commonHelper: CommonHelper,
    private router: Router,
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.reactiveForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(this._validationSvc.pattern_email),
      ]),
    });
    this.reactiveForm.valueChanges.subscribe(() => {
      this._validationSvc.getValidate(this.reactiveForm, this.formErrors, this.validationMessages);
    });
  }

  public async onSubmit() {
    if (this.reactiveForm.invalid) {
      this.formErrors = this._validationSvc.checkErorrNotDiry(
        this.reactiveForm,
        this.formErrors,
        this.validationMessages,
      );
    }
    if (this.reactiveForm.valid) {
      const formValue = this.reactiveForm.value;
      this.commonHelper.blockUI();
      this.authService.sendPasswordResetEmail(formValue.email).subscribe(
        (result: any) => {
          if (result.data) {
            this.commonHelper.showToast(result.message, STATUS_NOTIFY_TYPE.SUCCESS);
          }
          this.commonHelper.unBlockUI();
        },
        (err) => {
          this.commonHelper.unBlockUI();
          this.commonHelper.showToast(err, STATUS_NOTIFY_TYPE.ERROR);
        },
      );
    }
  }
}
