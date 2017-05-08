import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h1>IP Location</h1>
      <input type="text" [(ngModel)]="ip">
      <button (click)="updateIP()">Locate</button>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit { 
  private ip: string = '0.0.0.0';

  @Output() ipChanged: EventEmitter<string> = new EventEmitter();

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      let ip = this.formatIP(event.url);

      if (ip && ip.length) {
        this.ip = ip;
        this.ipChanged.emit(ip);
      }
    });
  }

  updateIP() {
    this.router.navigate([this.ip]);
    this.ipChanged.emit(this.ip);
  }

  formatIP(ip: string): string {
    return (ip || '').replace(/\//, '').replace(/-/g, '.');
  }
}
