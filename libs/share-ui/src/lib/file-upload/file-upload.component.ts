import { Component, ElementRef,  ViewChild, Input } from '@angular/core';
import { STATUS_NOTIFY_TYPE } from '@dkaccess/share-utils';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { FileUploadService } from '@dkaccess/share-service';
import { CommonHelper } from '@dkaccess/share-utils';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @ViewChild('inputFileUpload') inputFileUpload: ElementRef | any;
  @Input() requiredFileType: string[] = [];

  constructor(private commonHelper: CommonHelper, private fileUploadSvc: FileUploadService) {}

  changeFile(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      const file = this.getFile(event.target.files[i]);
      if (file) {
        this.fileUploadSvc.selectionFileChange$.next({ file: file });
      } else {
        this.fileUploadSvc.selectionFileChange$.next({ file: null });
      }
    }
  }

  getFile(file: any) {
    if (file) {
      return this.validateFile(file);
    } else {
      return null;
    }
  }

  validateFile(file: any) {
    const name = file.name.toLowerCase();
    const extension = name.substring(name.lastIndexOf('.'));
    const maxSizeMegabyte = 5;
    const maxSizeByte = maxSizeMegabyte * 1048576;
    if (this.requiredFileType?.indexOf(extension) === -1) {
      this.commonHelper.showToast(
        'Chỉ upload file có đuôi: ' + this.requiredFileType.join(', '),
        STATUS_NOTIFY_TYPE.ERROR,
      );
    } else if (file.size > maxSizeByte) {
      this.commonHelper.showToast(
        'File phải bé hơn ' + maxSizeMegabyte + ' MB!',
        STATUS_NOTIFY_TYPE.ERROR,
      );
    } else {
      return file;
    }
  }
}
