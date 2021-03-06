import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicCommunityRoutingModule } from './public-community-routing.module';
import { HomeCommunityComponent } from './components/home-community/home-community.component';
import {
  NbCardModule,
  NbListModule,
  NbInputModule,
  NbButtonModule,
  NbIconModule,
  NbTooltipModule,
  NbPopoverModule,
  NbTabsetModule,
  NbAlertModule,
  NbBadgeModule
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'projects/shared-components/shared-components.module';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { MembersComponent } from './components/members/members.component';
import { EventResourcesComponent } from './components/event-resources/event-resources.component';
import { SharedPipesModule } from 'projects/shared-pipes/pipes.module';


@NgModule({
  declarations: [HomeCommunityComponent, AboutComponent, EventsComponent, MembersComponent, EventResourcesComponent],
  imports: [
    CommonModule,
    PublicCommunityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    SharedPipesModule,





    // Nebular
    NbCardModule,
    NbListModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbTooltipModule,
    NbPopoverModule,
    NbTabsetModule,
    NbAlertModule,
    NbBadgeModule
  ]
})
export class PublicCommunityModule { }
