import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import jsonArray from './data.json';
import { IProduct } from '../../types/product.interface';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-items-table',
  styleUrl: './items-table.component.scss',
  templateUrl: './items-table.component.html',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
})
export class ItemsTableComponent {
  constructor(public dialog: MatDialog) { }

  displayedColumns: string[] = ['id', 'title', 'amount', 'price'];
  dataSource: IProduct[] = jsonArray;

  @ViewChild(MatTable) table!: MatTable<IProduct>;

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.push(result);
        this.table.renderRows();
      }
    });
  }
}
