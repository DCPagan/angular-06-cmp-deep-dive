import {
  AfterViewInit, Component, ElementRef, OnInit, output, ViewChild
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { type NewTicket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<NewTicket>();
  enteredTitle = '';
  enteredRequest = '';

  ngOnInit(): void {
    console.log('On init');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('After view init');
    console.log(this.form?.nativeElement);
  }

  onSubmit(): void {
    this.add.emit({
      title: this.enteredTitle,
      request: this.enteredRequest
    });
    this.enteredTitle = '';
    this.enteredRequest = '';
  }
}