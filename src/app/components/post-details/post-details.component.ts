import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IPost} from "../../interfaces";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postDetails: IPost

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['post'] as IPost;

      if (state) {
        this.postDetails = state
      } else {
        this.postService.getPost(id).subscribe(value => this.postDetails = value)
      }
    })
  }

}
