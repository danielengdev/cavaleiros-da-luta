import { Routes } from '@angular/router';
import { Login } from './feature/auth/login/login';
import { Register } from './feature/auth/register/register';
import { ForgotPassword } from './feature/auth/forgot-password/forgot-password';
import { ResetPassword } from './feature/auth/reset-password/reset-password';
import { authGuard } from './feature/auth/guard/auth-guard';
import { Dashboard } from './feature/admin/dashboard/dashboard';
import { Page } from './feature/links/page/page';

export const routes: Routes = [
    {path: '', redirectTo: 'page', pathMatch: 'full'},
    {
        path: 'page',
        component: Page
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: 'forgot-password',
        component: ForgotPassword
    },
    {
        path: 'reset-password',
        component: ResetPassword
    },
    {
        path: 'dashboard',
        canActivate: [authGuard],
        component: Dashboard
    }
];
