import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface SocialLink {
  social: string;
  link: string;
}

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {

  @Input() socialIcons:  Map<IconDefinition, SocialLink>;

  constructor() { }

  ngOnInit(): void {
  }

}
