import { originalOrder } from './../app.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-expertise-list',
  templateUrl: './side-expertise-list.component.html',
  styleUrls: ['./side-expertise-list.component.scss']
})
export class SideExpertiseListComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('expertise') expertise_list: Map<string, string>;

  originalOrder = originalOrder;

  constructor() { }

  ngOnInit(): void {
  }

}
