import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component"
import { NotfoundComponent } from "./notfound/notfound.component";
import { ProfileComponent } from "./profile/profile.component";
import { ShopComponent } from "./shop/shop.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "./admin/auth.guard";

export const appRoutes = [
    {path : 'profile', component:ProfileComponent},
    {path : 'shop', component:ShopComponent},
    {path : 'admin', component:AdminComponent, canActivate:[AuthGuard]},
    
    {path : '', component:HomeComponent},
    {path: '**', component:NotfoundComponent}
    
];