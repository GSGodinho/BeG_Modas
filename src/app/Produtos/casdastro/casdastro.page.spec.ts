import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CasdastroPage } from './casdastro.page';

describe('CasdastroPage', () => {
  let component: CasdastroPage;
  let fixture: ComponentFixture<CasdastroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CasdastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
