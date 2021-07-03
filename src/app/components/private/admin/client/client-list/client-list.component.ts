import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss','./../../../../../../assets/css/sb-admin-2.css']
})
export class ClientListComponent implements OnInit {
userList :any[]=[]
  constructor(private userService:UserService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.userService.getUserAll().subscribe(
      res=>{
        this.userList = res
      },
      err=>{
        console.log(err);
        
      }
    )
  }
  delete(user:any){
    let index = this.userList.indexOf(user);
    this.userList.splice(index, 1)
    this.userService.deleteUser(user._id).subscribe(

      res => {
        this.toastr.error(res.message)
      },
      err => {
        console.log(err);

      }
    )
  }
  }


