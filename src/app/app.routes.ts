import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'page', pathMatch: 'full'},
    {
        path: 'page',
        loadComponent: () => import('./feature/links/page/page').then((m) => m.Page),
    },
    {path: '**', redirectTo: 'page', pathMatch: 'full'},
];
