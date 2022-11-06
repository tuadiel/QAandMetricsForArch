import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterAttributesComponent } from './cluster-attributes.component';

describe('ClusterAttributesComponent', () => {
  let component: ClusterAttributesComponent;
  let fixture: ComponentFixture<ClusterAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClusterAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
