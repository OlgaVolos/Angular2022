import {ActivatedRoute, Router} from "@angular/router";

import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: IComment

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  getDetails(): void {
this.router.navigate([this.comment.id], {relativeTo: this.activatedRoute,
  state: {comment: this.comment}
}).then()
  }
}
//в activatedRoute зберігається вся уннформація про урлу
//щоб не підкреслювало navigate, потрібно вкінці додати .then()
