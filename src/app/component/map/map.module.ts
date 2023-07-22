import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MapComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MapComponentModule {}
