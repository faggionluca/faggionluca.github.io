import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrbadgeComponent } from './crbadge/crbadge.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectContainerComponent } from './project-container/project-container.component';
import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    CrbadgeComponent,
    SidebarComponent,
    ProjectContainerComponent
  ],
  imports: [
    FlexLayoutModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
