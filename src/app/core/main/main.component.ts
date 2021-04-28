import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectAllIncidents } from '../../store/selectors/incidents.selectors';
import { IIncidents } from '../../shared/interfaces/incidents';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutType } from '../../shared/interfaces/layout';

@Component({
  selector: 'fah-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public incidents: IIncidents;
  public layout: { layout: LayoutType };

  constructor(private store: Store<{ incidents: any }>, private router: Router, private route: ActivatedRoute) {
    this.incidents = [];
    this.layout = { layout: 'list' };
  }

  ngOnInit(): void {
    this.store.pipe(select(selectAllIncidents)).subscribe(incidents => {
      this.incidents = incidents;
    });
  }

  public goToIncident(ID: number): void {
    this.router.navigate([ID], { relativeTo: this.route }).then();
  }
}
