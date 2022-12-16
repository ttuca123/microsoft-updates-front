import { ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PageForm } from 'app/config/page-form';
import { MicrosoftUpdateService } from 'app/services/microsoft-update.service';
import { PatchUpdate } from 'app/vo/patch-update';
import { Subscribable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-microsoft-updates-filter',
  templateUrl: './microsoft-updates-filter.component.html',
  styleUrls: ['./microsoft-updates-filter.component.scss']
  
})
export class MicrosoftUpdatesFilterComponent implements OnInit,  OnDestroy, DoCheck {
  
  @Input() filtro: PatchUpdate;
  pager: PageForm;  
  subscription: Subscription;

  constructor(private microsoftUpdateService: MicrosoftUpdateService) { }
  
  //Hook responsável por detectar mudanças nos valores dos campos
  ngDoCheck(): void {

     this.pager.filtrado = false;

     console.log(this.filtro.ID.trim());
     if(this.filtro.ID.trim() !== '') {
      this.pager.filtrado = true;
     }

  }


  ngOnInit() {
    
    this.filtro = this.microsoftUpdateService.novo();
    this.pager = new PageForm();
  }  

  public paginar($event) {

    this.buscar();
  }

  public buscar() {
    

    this.subscription = this.microsoftUpdateService.filter(this.pager.pageable.pageNumber, this.pager.size, this.filtro)
    .subscribe(page => {       
        
        this.pager = page;        
        
    }), err => {
      console.error(err);
    };
    
  }
  

  ngOnDestroy(): void {
    
    if(this.subscription) {

      this.subscription.unsubscribe();
    }
  }

}
