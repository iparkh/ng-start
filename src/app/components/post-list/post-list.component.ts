import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  title ='Initial'
  constructor() { }

  ngOnInit(): void {
  }
  onInput(event){
    console.log(event);
    this.title=event.target.value;
  }
}
