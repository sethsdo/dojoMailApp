import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MailComponentComponent } from './mail-component/mail-component.component';
import { MailServiceComponent } from './mail-service/mail-service.component';
import { MailClassComponent } from './mail-class/mail-class.component';

@NgModule({
  declarations: [
    AppComponent,
    MailComponentComponent,
    MailServiceComponent,
    MailClassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
