import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LFcurriculum';
  sideItems: Map<string, string> = new Map([
    [ ':classical_building: Universita\'', 'Universita degli studi di Parma.']
  ]);
}
