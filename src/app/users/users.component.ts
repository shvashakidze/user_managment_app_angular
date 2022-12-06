import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component'; 
import { ApiService } from '../services/api.service'; 
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
title = 'angularapp';
  displayedColumns: string[] = [ 'id','name', 'surname', 'email', 'idCard', 'birthDay', 'category', 'status', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
 
  

  constructor(private dialog : MatDialog, private api : ApiService){
    
  }
  ngOnInit(): void {
    this.getAllUsers();
    
  }
  
  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%',
      
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllUsers();
      }
    })
  }
 
  getAllUsers(){
     this.api.getUser()
     .subscribe({
      next:(res: any[] | undefined)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        
                      

      },
      error:(err: any)=>{
        alert("Error while fetching")
      }
     })
  }
  editUser(row: any){
    this.dialog.open(DialogComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllUsers();
      }
    })
  }
  deleteUser(id:number){
    this.api.deleteUser(id)
    .subscribe({
      next:(res: any)=>{
        alert("User deleted Successfully")
        this.getAllUsers();
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

