import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api-service.service';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { BikeImageDirective } from './directives/bike-image.directive';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHandlerInterceptor } from './interceptors/httpHandler.interceptor';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    DataViewModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    SkeletonModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  declarations: [BikeImageDirective],
  exports: [
    CommonModule,
    DataViewModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    BikeImageDirective,
    SkeletonModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  providers: [
    ApiService,
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHandlerInterceptor,
      multi: true
    }
  ]
})
export class SharedModule {}
