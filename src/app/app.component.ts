import { Component, OnInit } from '@angular/core';
import { getIncidents } from './store/actions/incidents.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'fah-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<{ incidents: any }>) {}

  ngOnInit(): void {
    this.store.dispatch(getIncidents());
  }
}
