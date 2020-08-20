import { Component, OnInit, Input } from '@angular/core';
import { project } from '../app.component';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.scss']
})
export class ProjectContainerComponent implements OnInit {

  @Input() project: project;

  constructor() { }

  ngOnInit(): void {
  }

}
