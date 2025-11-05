import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './widgets/file-upload/file-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableComponent } from './widgets/data-table/data-table.component';

// PUBLIC_INTERFACE
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [FileUploadComponent, DataTableComponent],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, FileUploadComponent, DataTableComponent]
})
export class SharedModule {}
