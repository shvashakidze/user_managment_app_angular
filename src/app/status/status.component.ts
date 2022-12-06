import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StatusDialogComponent } from '../status-dialog/status-dialog.component';
import { ApiService } from '../services/api.service'; 
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'surname', 'status', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  
  
  
  constructor(private dialog : MatDialog, private api : ApiService, ) { }

  ngOnInit(): void {
   this.getAllCategories();
    
  }
  openDialog() {
    this.dialog.open(StatusDialogComponent, {
      width:'30%',
      
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllCategories();
      }
    })
  }
  
  

  getAllCategories(){
     this.api.getUser()
     .subscribe({
      next:(res)=>{
        
          
            
            
            this.dataSource = new MatTableDataSource(res);
            
            
            
          
        
       
        
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
        this.getAllCategories();
      }
    })
  }
  deleteUser(id:number){
    this.api.deleteUser(id)
    .subscribe({
      next:(res: any)=>{
        alert("User deleted Successfully")
        this.getAllCategories();
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