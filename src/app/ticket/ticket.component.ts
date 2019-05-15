import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Ticket } from '../models/ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  ticket: Ticket;
  error;
  ticket_states = ['Backlog', 'Development', 'Code Review', 'Testing', 'Released', 'On Hold', 'Closed'];
  progress_estimated = 100;
  progress_logged = 66;
  progress_remaining = 33;

  comments = [
      {
          attuid: 'sr198e',
          datetime: '03/05/2019 10:20AM',
          comment: 'This is a comment'
      },
      {
        attuid: 'aa123a',
        datetime: '03/05/2019 10:45AM',
        comment: 'why are you leaving a comment on this ticket'
    },
    {
        attuid: 'sr198e',
        datetime: '03/05/2019 11:00AM',
        comment: 'This is my ticket and you need to get over it okay.'
    }
  ]

  constructor(private route: ActivatedRoute, private ticket_service: TicketService) { }

  ngOnInit() {
    this.getTicket();
  }

  getTicket() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ticket_service.getTicket(id).subscribe(
      (data: Ticket) => this.ticket = data['ticket'] || {},
      error => this.error = error
    );
  }

}