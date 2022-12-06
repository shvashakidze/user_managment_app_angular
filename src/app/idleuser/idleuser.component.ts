import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';
import { ApiService } from '../services/api.service'; 
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-idleuser',
  templateUrl: './idleuser.component.html',
  styleUrls: ['./idleuser.component.css']
})
export class IdleuserComponent implements OnInit {

  displayedColumns: string[] = [  'name', 'surname', 'category'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  idleUser : string[] = [];
  
  
  
  constructor(private dialog : MatDialog, private api : ApiService, ) { }

  ngOnInit(): void {
   this.getCategories();
    
  }
  openDialog() {
    this.dialog.open(CategoryDialogComponent, {
      width:'30%',
      
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getCategories();
      }
    })
  }
  
  

  getCategories(){
     this.api.getUser()
     .subscribe({
      next:(res)=>{
        for(let i = 0; i<=res.length; i++){
          if(res[i].category == "Idle User"){
            
            this.idleUser.push(res[i]);
            this.dataSource = new MatTableDataSource(this.idleUser);
            
            console.log(res[i].name);
            
          }
        }
       
        
      },
      error:(err: any)=>{
        alert("Error while fetching")
      }
     })
  }
  editUser(row: any){
    this.dialog.open(CategoryDialogComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getCategories();
      }
    })
  }
  deleteUser(id:number){
    this.api.deleteUser(id)
    .subscribe({
      next:(res: any)=>{
        alert("User deleted Successfully")
        this.getCategories();
      },
        error:()=>{
          alert("Error deleted")
        }
    })
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
     
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
