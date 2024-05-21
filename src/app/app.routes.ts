import { Routes } from '@angular/router';
import { ItemsTableComponent } from './pages/items-table/items-table.component';

export const routes: Routes = [
    {
        path: '',
        component: ItemsTableComponent,
        title: 'Items',
    },
    {
        path: '**',
        component: ItemsTableComponent,
        redirectTo: '',
    }
];
