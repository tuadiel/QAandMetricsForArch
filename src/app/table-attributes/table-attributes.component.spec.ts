import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAttributesComponent } from './table-attributes.component';

describe('TableAttributesComponent', () => {
  let component: TableAttributesComponent;
  let fixture: ComponentFixture<TableAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
