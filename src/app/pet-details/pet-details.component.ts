import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../models/pet.model';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentPet: Pet = {
    name: '',
    breed: '',
    gender: '',
    age: 0,
    description: ''
  };

  message = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    if (!this.viewMode) {
      this.message = '';
      this.getPet(this.route.snapshot.params["id"]);
    }
  }

  getPet(id: any): void {
    this.userService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPet = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


  updatePet(): void {
    this.message = '';

    this.userService.updatePet(this.currentPet.id, this.currentPet)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This pet was updated successfully!';
          this.router.navigate(['/pets']);
        },
        error: (e) => console.error(e)
      });
  }

  deletePet(): void {
    this.userService.delete(this.currentPet.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/pets']);
        },
        error: (e) => console.error(e)
      });
  }

}
