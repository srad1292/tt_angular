import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Ticket } from '../models/ticket';
import { MessageService } from './message.service';
 
@Injectable({
  providedIn: 'root',
})
export class TicketService {
 
  private serverData = JSON;
  private ticketData = JSON;
  private ticketesUrl = 'http://127.0.0.1:5002/ticket';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
 
  /** GET ticket by id. Will 404 if id not found */
  getTicket(id: number): Observable<Ticket> {
    const url = `${this.ticketesUrl}/${id}`;
    return this.http.get<Ticket>(url).pipe(
      tap(_ => this.log(`fetched ticket id=${id}`)),
      catchError(this.handleError<Ticket>(`getTicket id=${id}`))
    );
  }


  /** Log a TicketService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TicketService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.error.message}`);

      return of(result as T);
    };
  }

}