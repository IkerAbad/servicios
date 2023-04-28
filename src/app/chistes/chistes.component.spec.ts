import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChistesComponent } from './chistes.component';

describe('ChistesComponent', () => {
  let component: ChistesComponent;
  let fixture: ComponentFixture<ChistesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChistesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChistesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
