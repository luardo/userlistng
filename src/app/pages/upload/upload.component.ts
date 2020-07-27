import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  fileToUpload: File = null;
  error: string;
  uploadFileSuccess: boolean;

  constructor() {
  }

  ngOnInit() {
    this.uploadFileSuccess = false;
  }

  get isFileSelected() {
    return !!this.fileToUpload;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }

  upload() {
    this.error = null;

    if (!this.fileToUpload) {
      this.error = 'Please select a file';
    }

    if (!this.fileToUpload.type.match('image')) {
      this.error = 'Only images allowed';
    }

    if (this.fileToUpload.size > 500000000) {
      this.error = 'Only images allowed';
    }

    this.uploadFileSuccess = !this.error;
  }
}
