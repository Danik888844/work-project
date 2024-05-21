import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../types/product.interface';

@Component({
  selector: 'app-product-form',
  styleUrl: './product-form.component.scss',
  templateUrl: './product-form.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,
    ReactiveFormsModule, MatDialogModule, CommonModule]
})
export class ProductFormComponent {
  form: FormGroup;
  isView: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProduct,
    private fb: FormBuilder
  ) {
    this.isView = data ? true : false;
    this.form = this.fb.group({
      id: [{ value: data?.id || '', disabled: this.isView }, Validators.required],
      title: [{ value: data?.title || '', disabled: this.isView }, Validators.required],
      amount: [{ value: data?.amount || '', disabled: this.isView }, Validators.required],
      price: [{ value: data?.price || '', disabled: this.isView }, Validators.required]
    });
  }

  onSubmit() {
    if (!this.isView && this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
