import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(
    private requestService: RequestsService
  ) { }
  vehicleOptions = [];


  ngOnInit() {
    this.getOptions();
  }

  async getOptions() {
    const vehicles =  await this.requestService.getInfoFromApi('veiculo').toPromise();
    this.vehicleOptions = vehicles['content'];
  }

  filterInfo(event) {
    // filtra
  }
}
