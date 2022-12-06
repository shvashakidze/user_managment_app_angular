import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  constructor( private formBuilder : FormBuilder, private api : ApiService) { }

  userForm = this.formBuilder.group({
      name : ['', Validators.required],
      surname : ['',Validators.required],
      email : ['',Validators.required],
      birthDay : ['',Validators.required],
      idCard  : ['',Validators.required]
 })

 addUser(){
  if(this.userForm.valid){
    this.api.postUser(this.userForm.value)
    .subscribe({
      next:(res)=>{
        alert("User added successfully");
        this.userForm.reset();
        
      },
      error:()=>{
        alert("Error while adding User");
      }
    })
  
}
 }
  ngOnInit(): void {
  }

}

