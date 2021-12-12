import {OrderBy} from 'src/app/models/order-by.enum';
import {environment} from 'src/environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';


@Injectable()
export class GoogleBooksService {
  serviceRoot = "https://www.googleapis.com/books/v1/";

  constructor(
    private httpClient:HttpClient
  ) {  }

  search(searchTerms: string,startIndex: number, resultSize: number, orderBy: OrderBy): Observable<any>{
    const endpoint = "volumes?";
    let safeSearchParams = new HttpParams({
      fromString: "startIndex=" + startIndex + "&maxResults=" + resultSize + "&q=" + searchTerms + "&orderBy=" + orderBy,
    });
    let url = this.serviceRoot + endpoint + safeSearchParams.toString();
    return this.httpClient.jsonp(url,"callback");
  }
}
