import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-slide-show",
  templateUrl: "./slide-show.component.html",
  styleUrls: ["./slide-show.component.css"]
})
export class SlideShowComponent implements OnInit {
  @Output() showPorto: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  scrollToPorto() {
    this.showPorto.emit(null);
  }
}
