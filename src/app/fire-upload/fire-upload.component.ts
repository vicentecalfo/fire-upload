import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ez-fire-upload',
  templateUrl: './fire-upload.component.html',
  styleUrls: ['./fire-upload.component.scss']
})
export class FireUploadComponent implements OnInit {

  files: File[] = [];

  constructor() { }

  ngOnInit() {
  }

  handlerFileInput(event: any) {
    Object.keys(event.target.files).forEach(key => {
      const file = event.target.files[key];
      this.files.push(file);
    });
  }


}
