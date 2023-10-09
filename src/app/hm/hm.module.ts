import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { IonicModule } from '@ionic/angular';
import { ContactComponent } from '../contact/contact.component';


@NgModule({
  declarations: [AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[AboutComponent, ContactComponent]
})
export class HMModule { }
