import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';

@NgModule({
  imports: [CommonModule, MomentModule],
  declarations: [],
  exports: [CommonModule, MomentModule],
  providers: []
})
export class SharedModule {}
