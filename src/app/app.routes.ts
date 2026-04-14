import { Routes } from '@angular/router';
import { ContactSalesPageComponent } from './pages/contact-sales-page.component';
import { DocsPageComponent } from './pages/docs-page.component';
import { GetStartedPageComponent } from './pages/get-started-page.component';
import { HomePageComponent } from './pages/home-page.component';
import { PricingPageComponent } from './pages/pricing-page.component';
import { ProductPageComponent } from './pages/product-page.component';
import { SecurityPageComponent } from './pages/security-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product', component: ProductPageComponent },
  { path: 'security', component: SecurityPageComponent },
  { path: 'pricing', component: PricingPageComponent },
  { path: 'get-started', component: GetStartedPageComponent },
  { path: 'docs', component: DocsPageComponent },
  { path: 'contact-sales', component: ContactSalesPageComponent },
  { path: '**', redirectTo: '' },
];
