import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { CartModalComponent } from './cart-modal.component';

describe('CartModalComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CartModalComponent
      ],
      imports: [
        StoreModule.forRoot({})
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(CartModalComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
