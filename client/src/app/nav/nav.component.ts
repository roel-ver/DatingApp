import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {}
  //loggedIn: boolean;
  //currentUser$: Observable<User>;

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$ = this.AccountService.currentUser$;
  }

  login(){
    this.accountService.login(this.model).subscribe(Response => {
      console.log(Response);
      //this.loggedIn = true;
    }, error => {
      console.log(error);
    })
  }
  logout(){
    this.accountService.logout();
    //this.loggedIn = false;
  }

  /*
  getCurrentUser(){
    this.AccountService.currentUser$.subscribe(user => {
      this.loggedIn = !!user; // !! boolean (if user = null, then false, alse true)
    }, error => {
      console.log(error);
    })
  }
  */
}
