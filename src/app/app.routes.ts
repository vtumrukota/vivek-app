import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Routing Components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
