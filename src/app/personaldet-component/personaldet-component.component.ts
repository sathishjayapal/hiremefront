import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-personaldet-component',
  templateUrl: './personaldet-component.component.html',
  styleUrls: ['./personaldet-component.component.css']
})
export class PersonaldetComponentComponent implements OnInit {
  pageTitle = 'Sathish Jayapal -Hire Me';
  pageSubtitle = 'Current projects';

  constructor() {
  }

  ngOnInit(): void {
  }

}
