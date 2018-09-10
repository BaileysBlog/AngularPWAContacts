import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './Routes/contact-list/contact-list.component';

const routes: Routes = [
  {
    path: "Contacts", component: ContactListComponent
  },
  {
    path:"**", redirectTo: "Contacts"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
