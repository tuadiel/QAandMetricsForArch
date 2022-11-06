import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMetricsComponent } from './table-metrics.component';

describe('TableMetricsComponent', () => {
  let component: TableMetricsComponent;
  let fixture: ComponentFixture<TableMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMetricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
