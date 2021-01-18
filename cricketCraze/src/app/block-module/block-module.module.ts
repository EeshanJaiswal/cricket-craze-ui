import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule
  ]
})
export class BlockModuleModule { }
