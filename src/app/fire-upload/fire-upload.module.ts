import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSizeModule } from 'ngx-filesize';
import { FireUploadComponent } from './fire-upload.component';
import { UploaderComponent } from './uploader/uploader.component';
import { TruncateFilenamePipe } from './truncate-filename.pipe';

@NgModule({
  declarations: [FireUploadComponent, UploaderComponent, TruncateFilenamePipe],
  imports: [
    CommonModule,
    FileSizeModule
  ],
  exports: [
    FireUploadComponent
  ]
})
export class FireUploadModule { }
