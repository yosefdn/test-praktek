import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IPhotos} from './photos.model';

@Injectable()

export class ApiService {

  private _photosURL = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: Http) {
  }

  getUsers(): Observable<IPhotos[]> {
    return this.http
      .get(this._photosURL)
      .map((response: Response) => {
        return <IPhotos[]>response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
