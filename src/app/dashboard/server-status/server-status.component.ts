import { Component, DestroyRef, inject } from '@angular/core';

type ServerStatus = 'online' | 'offline' | 'unknown';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus: ServerStatus = 'online';
  private destroyRef = inject(DestroyRef);

  constructor() {
    const timeout = setInterval(() => {
      const rand = Math.random();
      this.currentStatus = rand < 0.5
        ? 'online'
        : rand < 0.9
          ? 'offline'
          : 'unknown';
    }, 5000);
    this.destroyRef.onDestroy(() => clearInterval(timeout));
  }
}