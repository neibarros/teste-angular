import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LucrosComponent } from './lucros.component';

describe('LucrosComponent', () => {
  let component: LucrosComponent;
  let fixture: ComponentFixture<LucrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LucrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LucrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
