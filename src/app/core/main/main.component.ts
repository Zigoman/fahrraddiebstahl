import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectIncidents } from '../../store/selectors/incidents.selectors';
import { IIncidents } from '../../shared/interfaces/incidents';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutType } from '../../shared/interfaces/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fah-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  public incidents: IIncidents;
  public layout: { layout: LayoutType };
  private subs: Subscription | null;

  constructor(private store: Store<{ incidents: IIncidents }>, private router: Router, private route: ActivatedRoute) {
    this.incidents = [];
    this.layout = { layout: 'list' };
    this.subs = null;
  }

  ngOnInit(): void {
    this.subs = this.store.pipe(select(selectIncidents)).subscribe(incidents => {
      this.incidents = incidents;
    });
  }

  public goToIncident(ID: number): void {
    this.router.navigate([ID], { relativeTo: this.route }).then();
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
}
