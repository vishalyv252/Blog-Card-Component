import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
})
export class AvatarComponent {

  image_link:String='assets/avatar.png';
  name:String="Corey Lubin";
  time:String="4 h ago";

}
