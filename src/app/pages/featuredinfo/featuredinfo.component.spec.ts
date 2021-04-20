import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedinfoComponent } from './featuredinfo.component';

describe('FeaturedinfoComponent', () => {
  let component: FeaturedinfoComponent;
  let fixture: ComponentFixture<FeaturedinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
