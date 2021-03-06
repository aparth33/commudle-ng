import { Component, OnInit } from '@angular/core';
import { DataFormEntityResponseGroupsService } from 'projects/commudle-admin/src/app/services/data-form-entity-response-groups.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'projects/shared-models/event.model';
import { ICommunity } from 'projects/shared-models/community.model';
import { IDataFormEntityResponseGroup } from 'projects/shared-models/data_form_entity_response_group.model';
import { ERegistrationStatuses } from 'projects/shared-models/enums/registration_statuses.enum';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  token: string;
  rsvpStatus: number;
  event: IEvent;
  community: ICommunity;
  dferg: IDataFormEntityResponseGroup;
  ERegistrationStatuses = ERegistrationStatuses;

  constructor(
    private dataFormEntityResponseGroupsService: DataFormEntityResponseGroupsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      data => {
        this.token = data['token'];
        this.rsvpStatus = data['rsvp_status'];
        this.updateRSVPStatus();
      }
    );
  }


  updateRSVPStatus() {
    this.dataFormEntityResponseGroupsService.updateRSVPStatus(this.token, this.rsvpStatus).subscribe(
      data => {
        this.event = data.event;
        this.community = data.community;
        this.dferg = data.data_form_entity_response_group;
      }
    );
  }

}
