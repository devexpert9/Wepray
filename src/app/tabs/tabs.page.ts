import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  activeId: any = 1;

  constructor(private router: Router) {
    this.activeId = localStorage.getItem('id');
  }

  onClickPrayer() {
    var id = localStorage.getItem('id');

    if (id == null) {
      this.activeId = 1;
      this.router.navigateByUrl('/tabs/prayer/' + 1);
    } else {
      this.activeId = id;
      this.router.navigateByUrl('/tabs/prayer/' + this.activeId);
    }
  }
}
