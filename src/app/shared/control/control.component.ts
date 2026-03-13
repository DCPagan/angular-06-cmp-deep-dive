import { Component, contentChild, ContentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control'
  readonly name = input<string>();
  readonly label = input.required<string>();
  private elem = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;
  private control = contentChild.required<
    ElementRef<HTMLInputElement | HTMLTextAreaElement>
  >('input')

  // @HostListener('click')
  onClick(): void {
    console.log(this.elem);
    console.log(this.control());
  }
}