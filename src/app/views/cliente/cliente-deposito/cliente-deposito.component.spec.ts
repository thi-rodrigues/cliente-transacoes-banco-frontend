import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDepositoComponent } from './cliente-deposito.component';

describe('ClienteDepositoComponent', () => {
  let component: ClienteDepositoComponent;
  let fixture: ComponentFixture<ClienteDepositoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteDepositoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
