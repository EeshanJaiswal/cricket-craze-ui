import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutOneComponent } from './layout-one/layout-one.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, LoginComponent, RegisterComponent, LayoutOneComponent],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent, FooterComponent, LoginComponent, RegisterComponent, LayoutOneComponent]

})
export class BlockModuleModule { }
