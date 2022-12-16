
import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { PageForm } from 'app/config/page-form';
import {MatPaginatorIntl} from '@angular/material/paginator';

@Component({
  selector: 'app-microsoft-updates-list',
  templateUrl: './microsoft-updates-list.component.html',
  styleUrls: ['./microsoft-updates-list.component.scss']  
  
})
export class MicrosoftUpdatesListComponent implements OnInit{  

  @Input('pager') pager: PageForm;
  @Input('filtrado') filtrado: boolean;
  @Output('paginar') paginar: EventEmitter<any> = new EventEmitter();    

  pageAtual = 1;
  DATA_HORA = 'dd/MM/yyyy HH:mm';
  displayedColumns: string[] = ['id', 'alias', 'documentTitle', 'gravidade', 'inicioRelease', 'atualRelease', 'cvrfUrl'];
  

  constructor() {    
   }

  ngOnInit() {
    
    this.pager = new PageForm();     
    
  }  


  pageChanged(event: any): void {      

     // console.log(this.paginador);
    this.pager.pageable.pageNumber=event.pageIndex;
    this.pageAtual = event.pageIndex;     
    this.paginar.emit(); 
  }

}
