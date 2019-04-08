import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppComponentService } from "./app.component.service";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './products/product.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { CoustmersComponent } from './coustmers/coustmers.component';
import { RegisterComponent } from './login/register.component';
import { CustomerComponentService } from './coustmers/coustmer.component.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    AboutComponent,
    AdminComponent,
    ContactComponent,
    CoustmersComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'app-home',
        component:HomeComponent
      },{
        path :'app-login',
        component:LoginComponent  
      },{
        path : 'app-products',
        component:ProductComponent
      },{
        path : 'app-coustmers',
        component:CoustmersComponent
      },{
        path : 'app-about',
        component:AboutComponent
      },{
        path : 'app-admin',
        component:AdminComponent
      },{
        path : 'app-contact',
        component:ContactComponent
      },{
        path : 'app-register',
        component:RegisterComponent
      }
    ])
  ],
  providers: [AppComponentService,CustomerComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
