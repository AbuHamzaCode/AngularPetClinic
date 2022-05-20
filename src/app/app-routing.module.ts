import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetComponent } from './add-pet/add-pet.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'pets', component: PetListComponent},
  { path: 'pets/:id', component: PetDetailsComponent},
  { path: 'add', component: AddPetComponent},
  { path: '', redirectTo: 'profile', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
