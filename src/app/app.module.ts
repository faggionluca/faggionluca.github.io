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
import { SideExpertiseListComponent } from './side-expertise-list/side-expertise-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialsComponent } from './socials/socials.component';

@NgModule({
  declarations: [
    AppComponent,
    CrbadgeComponent,
    SidebarComponent,
    ProjectContainerComponent,
    SideExpertiseListComponent,
    SocialsComponent
  ],
  imports: [
    FlexLayoutModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
