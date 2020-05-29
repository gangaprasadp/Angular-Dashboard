import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sideBarOpneed = true;

  toggeleSideBarforMe: EventListener

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler(){
    console.log('DefaultComponent called this method');
    this.sideBarOpneed = !this.sideBarOpneed;
  }

}
