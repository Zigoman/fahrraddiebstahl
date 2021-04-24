import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';
import { ApiService } from './services/api-service.service';

@NgModule({
  imports: [CommonModule, MomentModule],
  declarations: [],
  exports: [CommonModule, MomentModule],
  providers: [ApiService]
})
export class SharedModule {}
