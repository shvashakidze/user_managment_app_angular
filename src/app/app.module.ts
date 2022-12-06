import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { StatusComponent } from './status/status.component';
  import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { StatusDialogComponent } from './status-dialog/status-dialog.component';
import { VipuserComponent } from './vipuser/vipuser.component';
import { IdleuserComponent } from './idleuser/idleuser.component';
import { ActiveStatusComponent } from './active-status/active-status.component';
import { BlockedStatusComponent } from './blocked-status/blocked-status.component';
import { SuspendedStatusComponent } from './suspended-status/suspended-status.component';
import { AddUserComponent } from './add-user/add-user.component';


const appRoute : Routes = [
  {path: '', component : UsersComponent},
  {path: 'Users', component: UsersComponent},
  {path: 'Category', component: CategoryComponent},
  {path: 'Status', component: StatusComponent},
  {path: 'vip', component : VipuserComponent },
  {path: 'idle', component : IdleuserComponent},
  {path: 'active', component : ActiveStatusComponent},
  {path: 'blocked', component : BlockedStatusComponent},
  {path: 'suspended', component : SuspendedStatusComponent},
  {path: 'Add', component : AddUserComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    NavbarComponent,
    CategoryComponent,
    StatusComponent,
    UsersComponent,
    CategoryDialogComponent,
    StatusDialogComponent,
    VipuserComponent,
    IdleuserComponent,
    ActiveStatusComponent,
    BlockedStatusComponent,
    SuspendedStatusComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
