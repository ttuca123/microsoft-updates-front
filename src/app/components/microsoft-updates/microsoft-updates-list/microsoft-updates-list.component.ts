
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PatchUpdate } from 'app/vo/patch-update';

@Component({
  selector: 'app-microsoft-updates-list',
  templateUrl: './microsoft-updates-list.component.html',
  styleUrls: ['./microsoft-updates-list.component.scss']  
  
})
export class MicrosoftUpdatesListComponent implements OnInit, OnChanges {  

  @Input('lista') lista: [];
  @Input('filtro') fitro: any;

  DATA_HORA = 'dd/MM/yyyy HH:mm';

  constructor() { }

  ngOnInit() {

    console.log('lista 2 ');
    console.log(`${this.lista}`);

    //this.listaPatchs = [{alias: '', contexto: '', cvrfUrl: '', documentTitle: '', id: '', severity: '' }];

  }

  ngOnChanges() {

    console.log(this.lista);
  }

}
