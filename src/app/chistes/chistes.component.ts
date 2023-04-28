import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

import { ResultadosService } from '../services/resultados.service';
import { Chistes } from '../entities/chistes';

@Component({
  selector: 'app-chistes',
  templateUrl: './chistes.component.html',
  styleUrls: ['./chistes.component.css']
})
export class ChistesComponent implements OnInit {

  chistes: any;
  constructor(private rS: ResultadosService) {
  }

  ngOnInit(): void {


    this.rS.getData().subscribe((data: any)=>{

      this.chistes = data.jokes;

      console.log(this.chistes);

    })

  }


}
