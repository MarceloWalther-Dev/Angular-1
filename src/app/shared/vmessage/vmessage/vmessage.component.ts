import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vmessage',
  templateUrl: './vmessage.component.html',
  styleUrls: ['./vmessage.component.css']
})
export class VmessageComponent implements OnInit {


  @Input() title = '';
  constructor() { }

  ngOnInit(): void {
  }

}
