import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarFichaPage } from './listar-ficha.page';

describe('ListarFichaPage', () => {
  let component: ListarFichaPage;
  let fixture: ComponentFixture<ListarFichaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarFichaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarFichaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
