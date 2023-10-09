import { Component} from '@angular/core';
import { IonicSlides } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
 swiperModules = [IonicSlides];
  message : boolean = false;
  message1: boolean = false;
  showContent(){
    this.message = !this.message;
  }

  showContent1(){
    this.message1 = !this.message1;
  }

}
