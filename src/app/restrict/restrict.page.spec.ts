import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestrictPage } from './restrict.page';

describe('RestrictPage', () => {
  let component: RestrictPage;
  let fixture: ComponentFixture<RestrictPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestrictPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
