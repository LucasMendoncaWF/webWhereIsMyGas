import { Component, Input, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() info;
  @Input() deleteUrl: string;
  keys: Array<String>;

  constructor(
    private requestService: RequestsService
  ) { }

  ngOnInit() {
    if (this.info) {
      this.keys = Object.keys(this.info[0]);
    }
  }

  async delete(id) {
    await this.requestService.deleteInfo(this.deleteUrl, id).toPromise();
    location.reload();
  }

}
