import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  map = {
    lat: 51.678418,
    lng: 7.809007
  };
}

export class ModalFormComponent {
  modalFormDarkEmail = new FormControl("", Validators.email);
  modalFormDarkPassword = new FormControl("", Validators.required);
}
