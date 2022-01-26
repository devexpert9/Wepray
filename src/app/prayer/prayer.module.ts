import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngMusicPlayerModule } from 'ang-music-player';
import { IonicModule } from '@ionic/angular';

import { PrayerPageRoutingModule } from './prayer-routing.module';

import { PrayerPage } from './prayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngMusicPlayerModule,
    PrayerPageRoutingModule,
  ],
  declarations: [PrayerPage],
})
export class PrayerPageModule {}
