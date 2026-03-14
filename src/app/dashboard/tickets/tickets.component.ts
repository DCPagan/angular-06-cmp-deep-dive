import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { type NewTicket, type Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(newTicket: NewTicket): void {
    this.tickets.push({
      ...newTicket,
      id: crypto.randomUUID(),
      status: 'open'
    });
  }
}