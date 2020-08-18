import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Resume';
  sideItems: Map<string, string> = new Map([
    [':classical_building: Universita\'',
      'Universita degli studi di Parma.'],

    [':keyboard: Principali linguaggi',
      'C++, Python, Typescript, Java'],

    [':mortar_board: Corso',
      'Laurea in Ingegneria Informatica, Elettronica e delle Telecomunicazioni (LIET)']
  ]);
  personalDetails: Map<string, string> = new Map([
    ['Nome:', 'Luca'],
    ['Cognome:', 'Faggion'],
    ['Data di Nascita:', '04/12/1995']
  ]);
}
