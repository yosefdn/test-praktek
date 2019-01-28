import { Component, OnInit } from '@angular/core';
import { ApiService } from '../contacts.service';
import { IUsers } from '../contacts.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [ApiService]
})

export class ContactsComponent implements OnInit {

  _usersArray: IUsers[];

  constructor(private apiService: ApiService) { }

  getUsers(): void {
    this.apiService.getUsers()
      .subscribe(
        resultArray => this._usersArray = resultArray,
        error => console.log('Error :: ' + error)
      );
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
