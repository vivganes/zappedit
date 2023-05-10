import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { UserprofileComponent } from './component/userprofile/userprofile.component';
import { Nip07LoginComponent } from './component/nip07-login/nip07-login.component';
import { EventFeedComponent } from './component/event-feed/event-feed.component';
import { EventCardComponent } from './component/event-card/event-card.component';
import { SinglePostComponent } from './component/single-post/single-post.component';
import { ShortNumberPipe } from './pipe/short-number.pipe';
import { HashtagComponent } from './component/hashtag/hashtag.component';
import { DynamicHooksModule, HookParserEntry } from 'ngx-dynamic-hooks';

const componentParsers: Array<HookParserEntry> = [
  {component: HashtagComponent},
  // ...
];

@NgModule({
  declarations: [
    AppComponent,
    UserprofileComponent,
    Nip07LoginComponent,
    EventFeedComponent,
    EventCardComponent,
    SinglePostComponent,
    ShortNumberPipe,
    HashtagComponent
  ],
  imports: [DynamicHooksModule.forRoot({
    globalParsers: componentParsers
  }),BrowserModule, AppRoutingModule, BrowserAnimationsModule, ClarityModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}