import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredidComponent } from './credid.component';

describe('CredidComponent', () => {
  let component: CredidComponent;
  let fixture: ComponentFixture<CredidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
