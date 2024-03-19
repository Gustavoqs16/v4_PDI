import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemPreferencesPage } from './system-preferences.page';

describe('SystemPreferencesPage', () => {
  let component: SystemPreferencesPage;
  let fixture: ComponentFixture<SystemPreferencesPage>;

  beforeEach((async() => {
    fixture = TestBed.createComponent(SystemPreferencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
