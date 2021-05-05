import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { ListItemComponent } from './list-item/list-item.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataViewModule } from 'primeng/dataview';
import { SkeletonModule } from 'primeng/skeleton';
import { IIncidents } from '../../shared/interfaces/incidents';
import { BikeImageDirective } from '../../shared/directives/bike-image.directive';
import { initialState } from '../../store/reducers/incidents.reducer';
import { routes } from '../../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let element: HTMLElement;
  let store: MockStore;
  const incidentsMock: IIncidents = [
    {
      id: 136247,
      title: 'Stolen 2020 Canyon bicycles RDL AL 6.0 19/20 bu/bu(blue)',
      description: 'Parked in the building courtyard, away from general eyesight. Missing from 14:30 to 18:00',
      address: 'Berlin, 10117, DE',
      occurred_at: 1614436200,
      updated_at: 1616857269,
      url: 'https://bikewise.org/api/v1/incidents/136247',
      source: {
        name: 'BikeIndex.org',
        html_url: 'https://bikeindex.org/bikes/1011193',
        api_url: 'https://bikeindex.org/api/v1/bikes/1011193'
      },
      media: {
        image_url: 'https://files.bikeindex.org/uploads/Pu/403441/large_IMG_4353.jpg',
        image_url_thumb: 'https://files.bikeindex.org/uploads/Pu/403441/small_IMG_4353.jpg'
      },
      location_type: null,
      location_description: null,
      type: 'Theft',
      type_properties: null,
      geo: {
        type: 'Point',
        coordinates: [13.38, 52.52]
      },
      date: '27/02/21 16:30',
      dateOfReport: '27/03/21 18:01'
    },
    {
      id: 136215,
      title: 'Stolen 2019 Haibike Sduro(white)',
      description: '',
      address: 'Berlin, 12045, DE',
      occurred_at: 1614373200,
      updated_at: 1616792470,
      url: 'https://bikewise.org/api/v1/incidents/136215',
      source: {
        name: 'BikeIndex.org',
        html_url: 'https://bikeindex.org/bikes/1010778',
        api_url: 'https://bikeindex.org/api/v1/bikes/1010778'
      },
      media: {
        image_url: 'https://files.bikeindex.org/uploads/Pu/403123/large_Screenshot_2021-02-26_222956.png',
        image_url_thumb: 'https://files.bikeindex.org/uploads/Pu/403123/small_Screenshot_2021-02-26_222956.png'
      },
      location_type: null,
      location_description: null,
      type: 'Theft',
      type_properties: null,
      geo: {
        type: 'Point',
        coordinates: [13.43, 52.49]
      },
      date: '26/02/21 23:00',
      dateOfReport: '27/03/21 00:01'
    },
    {
      id: 135697,
      title: 'Stolen Other(black)',
      description: null,
      address: 'Berlin, 13357, DE',
      occurred_at: 1613174229,
      updated_at: 1615593665,
      url: 'https://bikewise.org/api/v1/incidents/135697',
      source: {
        name: 'BikeIndex.org',
        html_url: 'https://bikeindex.org/bikes/1005021',
        api_url: 'https://bikeindex.org/api/v1/bikes/1005021'
      },
      media: {
        image_url: null,
        image_url_thumb: null
      },
      location_type: null,
      location_description: null,
      type: 'Theft',
      type_properties: null,
      geo: {
        type: 'Point',
        coordinates: [13.3786773, 52.5504704]
      },
      date: '13/02/21 01:57',
      dateOfReport: '13/03/21 02:01'
    },
    {
      id: 132503,
      title: 'Stolen 2017 Derby Cycle City bike(black)',
      description: 'also my helmet was stolen \r\n',
      address: 'Berlin, 10179, DE',
      occurred_at: 1607076000,
      updated_at: 1609761854,
      url: 'https://bikewise.org/api/v1/incidents/132503',
      source: {
        name: 'BikeIndex.org',
        html_url: 'https://bikeindex.org/bikes/955621',
        api_url: 'https://bikeindex.org/api/v1/bikes/955621'
      },
      media: {
        image_url: 'https://files.bikeindex.org/uploads/Pu/372421/large_F5E04B8E-31BF-4818-913C-49809CE465E0.jpeg',
        image_url_thumb: 'https://files.bikeindex.org/uploads/Pu/372421/small_F5E04B8E-31BF-4818-913C-49809CE465E0.jpeg'
      },
      location_type: null,
      location_description: null,
      type: 'Theft',
      type_properties: null,
      geo: {
        type: 'Point',
        coordinates: [13.414046, 52.5121401]
      },
      date: '04/12/20 12:00',
      dateOfReport: '04/01/21 14:04'
    },
    {
      id: 132309,
      title: 'Stolen 2020 Katarga Modell: Katarga EVO c7r(silver, gray or bare metal)',
      description: null,
      address: 'Berlin Hohenschönhausen, 13053, DE',
      occurred_at: 1606704699,
      updated_at: 1609383673,
      url: 'https://bikewise.org/api/v1/incidents/132309',
      source: {
        name: 'BikeIndex.org',
        html_url: 'https://bikeindex.org/bikes/954063',
        api_url: 'https://bikeindex.org/api/v1/bikes/954063'
      },
      media: {
        image_url: 'https://files.bikeindex.org/uploads/Pu/369948/large_IMG-20201129-WA0001.jpg',
        image_url_thumb: 'https://files.bikeindex.org/uploads/Pu/369948/small_IMG-20201129-WA0001.jpg'
      },
      location_type: null,
      location_description: null,
      type: 'Theft',
      type_properties: null,
      geo: {
        type: 'Point',
        coordinates: [13.50581, 52.5621]
      },
      date: '30/11/20 04:51',
      dateOfReport: '31/12/20 05:01'
    },
    {
      id: 132048,
      title: 'Stolen 2016 Koga-Miyata Supermetro(black and blue)',
      description: null,
      address: 'Berlin, DE',
      occurred_at: 1606202151,
      updated_at: 1608800473,
      url: 'https://bikewise.org/api/v1/incidents/132048',
      source: {
        name: 'BikeIndex.org',
        html_url: 'https://bikeindex.org/bikes/952250',
        api_url: 'https://bikeindex.org/api/v1/bikes/952250'
      },
      media: {
        image_url: null,
        image_url_thumb: null
      },
      location_type: null,
      location_description: null,
      type: 'Theft',
      type_properties: null,
      geo: {
        type: 'Point',
        coordinates: [13.404954, 52.5200066]
      },
      date: '24/11/20 09:15',
      dateOfReport: '24/12/20 11:01'
    }
  ];
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), HttpClientModule, DataViewModule, SkeletonModule],
      declarations: [MainComponent, ListItemComponent, BikeImageDirective],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents()
      .then();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    store = TestBed.inject(MockStore);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
    store.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should creat with skeleton components', () => {
    const elements = element.querySelectorAll('.skeleton-item');
    fixture.detectChanges();
    expect(elements.length).toEqual(component.filteredIncidents.length);
  });

  it('should creat list items after gut data', () => {
    component.filteredIncidents = incidentsMock;
    fixture.detectChanges();
    const elements = element.querySelectorAll('.list-item');
    expect(elements.length).toEqual(component.filteredIncidents.length);
  });

  it('should reduce list items after type filter', async () => {
    component.incidents = incidentsMock;
    component.filteredIncidents = incidentsMock;
    fixture.detectChanges();
    component.filterData('2020', '');
    fixture.detectChanges();
    const listItem = element.querySelectorAll('.list-item');
    expect(listItem.length).toEqual(2);
    component.filterData('2020', '27');
    fixture.detectChanges();
    const listItem2 = element.querySelectorAll('.list-item');
    expect(listItem2.length).toEqual(1);
  });

  it('should navigate to route', fakeAsync(() => {
    const dummyID = incidentsMock[0].id;
    component.goToIncident(dummyID).then(() => {
      tick();
      expect(location.path()).toEqual('/main/' + dummyID);
    });
  }));
});
