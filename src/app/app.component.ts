import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  maxCount = 50;

  public loadMore(): void {
    this.maxCount += 50;
  }

  get idsList(): number[] {
    return Array.from(Array(this.maxCount + 1).keys()).filter(i => i > 0);
  }
}
