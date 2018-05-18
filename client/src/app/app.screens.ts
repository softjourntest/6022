/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu';
import { logingreen_PhonePortrait } from '../pages/logingreen/PhonePortrait/logingreen';
import { home_PhonePortrait } from '../pages/home/PhonePortrait/home';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    logingreen_PhonePortrait,
    home_PhonePortrait
  ];
  static mapping = {
    'logingreen': {
      PhonePortrait: logingreen_PhonePortrait
    },
    'home': {
      PhonePortrait: home_PhonePortrait
    }
  }
}