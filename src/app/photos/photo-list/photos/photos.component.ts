import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() photos: Array<Photo> = [];

  rows = [];

  constructor() { }

  ngOnInit(): void {

    this.rows = this.groupColumns(this.photos);
  }
  groupColumns(photos: Array<Photo>) {
    const newRows = [];

    for(let index = 0; index < photos.length; index+=3) {
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }



}
