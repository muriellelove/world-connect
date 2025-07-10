import { Component, OnInit } from '@angular/core';
import { IonItem } from "@ionic/angular/standalone";
import { MENU_ITEMS } from 'src/app/config/menu.config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: false,
})
export class SidebarComponent  implements OnInit {
  menuItems = MENU_ITEMS;
  constructor() { }

  ngOnInit() {}

}
