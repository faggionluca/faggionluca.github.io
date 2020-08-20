import { Component } from '@angular/core';
import { faGithub, faArtstation, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { SocialLink } from './socials/socials.component';
import { KeyValue } from '@angular/common';
import * as projects from '../assets/Projects/project_list.json';

export const originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
  return 0;
};

export interface project {
  name: string;
  file: string;
  repo: string;
}

export interface projectCategory {
  category: string;
  list: Array<project>;
}

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
      'Laurea in Ingegneria Informatica, Elettronica e delle Telecomunicazioni (LIET)'],

    [':joystick: Hobbies',
      'Realtime Graphics, 3D Modelling e Automation Scripts'],
  ]);

  personalDetails: Map<string, string> = new Map([
    ['Nome:', 'Luca'],
    ['Cognome:', 'Faggion'],
    ['Data di Nascita:', '04/12/1995'],
    ['', ''],
    ['e-Mail Istituzionale:', 'luca.faggion@studenti.unipr.it'],
    ['e-Mail Personale:', 'luc-af@live.it'],
    ['Telefono:', '3395472642']
  ]);

  socialList: Map<IconDefinition, SocialLink> = new Map([
    [faGithub, {social: 'Github Profile', link: 'https://github.com/darkimage'}],
    [faArtstation, {social: 'Artstation Profile', link: 'https://www.artstation.com/darkimage'}]
  ]);

  projectList: Array<projectCategory> = projects.categories;

  constructor() {}

}
