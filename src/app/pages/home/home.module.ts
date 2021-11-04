import { UserService } from './../../services/user.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import {NgxPaginationModule} from 'ngx-pagination';

export const routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'detail/:id',
      component: DetailComponent,
    }
  ];

@NgModule({
  declarations: [HomeComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgxPaginationModule
  ],
  providers: [UserService]
})
export class HomeModule { }
