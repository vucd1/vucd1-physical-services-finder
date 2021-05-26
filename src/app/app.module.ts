import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
// import { WelcomePage } from './welcome/welcome.page';
// import { LoginPage } from './login/login.page';
// import { SignupPage } from './signup/signup.page';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


// import { GoogleMapsComponent } from './google-maps/google-maps.component'

@NgModule({
  declarations: [AppComponent,
    ],
  entryComponents: [
    ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
