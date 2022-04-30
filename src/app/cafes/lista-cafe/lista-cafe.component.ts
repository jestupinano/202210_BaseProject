import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-lista-cafe',
  templateUrl: './lista-cafe.component.html',
  styleUrls: ['./lista-cafe.component.css']
})
export class ListaCafeComponent implements OnInit {

  private cafesTotal: Array<Cafe> = [];
  cafes: Array<any> = [];

  constructor(private cafeService: CafeService) { }

  ngOnInit() {
    this.getCafes();
  }

  public getTitulosTabla(): string[]{
    return Object.keys(this.cafes[0]);
  }

  public cantidadElementos(cafeBuscar: string): number {
    const encontrados = this.cafes.filter( ({ tipo }) => tipo === cafeBuscar );
    return encontrados.length;
  }

  private getCafes(){
    this.cafeService.getCafes().subscribe((cafesTotal) => {
      this.cafes = cafesTotal.map(obj => {
        return { id: obj.id, nombre: obj.nombre, tipo: obj.tipo, region: obj.region }
     });
     this.cafesTotal = cafesTotal;
    });
  }

}
