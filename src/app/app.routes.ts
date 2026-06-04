import { Routes } from '@angular/router';
import { Login } from './feature/auth/login/login';
import { Register } from './feature/auth/register/register';
import { ForgotPassword } from './feature/auth/forgot-password/forgot-password';
import { ResetPassword } from './feature/auth/reset-password/reset-password';
import { authGuard } from './feature/auth/guard/auth-guard';
import { Dashboard } from './feature/admin/dashboard/dashboard';
import { Page } from './feature/links/page/page';
import { Home } from './feature/home/home';
import { Menu } from './feature/menu/menu';
import { Profile } from './feature/profile/profile';
import { Notifications } from './feature/notifications/notifications';
import { AppShell } from './shared/components/app-shell/app-shell';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        component: AppShell,
        children: [
            {
                path: 'home',
                component: Home,
            },
            {
                path: 'page',
                component: Page,
            },
            {
                path: 'menu',
                component: Menu,
            },
            {
                path: 'profile',
                component: Profile,
            },
            {
                path: 'notifications',
                component: Notifications,
            },
            {
                path: 'dashboard',
                canActivate: [authGuard],
                component: Dashboard,
            },
        ],
    },
    {
        path: 'login',
        component: Login,
    },
    {
        path: 'register',
        component: Register,
    },
    {
        path: 'forgot-password',
        component: ForgotPassword,
    },
    {
        path: 'reset-password',
        component: ResetPassword,
    },
];
