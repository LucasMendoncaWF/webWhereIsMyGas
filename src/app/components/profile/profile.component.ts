import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private requestService: RequestsService
  ) { }

  vehicles = [];
  travels = [];
  isShowingForm = false;

  ngOnInit() {
    this.getVehicles();
    this.getTravels();
  }

  showForm() {
    this.isShowingForm = true;
  }


  async getVehicles() {
    const vehicles =  await this.requestService.getInfoFromApi('veiculo').toPromise();
    this.vehicles = vehicles['content'];
  }

  async getTravels() {
    const travels =  await this.requestService.getInfoFromApi('viagem').toPromise();
    this.travels = travels['content'];
  }

  closeModal(event) {
    console.log(event)
    this.isShowingForm = event;
  }
}
