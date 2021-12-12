import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';

@Injectable()
export class GoogleSuggestionService {
  private serviceRoot = "https://suggestqueries.google.com/complete/search?client=firefox&ds=bo&q=";

  constructor(
    private httpClient:HttpClient,
  ) {

  }

  suggest(searchTerm:string):Observable<any> {
    return this.httpClient.jsonp(this.serviceRoot + searchTerm,"callback").pipe(
      map((value:any)=>{
        if(value && value.length && value.length >= 2) {
          return value[1];
        } else {
          throw "Could not parse search suggestions from Google."
        }
    }));
  }
}
