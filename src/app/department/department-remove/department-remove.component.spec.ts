import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentRemoveComponent } from './department-remove.component';

describe('DepartmentRemoveComponent', () => {
  let component: DepartmentRemoveComponent;
  let fixture: ComponentFixture<DepartmentRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
