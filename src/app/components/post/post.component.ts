import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  inputValue=''

  constructor() { }

  ngOnInit(): void {
  }

  onBlur(val:String){
    console.log("onBlur:"+val);
  }
  

  onInput(event:KeyboardEvent){
    console.log(event);
    this.inputValue=(<HTMLInputElement>event.target).value
  }
  onInput_(event?:any){
    console.log(event);
    this.inputValue=event.target.value;
  }
  
  onClickMe(){
    console.log('onClickMe');
  }
}
