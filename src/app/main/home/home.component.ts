import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/common-services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Hola mundo';


  constructor(public vm: NotificationService) { }

  ngOnInit(): void {
  }

}
