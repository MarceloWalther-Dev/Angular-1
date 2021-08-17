import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-form',
  templateUrl: './photos-form.component.html',
  styleUrls: ['./photos-form.component.css']
})
export class PhotosFormComponent implements OnInit {

  declaration = 'fotos carregadas com sucesso';

  constructor() { }

  ngOnInit(): void {
  }

}
