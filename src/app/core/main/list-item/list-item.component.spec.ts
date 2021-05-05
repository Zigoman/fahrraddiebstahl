import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListItemComponent } from './list-item.component';
import { SkeletonModule } from 'primeng/skeleton';
import { IIncident } from '../../../shared/interfaces/incidents';
import { BikeImageDirective } from '../../../shared/directives/bike-image.directive';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;
  let element: HTMLElement;
  const incidentMock: IIncident = {
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
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonModule],
      declarations: [ListItemComponent, BikeImageDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show info if no incident', () => {
    const itemElement = element.querySelector('.list-item');
    fixture.detectChanges();
    expect(itemElement).toEqual(null);
  });

  it('should show skeleton if no incident', () => {
    const skeletonElement = element.querySelector('.skeleton-item');
    fixture.detectChanges();
    expect(skeletonElement).not.toEqual(null);
  });

  it('should show info item if have incident', () => {
    component.incident = incidentMock;
    fixture.detectChanges();
    const itemElement = element.querySelector('.list-item');
    expect(itemElement).not.toEqual(null);
  });

  it('should click on item will send emit', async () => {
    spyOn(component.itemSelected, 'emit');
    component.incident = incidentMock;
    fixture.detectChanges();
    const listElement: HTMLElement | null = element.querySelector('.list-item');
    listElement?.click();
    expect(component.itemSelected.emit).toHaveBeenCalledWith(incidentMock.id);
  });
});
