import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule } from '@angular/material';
import { ContactListComponent } from './Routes/contact-list/contact-list.component';
import { SettingsComponent } from './Routes/settings/settings.component';
import { ContactPreviewComponent } from './Components/contact-preview/contact-preview.component';
import { ContactViewerComponent } from './Routes/contact-viewer/contact-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ContactListComponent,
    SettingsComponent,
    ContactPreviewComponent,
    ContactViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
