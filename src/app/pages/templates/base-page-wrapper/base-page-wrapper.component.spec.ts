import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePageWrapperComponent } from './base-page-wrapper.component';

describe('BasePageWrapperComponent', () => {
  let component: BasePageWrapperComponent;
  let fixture: ComponentFixture<BasePageWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasePageWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
