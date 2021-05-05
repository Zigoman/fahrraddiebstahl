import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectIncidents } from '../../store/selectors/incidents.selectors';
import { IIncidents } from '../../shared/interfaces/incidents';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutType } from '../../shared/interfaces/layout';
import { Subscription } from 'rxjs';
import { ApiService } from '../../shared/services/api-service.service';
import { getIncidents } from '../../store/actions/incidents.actions';

@Component({
  selector: 'fah-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  public incidents: IIncidents;
  public filteredIncidents: IIncidents | null[];
  public layout: { layout: LayoutType };
  public numberOfRows: number;
  private subs: Subscription | null;
  public percentagePassedToGetMore: number;

  constructor(
    private store: Store<{ incidents: IIncidents }>,
    public router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.incidents = [];
    this.filteredIncidents = [null, null, null, null, null, null, null, null, null, null];
    this.layout = { layout: 'list' };
    this.subs = null;
    this.numberOfRows = 10;
    this.percentagePassedToGetMore = this.getPercentageFromData(70); // 80% of data length
  }

  ngOnInit(): void {
    this.subs = this.store.pipe(select(selectIncidents)).subscribe(incidents => {
      if (incidents.length > 0) {
        this.apiService.haveNextPage = incidents.length >= this.apiService.perPage * this.apiService.currentPage;
        this.incidents = incidents;
        this.filteredIncidents = this.incidents;
      }
    });
  }

  public filterData(title: string, date: string): void {
    this.filteredIncidents = this.incidents.filter(incident =>
      incident.title.toLowerCase().includes(title.toLowerCase())
    );
    this.filteredIncidents = this.filteredIncidents.filter(incident => incident.date?.includes(date));
  }

  public goToIncident(ID: number): Promise<boolean> {
    return this.router.navigate(['/main', ID]);
  }

  public getMoreIncidents(e: { first: number; rows: number }): void {
    if (e.first + this.numberOfRows >= this.percentagePassedToGetMore && this.apiService.haveNextPage) {
      this.apiService.currentPage++;
      this.percentagePassedToGetMore = this.getPercentageFromData(70);
      this.store.dispatch(getIncidents());
    }
  }

  private getPercentageFromData(percentage: number): number {
    return (percentage / 100) * this.apiService.perPage * this.apiService.currentPage;
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
}
