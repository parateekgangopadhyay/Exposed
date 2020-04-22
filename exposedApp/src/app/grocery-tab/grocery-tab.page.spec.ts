import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroceryTabPage } from './grocery-tab.page';

describe('GroceryTabPage', () => {
  let component: GroceryTabPage;
  let fixture: ComponentFixture<GroceryTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroceryTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
