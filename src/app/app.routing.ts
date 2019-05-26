import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "../app/login/login.component";
import { RegisterComponent } from "../app/register/register.component";
import { WelcomeComponent } from "../app/welcome/welcome.component";
const appRoutes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "", component: WelcomeComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
