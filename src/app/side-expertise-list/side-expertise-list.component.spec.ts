import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideExpertiseListComponent } from './side-expertise-list.component';

describe('SideExpertiseListComponent', () => {
  let component: SideExpertiseListComponent;
  let fixture: ComponentFixture<SideExpertiseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideExpertiseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideExpertiseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
