import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './Routes/contact-list/contact-list.component';
import { SettingsComponent } from './Routes/settings/settings.component';
import { ContactViewerComponent } from './Routes/contact-viewer/contact-viewer.component';

const routes: Routes = [
  {
    path: "Contacts", component: ContactListComponent,
    children: [{
      path: ":contact_ID", component: ContactViewerComponent
    }]
  },
  {
    path: "Settings", component: SettingsComponent
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
