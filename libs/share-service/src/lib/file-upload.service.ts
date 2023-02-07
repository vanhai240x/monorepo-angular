import { HttpClient } from '@angular/common/http';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { FileUploadComponent } from '@dkaccess/share-ui';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  fileUploadComp!: ComponentRef<FileUploadComponent>;
  selectionFileChange$ = new BehaviorSubject({ file: null });

  constructor(
    private factoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    public httpClient: HttpClient,
  ) {}

  showFileBrowser(requiredFileType?: string[]) {
    if (this.fileUploadComp) {
      this.removeFileUploadCompFromBody();
    }
    this.appendFileUploadCompToBody();
    this.fileUploadComp.setInput('requiredFileType', requiredFileType);
    setTimeout(() => {
      document.getElementById('inputFileUpload')?.click();
    }, 1);
  }

  removeFileUploadCompFromBody() {
    this.appRef.detachView(this.fileUploadComp.hostView);
    this.fileUploadComp.destroy();
  }

  appendFileUploadCompToBody() {
    const componentFactory = this.factoryResolver.resolveComponentFactory(FileUploadComponent),
      componentRef = componentFactory.create(this.injector),
      domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    this.appRef.attachView(componentRef.hostView);
    document.body.appendChild(domElem);
    this.fileUploadComp = componentRef;
  }

  // uploadImage(file: File, name: string) {
  //   const formData: FormData = new FormData();
  //   formData.append('File', file);
  //   formData.append('Name', name);
  //   formData.append('Application', APP_CODE_UPLOAD);
  //   return this.httpClient.post(`${API_SERVICES.UPLOAD_IMAGE}`, formData);
  // }

  // uploadDocs(file: File, name: string) {
  //   const formData: FormData = new FormData();
  //   formData.append('File', file);
  //   formData.append('Name', name);
  //   formData.append('Application', APP_CODE_UPLOAD);
  //   return this.httpClient.post(`${API_SERVICES.UPLOAD_DOCS}`, formData);
  // }

  uploadFile(type: string, file: File, name: string, appCodeUpload: string, apiUrl: string) {
    const formData: FormData = new FormData();
    formData.append('File', file);
    formData.append('Name', name);
    formData.append('Application', appCodeUpload);
    return this.httpClient.post(`${apiUrl}`, formData);
  }

  updateDocs(id: string, name: string, apiUrl: string) {
    return this.httpClient.put(`${apiUrl}`, { id, name });
  }
}
