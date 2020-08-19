import { Component, OnInit, Input } from '@angular/core';
import { originalOrder } from '../app.component';


@Component({
  selector: 'app-crbadge',
  templateUrl: './crbadge.component.html',
  styleUrls: ['./crbadge.component.scss']
})
export class CrbadgeComponent implements OnInit {

  @Input() personalDetails: Map<string, string>;

  originalOrder = originalOrder;

  constructor() {  }

  ngOnInit() {
  }

}
