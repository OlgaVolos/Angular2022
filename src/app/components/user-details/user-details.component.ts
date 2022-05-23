import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


import {IUser} from "../../interfaces";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails: IUser

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUser;

      if (state) {
        this.userDetails = state;
      } else {
        this.userService.getUser(id).subscribe(value => this.userDetails = value)
      }
    })
  }

}
