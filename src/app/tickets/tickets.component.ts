import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSort, MatTableDataSource } from '@angular/material';

import { Ticket } from '../models/ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  tickets: Ticket[];
  data_source;
  error;
  is_loading = false;
  displayed_columns: string[] = ['id', 'title', 'assignee', 'state', 'version', 'start_date', 'due_date'];
  
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ticket_service: TicketService) { }

  ngOnInit() {
    this.getTickets();
    
  }

  getTickets() {
    this.is_loading=true;
    const filter = "WHERE assignee = 'sr198e' AND resolution = 'Unresolved'";
    this.ticket_service.getTickets(filter).subscribe(
      (data: Ticket[]) => this.tickets = data['tickets'] || [],
      error => this.error = error,
      () => {
        if(this.tickets){
          console.log(this.tickets);
          this.setUpTable();
        }
        this.is_loading=false;
      }
    );
  }

  setUpTable() {
    this.data_source = new MatTableDataSource(this.tickets);
    this.data_source.sort = this.sort;
  }

}