import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from './store/reducers/incidents.reducer';
import { ToastModule } from 'primeng/toast';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { MessageService } from 'primeng/api';

describe('AppComponent', () => {
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ToastModule],
      declarations: [AppComponent, TopBarComponent],
      providers: [provideMockStore({ initialState }), MessageService]
    })
      .compileComponents()
      .then();

    store = TestBed.inject(MockStore);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
