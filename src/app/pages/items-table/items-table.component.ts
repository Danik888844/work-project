import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import jsonArray from '../../helpers/data.json';
import { IProduct } from '../../types/product.interface';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-items-table',
  styleUrl: './items-table.component.scss',
  templateUrl: './items-table.component.html',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
})
export class ItemsTableComponent {
  constructor(public dialog: MatDialog) { }

  displayedColumns: string[] = ['id', 'title', 'amount', 'price', 'actions'];
  dataSource: IProduct[] = jsonArray;

  @ViewChild(MatTable) table!: MatTable<IProduct>;

  onCreate(): void {
    const dialogRef = this.dialog.open(ProductFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.push(result);
        this.table.renderRows();
      }
    });
  }

  onView(product: IProduct): void {
    this.dialog.open(ProductFormComponent, {
      data: product
    })
  }

  onDelete(id: string) {
    const indexToRemove = this.dataSource.findIndex(p => p.id === id);

    if (indexToRemove !== -1) {
      this.dataSource.splice(indexToRemove, 1);
      this.table.renderRows();
    }
  }
}
