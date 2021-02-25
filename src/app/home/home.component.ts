import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { PortofolioComponent } from "../portofolio/portofolio.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  @ViewChild(PortofolioComponent)
  private portoComp: PortofolioComponent;

  constructor() {}

  ngAfterViewInit() {
    //this.portoComp.portoCont.scrollIntoView();
  }

  ngOnInit() {}

  showPorto() {
    this.portoComp.portoCont.scrollIntoView();
  }
}
