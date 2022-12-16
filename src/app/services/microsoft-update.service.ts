import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatchUpdate } from 'app/vo/patch-update';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * @author Artur Cavalcante 
 * @since 15/12/2022 15:08
 */
export class MicrosoftUpdateService {

  URL_BASE = environment.url;

  constructor(private http: HttpClient) {

   }

   public novo():PatchUpdate{

    let patch: PatchUpdate = {
      ID: '',
      Alias: '',
      DocumentTitle: '',
      Severity: '',
      InitialReleaseDate: new Date(),
      CurrentReleaseDate: new Date(),
      CvrfUrl: '',
      Contexto: ''
    }

    return patch;

   }

   /**
    * @author Artur Cavalcante
    * @since 15/12/2022 15:07
    * @returns Observable de Lista de Patchs de atualização microsoft
    */
   public getUpdates(): Observable<any> {
    
      let endpoint = `${this.URL_BASE}/v1/patchs/`      
      
      return this.http.get(endpoint);
      
   }

   /**
    * 
    * @param page 
    * @param linesPerPage 
    * @param obj 
    * @returns Observable de Lista de Patchs paginado
    */
   public filter(page:number, linesPerPage: number, obj: PatchUpdate): Observable<any> {
    
    page = (page < 0) ? 0 : page;
    let endpoint = `${this.URL_BASE}/v1/patchs/` ;

    const params = new HttpParams()
      .set('page', page.toString())
      .set('linesPerPage', linesPerPage.toString())
      .set('filter', JSON.stringify(obj));

    return this.http.get(endpoint, { params });
  }


  
}
