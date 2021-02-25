import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-portofolio",
  templateUrl: "./portofolio.component.html",
  styleUrls: ["./portofolio.component.css"]
})
export class PortofolioComponent implements OnInit {
  @ViewChild("porto") private parentRef: ElementRef<HTMLElement>;
  portoCont: HTMLElement;

  // @Input() triggerScroll: boolean;

  constructor() {}

  ngAfterViewInit() {
    this.portoCont = this.parentRef.nativeElement;
  }

  ngOnInit() {
    // this.portoCont.scrollIntoView({ behavior: "smooth" });
  }
}
