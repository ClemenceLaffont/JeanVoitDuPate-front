import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ConnexionComponent } from './header/connexion/connexion.component';
import { BracketComponent } from './header/bracket/bracket.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { appRoutes } from "./app.routes";
import { RouterModule } from "@angular/router";
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from "./admin/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShopComponent,
    HomeComponent,
    RegisterComponent,
    ConnexionComponent,
    BracketComponent,
    ProfileComponent,
    NotfoundComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
