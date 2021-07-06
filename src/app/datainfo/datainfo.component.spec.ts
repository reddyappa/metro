import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatainfoComponent } from './datainfo.component';

describe('DatainfoComponent', () => {
  let component: DatainfoComponent;
  let fixture: ComponentFixture<DatainfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatainfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatainfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
