import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from '../services/api.service'; 
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { StatusDialogComponent } from '../status-dialog/status-dialog.component';

@Component({
  selector: 'app-suspended-status',
  templateUrl: './suspended-status.component.html',
  styleUrls: ['./suspended-status.component.css']
})
export class SuspendedStatusComponent implements OnInit {
  displayedColumns: string[] = [  'name', 'surname', 'status'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  suspended : string[] = [];
  
  
  
  constructor(private dialog : MatDialog, private api : ApiService, ) { }

  ngOnInit(): void {
   this.getStatus();
    
  }
  openDialog() {
    this.dialog.open(StatusDialogComponent, {
      width:'30%',
      
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getStatus();
      }
    })
  }
  
  

  getStatus(){
     this.api.getUser()
     .subscribe({
      next:(res)=>{
        for(let i = 0; i<=res.length; i++){
          if(res[i].status == "Suspended"){
            
            this.suspended.push(res[i]);
            this.dataSource = new MatTableDataSource(this.suspended);
            
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
    this.dialog.open(StatusDialogComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getStatus();
      }
    })
  }
  deleteUser(id:number){
    this.api.deleteUser(id)
    .subscribe({
      next:(res: any)=>{
        alert("User deleted Successfully")
        this.getStatus();
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
