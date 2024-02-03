import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { HeadingComponent } from './components/heading/heading.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { TopicComponent } from './components/topic/topic.component';
import { ImageComponentComponent } from './components/image-component/image-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    HeadingComponent,
    ParagraphComponent,
    TopicComponent,
    ImageComponentComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
