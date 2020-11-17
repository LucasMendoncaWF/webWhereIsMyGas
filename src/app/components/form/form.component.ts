import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor(
    private requestService: RequestsService
  ) { }

  formData = {
    idUsuario: 1 // mock
  };

  ngOnInit() {
  }

  async sendInfo(event) {
    event.preventDefault();
    await this.requestService.postInfoToApi('veiculo', this.formData).toPromise();
    location.reload();

  }

  closeModal() {
    this.close.emit(false);
  }

  editField(event) {
    this.formData[event.target.name] = event.target.value;
  }
}
