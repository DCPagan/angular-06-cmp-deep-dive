import { Component, input, signal } from '@angular/core';
import { type Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  readonly ticket = input.required<Ticket>();
  visible = signal<boolean>(false);

  onToggleVisibility(): void {
    this.visible.update((visible) => !visible);
  }
}