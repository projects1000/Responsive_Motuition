import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbseComponent } from './cbse.component';

describe('CbseComponent', () => {
  let component: CbseComponent;
  let fixture: ComponentFixture<CbseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CbseComponent]
    });
    fixture = TestBed.createComponent(CbseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
