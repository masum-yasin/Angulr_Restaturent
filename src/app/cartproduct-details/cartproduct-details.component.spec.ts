import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartproductDetailsComponent } from './cartproduct-details.component';

describe('CartproductDetailsComponent', () => {
  let component: CartproductDetailsComponent;
  let fixture: ComponentFixture<CartproductDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartproductDetailsComponent]
    });
    fixture = TestBed.createComponent(CartproductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
