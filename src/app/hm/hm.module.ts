import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { IonicModule } from '@ionic/angular';
import { ContactComponent } from '../contact/contact.component';
import { KidsComponent } from '../kids/kids.component';
import { MenComponent } from '../men/men.component';
import { WomenComponent } from '../women/women.component';


@NgModule({
  declarations: [AboutComponent, ContactComponent,KidsComponent,MenComponent, WomenComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[AboutComponent, ContactComponent, KidsComponent, MenComponent, WomenComponent]
})
export class HMModule { }
