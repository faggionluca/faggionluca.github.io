import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrbadgeComponent } from './crbadge.component';

describe('CrbadgeComponent', () => {
  let component: CrbadgeComponent;
  let fixture: ComponentFixture<CrbadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrbadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrbadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
