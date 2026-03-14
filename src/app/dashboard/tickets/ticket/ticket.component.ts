import { Component, input, output, signal } from '@angular/core';
import { type Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  readonly ticket = input.required<Ticket>();
  complete = output<void>();
  visible = signal<boolean>(false);

  onToggleVisibility(): void {
    this.visible.update((visible) => !visible);
  }

  onComplete(): void {
    this.complete.emit();
  }
}