import { Needs } from './../interfaces/needs';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inkop',
  templateUrl: './inkop.component.html',
  styleUrls: ['./inkop.component.css']
})
export class InkopComponent implements OnInit {

  needList: Needs[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.LoadNeeds();
  }

  LoadNeeds() {
    this.apiService.getNeedsList().subscribe(data => {
      this.needList = data as Needs[];
      console.log(this.needList);
    });
  }
}
