import { ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { MicrosoftUpdateService } from 'app/services/microsoft-update.service';
import { PatchUpdate } from 'app/vo/patch-update';
import { Subscribable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-microsoft-updates-filter',
  templateUrl: './microsoft-updates-filter.component.html',
  styleUrls: ['./microsoft-updates-filter.component.scss']
  
})
export class MicrosoftUpdatesFilterComponent implements OnInit,  OnDestroy {

  lista: [];
  filtro: PatchUpdate;

  constructor(private microsoftUpdateService: MicrosoftUpdateService) { }

  subscription: Subscription;

  ngOnInit() {
    this.lista = [];
    this.filtro = this.microsoftUpdateService.novo();
    
  }

  public buscar() {
    
    
    this.subscription = this.microsoftUpdateService.filter(0, 5, this.filtro)
    .subscribe(p => {       
        
      this.lista = p;    
      console.log(`${this.lista}`);    

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
