import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() sidelist: Map<string, string>;
  @Input() sideTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
