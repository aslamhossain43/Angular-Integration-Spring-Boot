import { Component, OnInit } from '@angular/core';
import { CollegeService } from './college.service';
import { College } from './college';
import { Response } from '@angular/http';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss']
})
export class CollegeComponent implements OnInit {

  constructor(private cService: CollegeService) { }
college = new College();
colleges: College[];
  ngOnInit() {
  }
addCollege(): void {
  this.cService.addCollege(this.college)
  .subscribe(response => {

  },
  (error) => {

  });
}
}
