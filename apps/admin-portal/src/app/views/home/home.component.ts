import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '@dkaccess/share-service';
import { skip } from 'rxjs';

@Component({
  selector: 'admin-portal-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  subscription: any;

  constructor(
    private fileUploadSvc: FileUploadService,
  ) {}

  ngOnInit(): void {
    // Subscribe input file change
    this.subscription = this.fileUploadSvc.selectionFileChange$
      .pipe(skip(1))
      .subscribe((res: { file: File | null }) => {
        if (res.file) {
          console.log(res.file);
          
        }
      });
  }

  onShowFileBrowser() {
    this.fileUploadSvc.showFileBrowser();
  }
}
