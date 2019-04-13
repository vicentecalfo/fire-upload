import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { registerContentQuery } from '@angular/core/src/render3';

@Component({
  selector: 'ez-fu-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['../fire-upload.component.scss']
})
export class UploaderComponent implements OnInit {

  @Input() file: File;
  @Input() storagePath: string;
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  color = Math.floor(Math.random() * 16777215).toString(16);
  cancelled = false;
  icon: string;
  customIcons = {
    gif: 'far fa-file-image',
    jpg: 'far fa-file-image',
    jpeg: 'far fa-file-image',
    png: 'far fa-file-image',
    pdf: 'far fa-file-pdf',
    mp4: 'far fa-file-video',
    javascript: 'far fa-file-code',
    ts: 'far fa-file-code',
    css: 'far fa-file-code',
    msword: 'far fa-file-word',
    file: 'far fa-file'
  };

  constructor(
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.upload();
  }

  upload() {
    const fileType = this.file.type.split('/').pop();
    this.icon = this.customIcons.hasOwnProperty(fileType) ? this.customIcons[fileType] : this.customIcons.file;
    const path = `${this.storagePath}${Date.now()}_${this.file.name}`;
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, this.file);
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      finalize(
        async () => {
          const url = await ref.getDownloadURL().toPromise();
          await this.storage.storage.refFromURL(url).delete();
          console.log(`Arquivo removido. Este upload é apenas para demonstração.`);
        }
      )
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  cancel() {
    this.task.cancel();
    this.cancelled = true;
  }

}
