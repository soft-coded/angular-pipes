import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-date-card',
  templateUrl: './date-card.component.html',
  styleUrls: ['./date-card.component.scss'],
})
export class DateCardComponent implements OnInit, OnDestroy {
  date = new Date();
  private dateInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.dateInterval = setInterval(() => (this.date = new Date()), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.dateInterval!);
  }
}
