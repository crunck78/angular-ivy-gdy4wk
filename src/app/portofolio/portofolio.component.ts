import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {

  @ViewChild("porto") private MyProp: ElementRef<HTMLElement>;
  portoCont: HTMLElement;

   @Input() triggerScroll: boolean;

  constructor() { }

  ngAfterViewinit(){
    this.portoCont = this.MyProp.nativeElement;
    console.log(this.portoCont);
  }

  ngOnInit() {
  }

}