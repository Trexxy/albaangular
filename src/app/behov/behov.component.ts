import { Konsult } from './../interfaces/consult';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-behov',
  templateUrl: './behov.component.html',
  styleUrls: ['./behov.component.css']
})
export class BehovComponent implements OnInit {

  consultList: Konsult[] = [];
  showGrid = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  SearchConsults() {
    this.apiService.getConsultantList().subscribe(data => {
      this.consultList = data as Konsult[];
    });
  }
  consultClick(consult: Konsult) {
    console.log('Consult clicked: ' + consult.name);
  }

}
