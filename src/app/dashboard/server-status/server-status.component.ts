import {
  Component, DestroyRef, effect, inject, OnInit,
  signal,
  WritableSignal
} from '@angular/core';

type ServerStatus = 'online' | 'offline' | 'unknown';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: WritableSignal<ServerStatus> = signal<ServerStatus>('online');
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngOnInit(): void {
    const timer = window.setInterval(() => {
      const rand = Math.random();
      this.currentStatus.set(rand < 0.5
        ? 'online'
        : rand < 0.9
          ? 'offline'
          : 'unknown');
    }, 5000);
    this.destroyRef.onDestroy(() => {
      clearInterval(timer);
    });
  }
}