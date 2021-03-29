import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { MainComponent } from './main.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

describe('MainComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainComponent
      ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        StoreModule.forRoot({})
      ],
      providers: [
        MatDialog
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
