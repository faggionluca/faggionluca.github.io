import { Component, OnInit, Input } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-crbadge',
  templateUrl: './crbadge.component.html',
  styleUrls: ['./crbadge.component.scss']
})
export class CrbadgeComponent implements OnInit {

  @Input() personalDetails: Map<string, string>;

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }
  constructor() { }

  ngOnInit() {
  }

}
