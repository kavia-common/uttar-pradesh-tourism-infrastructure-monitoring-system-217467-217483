import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

/**
 * PUBLIC_INTERFACE
 * Projects component with list and simple creation form.
 */
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule]
})
export class ProjectsComponent {
  columns = [
    { key: 'name', header: 'Project' },
    { key: 'budget', header: 'Budget' },
    { key: 'status', header: 'Status' },
  ];
  data = [
    { name: 'Ayodhya Heritage Walk', budget: '₹2.1 Cr', status: 'In Progress' },
    { name: 'Varanasi Ghat', budget: '₹3.5 Cr', status: 'In Progress' },
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      budget: ['', Validators.required],
      description: ['']
    });
  }

  onFiles(files: any) {
    // integrate with backend upload later
    console.log('Selected files:', files);
  }

  submit() {
    if (this.form.invalid) return;
    // send to backend
    console.log('Project payload', this.form.value);
  }
}
