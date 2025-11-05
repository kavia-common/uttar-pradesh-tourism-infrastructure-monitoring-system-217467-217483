import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * PUBLIC_INTERFACE
 * Reusable file upload component that emits selected File(s).
 */
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  standalone: false
})
export class FileUploadComponent {
  @Input() multiple = false;
  @Input() accept = '*/*';
  @Input() label = 'Upload file';
  @Output() filesSelected = new EventEmitter<any>();

  onFilesChange(ev: any) {
    const target = ev && ev.target ? ev.target as any : null;
    const files = target && typeof target.files !== 'undefined' ? target.files : null;
    if (files) {
      this.filesSelected.emit(files);
    }
  }

  onDrop(ev: any) {
    if (ev?.preventDefault) ev.preventDefault();
    const files = ev?.dataTransfer?.files;
    if (files && files.length) {
      this.filesSelected.emit(files);
    }
  }

  onDragOver(ev: any) {
    if (ev?.preventDefault) ev.preventDefault();
  }
}
