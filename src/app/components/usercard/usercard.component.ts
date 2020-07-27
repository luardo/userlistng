import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() email: string;
  @Input() avatar: string;

  constructor() {
  }

  ngOnInit() {
  }

}
