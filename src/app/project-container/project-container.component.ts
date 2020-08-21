import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit, Input } from '@angular/core';
import { project } from '../app.component';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.scss']
})
export class ProjectContainerComponent implements OnInit {

  github = faGithub;
  pdf = faFilePdf;

  @Input() project: project;

  constructor() { }

  ngOnInit(): void {
  }

}
