import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PdiPage } from './pdi.page';

describe('PdiPage', () => {
  let component: PdiPage;
  let fixture: ComponentFixture<PdiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PdiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
