import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleventpublicationComponent } from './releventpublication.component';

describe('ReleventpublicationComponent', () => {
  let component: ReleventpublicationComponent;
  let fixture: ComponentFixture<ReleventpublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleventpublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleventpublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
