import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDebitoComponent } from './cliente-debito.component';

describe('ClienteDebitoComponent', () => {
  let component: ClienteDebitoComponent;
  let fixture: ComponentFixture<ClienteDebitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteDebitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteDebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
