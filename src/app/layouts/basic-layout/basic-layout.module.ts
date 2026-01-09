import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { BasicLayoutComponent } from './basic-layout.component';

@NgModule({
  declarations: [BasicLayoutComponent],
  imports: [SharedModule],
  exports: [BasicLayoutComponent]
})
export class BasicLayoutModule {}
