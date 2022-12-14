import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css']
})
export class CategoryDialogComponent implements OnInit {

  userForm !: FormGroup;
  actionBtn : string = "Save";
  constructor(private formBuilder : FormBuilder, 
    private api : ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<CategoryDialogComponent> ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name : ['', Validators.required],
      surname : ['',Validators.required],
      email : ['',Validators.required],
      category : ['', Validators.required],
      birthDay : ['',Validators.required],
      idCard  : ['',Validators.required]
      
    });
    if(this.editData){
      this.actionBtn = "Update";
      this.userForm.controls['name'].setValue(this.editData.name);
      this.userForm.controls['surname'].setValue(this.editData.surname);
      this.userForm.controls['email'].setValue(this.editData.email);
      this.userForm.controls['category'].setValue(this.editData.category);
      this.userForm.controls['birthDay'].setValue(this.editData.birthDay);
      this.userForm.controls['idCard'].setValue(this.editData.idCard);
      
    }
  }
  addUser(){
    if(!this.editData){
      if(this.userForm.valid){
        this.api.postUser(this.userForm.value)
        .subscribe({
          next:(res)=>{
            alert("Category added successfully");
            this.userForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("Error while adding User");
          }
        })
      }
    }else{
      this.updateUser()
    }
  }
  updateUser(){
    this.api.putUser(this.userForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Update Successfully");
        this.userForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error update!");
      }
    })
  }
}
