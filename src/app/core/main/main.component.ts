import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getIncidents } from '../../store/actions/incidents.actions';

@Component({
  selector: 'fah-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private store: Store<{ incidents: any }>) {}

  ngOnInit(): void {
    this.store.dispatch(getIncidents());
  }
}
