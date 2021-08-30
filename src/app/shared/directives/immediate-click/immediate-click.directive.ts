import { Directive, ElementRef, OnInit } from '@angular/core';
import { element } from 'protractor';
import { PlataformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Directive({
  selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit{

  constructor(
    private element: ElementRef<any>,
    private platformDetector: PlataformDetectorService
    ) { }


  ngOnInit(): void {
    this.platformDetector.isPlataformBrowser && this.element.nativeElement.click();
  }


}
