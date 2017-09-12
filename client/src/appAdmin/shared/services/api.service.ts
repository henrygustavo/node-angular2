import { Injectable } from  '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Item } from "../../models/Item";

@Injectable()
export class ApiService {
  private api_url: string = 'http://localhost:9000/api/';

  constructor(private http: Http) {

  }

  listItems(): Observable<Item[]> {
    return this.http.get(this.api_url + 'items')
      .map(res => res.json() as Item[]);
  }
}