import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AivanteLibComponent } from './aivante-lib.component';

describe('AivanteLibComponent', () => {
  let component: AivanteLibComponent;
  let fixture: ComponentFixture<AivanteLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AivanteLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AivanteLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
