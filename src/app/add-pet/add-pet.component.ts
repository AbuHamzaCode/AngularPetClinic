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
    age: 0,
    description: ''
  };

  submitted = false;
  tokenStorageService: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  savePet(): void {
    const data = {
      name: this.pet.name,
      breed: this.pet.breed,
      gender: this.pet.gender,
      age: this.pet.age,
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
      age: 0,
      description: ''
    };
  }

}
