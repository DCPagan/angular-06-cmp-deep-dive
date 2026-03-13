import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

type ServerStatus = 'online' | 'offline' | 'unknown';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: ServerStatus = 'online';
  private timer?: number;

  ngOnInit(): void {
    this.timer = window.setInterval(() => {
      const rand = Math.random();
      this.currentStatus = rand < 0.5
        ? 'online'
        : rand < 0.9
          ? 'offline'
          : 'unknown';
    }, 5000);
  }

  ngOnDestroy(): void {
    window.clearInterval(this.timer);
  }
}