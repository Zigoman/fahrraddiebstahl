import { Component, OnInit } from '@angular/core';
import { getIncidents } from './store/actions/incidents.actions';
import { Store } from '@ngrx/store';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'fah-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<{ incidents: any }>, private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.store.dispatch(getIncidents());
  }
}
