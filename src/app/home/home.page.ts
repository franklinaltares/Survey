import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  birthdate: string = '01/01/2022';

  onBirthdateChange(event: any) {
    this.birthdate = event.detail.value;
  }

  setBirthdate() {
    this.birthdate = '15/05/1990';
  }

  setCustomBirthdate() {
    this.birthdate = '21/03/1985';
  }
}
