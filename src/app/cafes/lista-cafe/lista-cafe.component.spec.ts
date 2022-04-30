/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListaCafeComponent } from './lista-cafe.component';
import { HttpClientModule } from '@angular/common/http';
import { CafeService } from '../cafe.service';
import { of } from 'rxjs';
import { Cafe } from '../cafe';

describe('ListaCafeComponent', () => {
  let component: ListaCafeComponent;
  let fixture: ComponentFixture<ListaCafeComponent>;
  let mockCafeService;
  const cafes: Cafe[] = [
    {
        "id": 1,
        "nombre": "Café Especial para tí",
        "tipo": "Blend",
        "region": "Angelópolis, Antioquia",
        "sabor": "Panela, Durazno, Caramelo",
        "altura": 1920,
        "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-para-ti-colores-cafe-colombiano-f_1_720x.jpg"
    },
    {
        "id": 2,
        "nombre": "Café Especial Navegante",
        "tipo": "Café de Origen",
        "region": "Guatapé, Antioquia",
        "sabor": "Cítrico, Naranja, Cacao",
        "altura": 1800,
        "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-navegante-cafe-colombiano-f_540x.png"
    },
    {
        "id": 3,
        "nombre": "Café Especial El Prístino",
        "tipo": "Blend",
        "region": "Chinchiná, Caldas",
        "sabor": "Chocolate negro, Caramelo",
        "altura": 1700,
        "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-pristino-1-cafe-colombiano-f_720x.png"
    }
];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCafeComponent ],
      imports: [HttpClientModule],
      providers: [{
        provide: CafeService,
        useValue: jasmine.createSpyObj('CafeService', ['getCafes'])
     }],
    })
    .compileComponents();
    mockCafeService = TestBed.get(CafeService);
    mockCafeService.getCafes.and.returnValue(of([cafes]));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have four rows on the table including title row', () => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();

        let tableRows = fixture.nativeElement.querySelectorAll('tr');
        expect(tableRows.length).toBe(4);

    });
  });

});
