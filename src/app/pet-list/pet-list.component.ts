import { Component, OnInit } from '@angular/core';
import { Pet } from '../models/pet.model';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets?: Pet[];
  currentPet: Pet = {};
  currentIndex = -1;
  name = '';
  tokenStorageService: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retrievePets();
  }

  retrievePets(): void {
    this.userService.getAll()
      .subscribe({
        next: (data) => {
          this.pets = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrievePets();
    this.currentPet = {};
    this.currentIndex = -1;
  }

  setActivePet(pet: Pet, index: number): void {
    this.currentPet = pet;
    this.currentIndex = index;
  }

  removeAllPets(): void {
    this.userService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchName(): void {
    this.currentPet = {};
    this.currentIndex = -1;
    this.userService.get(this.name)
      .subscribe({
        next: (data) => {
          this.currentPet = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
