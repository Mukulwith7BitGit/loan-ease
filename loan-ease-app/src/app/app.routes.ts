import { provideRouter, Routes, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { LoanApplicationComponent } from './pages/loan-application/loan-application.component';
import { ApplicationListComponent } from './pages/application-list/application-list.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'loans/newApplication',
        component: LoanApplicationComponent
    },
    {
        path: 'applicationList',
        component: ApplicationListComponent
    },
];

export const appRoutes = provideRouter(
    routes,
    withComponentInputBinding(),
    withInMemoryScrolling({
        anchorScrolling: 'enabled', // Enable anchor scrolling
        scrollPositionRestoration: 'enabled', // Restore scroll position on navigation
    })
);