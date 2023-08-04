import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideArrowComponent } from './side-arrow.component';

describe('SideArrowComponent', () => {
  let component: SideArrowComponent;
  let fixture: ComponentFixture<SideArrowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideArrowComponent]
    });
    fixture = TestBed.createComponent(SideArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
