import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigurationPdiPage } from './configuration-pdi.page';

describe('ConfigurationPdiPage', () => {
  let component: ConfigurationPdiPage;
  let fixture: ComponentFixture<ConfigurationPdiPage>;

  beforeEach((async() => {
    fixture = TestBed.createComponent(ConfigurationPdiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
