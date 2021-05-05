import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IIncident, IIncidents } from '../../shared/interfaces/incidents';
import { selectIncident } from '../../store/selectors/incidents.selectors';
import { MapBoxService } from '../../shared/services/map-box.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fah-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {
  public incident: IIncident | null;
  private routeSub: Subscription | null;
  public loading: boolean;

  @ViewChild('map', { static: false })
  set map(map: ElementRef) {
    setTimeout(() => {
      this.mapBoxSrv.initMap(map.nativeElement, this.incident?.geo || null);
    }, 0);
  }
  constructor(
    public mapBoxSrv: MapBoxService,
    private store: Store<{ incidents: IIncidents }>,
    private router: Router
  ) {
    this.loading = true;
    this.incident = null;
    this.routeSub = null;
  }

  ngOnInit(): void {
    this.routeSub = this.store.pipe(select(selectIncident)).subscribe(incident => {
      this.loading = false;
      if (incident) {
        this.incident = incident;
        setTimeout(() => {}, 0);
      }
    });
  }

  public goToMain(): void {
    this.router.navigateByUrl('main').then();
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }
}
