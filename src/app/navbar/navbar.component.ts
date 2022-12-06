import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'; 
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = "angular";
  counterVip: string[] = [];
  counterIdle: string[] = [];
  counterActive: string[]= [];
  counterBlocked: string[]= [];
  counterSuspended: string[]= [];
  
  constructor( private api : ApiService,) { }

  ngOnInit(): void {
    this.getNumber();
  }

  getNumber(){
    this.api.getUser().subscribe({
      next:(res)=>{

        for(let i = 0; i<=res.length; i++){
          if(res[i].status == "Active"){
            this.counterActive.push(res[i].name);
          }else if(res[i].status == "Blocked"){
            this.counterBlocked.push(res[i].name);
          }else if(res[i].status == "Suspended"){
            this.counterSuspended.push(res[i].name);
          }

          if(res[i].category == "VIP User"){
        this.counterVip.push(res[i].name);
          }else if( res[i].category == "Idle User"){
        this.counterIdle.push(res[i].name);
          }
        }
      },
      error:(err)=>{
        alert("Error while fetching")
      }
    })
  }
}

