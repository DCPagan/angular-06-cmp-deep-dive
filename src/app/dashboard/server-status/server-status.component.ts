import {
  Component, DestroyRef, inject, OnInit
} from '@angular/core';

type ServerStatus = 'online' | 'offline' | 'unknown';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: ServerStatus = 'online';
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const timer = window.setInterval(() => {
      const rand = Math.random();
      this.currentStatus = rand < 0.5
        ? 'online'
        : rand < 0.9
          ? 'offline'
          : 'unknown';
    }, 5000);
    this.destroyRef.onDestroy(() => {
      clearInterval(timer);
    });
  }
}