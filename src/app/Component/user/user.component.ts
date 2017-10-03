import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	name:string = 'sharif';
  posts:string[];
	address:{
      street:string,
      house:string,
      sector:string
  }

  hobbies:string[];

  constructor(private dataservice:DataService) {

   }

  ngOnInit() {

  	this.name = "jhon doe";
  	this.address = {
      street : 'road 10',
      house:'no numnber',
      sector:"no sector"
    }

    this.hobbies = ['one','two','three'];

    this.dataservice.getData().subscribe((posts)=>{
      this.posts = posts;
    });

    
  }

  onClick(){
      this.hobbies.push("another item");
    }

  add(hobby){
    this.hobbies.unshift(hobby);
  } 

  deleteItem(hobby){
    for(let i=0; i<this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
  } 

}

interface Post{
  id:number,
  title:string,
  body:string,
  userId:number

}


