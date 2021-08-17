import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  //styleUrls: []
})
export class PhotoComponent{

  @Input() description = ''; // @Input vem do app.component.html, o atributo description é preenchido com o valor que vem do app-component.html
  @Input() url = ''; // @Input vem do app.component.html, o atributo url é preenchido com o valor que vem do app-component.html

}
