import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';
import { ApiService } from './services/api-service.service';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { DataViewModule } from 'primeng/dataview';
import { BikeImageDirective } from './directives/bike-image.directive';

@NgModule({
  imports: [
    CommonModule,
    MomentModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule
  ],
  declarations: [BikeImageDirective],
  exports: [
    CommonModule,
    MomentModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    BikeImageDirective
  ],
  providers: [ApiService]
})
export class SharedModule {}
