import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HospitalTabPage } from './hospital-tab.page';

describe('HospitalTabPage', () => {
  let component: HospitalTabPage;
  let fixture: ComponentFixture<HospitalTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HospitalTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
