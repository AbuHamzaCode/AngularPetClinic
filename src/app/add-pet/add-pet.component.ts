import { Component, OnInit } from '@angular/core';
import { Pet } from '../models/pet.model';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css'],
})
export class AddPetComponent implements OnInit {
  pet: Pet = {
    name: '',
    breed: '',
    gender: '',
    age: '',
    description: ''
  };

  submitted = false;
  tokenStorageService: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  savePet(): void {
    const data = {
      name: this.pet.name,
      breed: this.pet.name,
      gender: this.pet.name,
      age: this.pet.name,
      description: this.pet.description
    };

    this.userService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newPet(): void {
    this.submitted = false;
    this.pet = {
      name: '',
      breed: '',
      gender: '',
      age: '',
      description: ''
    };
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
