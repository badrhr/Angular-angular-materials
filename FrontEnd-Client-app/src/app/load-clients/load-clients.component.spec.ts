import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadClientsComponent } from './load-clients.component';

describe('LoadClientsComponent', () => {
  let component: LoadClientsComponent;
  let fixture: ComponentFixture<LoadClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
