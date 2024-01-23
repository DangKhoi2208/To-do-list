import { Component } from '@angular/core';
export interface menuItems{
  name: string;
  icons: string;
  active: boolean;
}
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  public  menu:menuItems[]= [
    {
     name:'Home',
     active:true,
     icons:'material-symbols-outlined',
    },

    {
      name:'News',
      active:false,
      icons:'fff',
    },

    {
      name:'Contact',
      active:false,
      icons:'fff',
    },

    {
      name:'About',
      active:false,
      icons:'fff',
    },
  ];

    hadleClick(selectedItem:  menuItems){
      for(let i=0;i < this.menu.length;i++ ){
        this.menu[i].active = false;
      }
      selectedItem.active = true;
    }
}
