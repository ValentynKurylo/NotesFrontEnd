import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";
import { OneUserComponent } from './components/one-user/one-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { NotationService } from './services/notation.service';
import { MyNotationsComponent } from './components/my-notations/my-notations.component';
import { PostNotationComponent } from './components/post-notation/post-notation.component';
import { NotationComponent } from './components/notation/notation.component';
import { MyfriendComponent } from './components/myfriend/myfriend.component';




let routers = [
  {path: 'users', component: UserComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: MyNotationsComponent},
  {path: 'postNotation', component: PostNotationComponent},
  {path: 'friend', component: MyfriendComponent},
  {path: ':id', component: NotationComponent},

]

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OneUserComponent,
    UserDetailsComponent,
    RegistrationComponent,
    LoginComponent,
    MyNotationsComponent,
    PostNotationComponent,
    NotationComponent,
    MyfriendComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, NotationService],
  bootstrap: [AppComponent]
})
export class AppModule {}

