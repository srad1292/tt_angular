import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}