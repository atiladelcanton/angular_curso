import { Component } from '@angular/core';

import { MomentService } from 'src/app/services/moment/moment.service';
import { Moment } from 'src/interfaces/Moment';
import { enviroment } from 'src/enviroment/enviroment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  allMoments: Moment[] = [];
  moments: Moment[] = [];
  private baseApiUrl: string = enviroment.baseApiUrl;

  constructor(private momentService: MomentService) {}

  ngOnInit() {
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;
      data.map(
        (item) =>
          (item.created_at = new Date(item.created_at!).toLocaleString('pt-BR'))
      );
      this.allMoments = data;
      this.moments = data;
    });
  }
}
