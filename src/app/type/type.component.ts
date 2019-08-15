import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-type',
  template: `<span>{{ type | titlecase }}</span>`,
  encapsulation: ViewEncapsulation.None
})
export class TypeComponent {
  @Input() type: string;
}
