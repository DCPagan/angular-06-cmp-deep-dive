import {
  AfterViewInit, Component, ElementRef, OnInit, ViewChild
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit(): void {
    console.log('On init');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('After view init');
    console.log(this.form?.nativeElement);
  }

  onSubmit(title: string, request: string): void {
    console.log(title);
    console.log(request);
    this.form?.nativeElement.reset();
  }
}