import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  colorToggle=true;

  toggle=true;
  
  arr=[1,2,34,5,89456,456 ,645]

   now: Date=new Date();
   
  constructor() { }

  ngOnInit(): void {
  }

}
