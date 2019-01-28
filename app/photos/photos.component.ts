import { Component, OnInit } from '@angular/core';
import { ApiService } from '../photos.service';
import { IPhotos } from '../photos.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  providers: [ApiService]
})

export class PhotosComponent implements OnInit {

  _photosArray: IPhotos[];

  constructor(private apiService: ApiService) { }

  getUsers(): void {
    this.apiService.getUsers()
      .subscribe(
        resultArray => this._photosArray = resultArray,
        error => console.log('Error :: ' + error)
      );
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
