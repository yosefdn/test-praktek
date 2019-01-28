import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IUsers } from './contacts.model';


@Injectable()

export class ApiService {

  private _usersURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: Http) {
  }

  getUsers(): Observable<IUsers[]> {
    return this.http
      .get(this._usersURL)
      .map((response: Response) => {
        return <IUsers[]>response.json();
      })
      .catch (this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
