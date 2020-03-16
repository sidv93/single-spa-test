import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng8-subapp';

  toggleClock () {
    const event = new Event('toggleClock');
    window.dispatchEvent(event);
  }
}
