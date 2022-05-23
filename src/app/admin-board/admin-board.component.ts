import { Component, OnInit } from '@angular/core';
import { Pet } from '../models/pet.model';
import { User } from '../models/user.model';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent implements OnInit {

  userArray: User[] = [];
  petArray: Pet[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllOwners()
    .subscribe({
      next: (data) => {
        this.userArray = data;
      },
      error: (e) => console.error(e)
    });
    this.adminService.getAllPets()
    .subscribe({
      next: (data) => {
        this.petArray = data;
      },
      error: (e) => console.error(e)
    });
  }

  deleteOwner(id: any): void {
    this.adminService.deleteOwner(id)
    .subscribe({
      next: (res) => {
        console.log(res);
        window.location.href = '/admin';
      },
      error: (e) => console.log(e)
    });
  }

  deletePet(id: any): void {
    this.adminService.deletePet(id)
    .subscribe({
      next: (res) => {
        console.log(res);
        window.location.href = '/admin';
      },
      error: (e) => console.log(e)
    });
  }
}
