import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CollegeComponent } from './college/college.component';

export const router: Routes = [

  { path: 'college', component: CollegeComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);



