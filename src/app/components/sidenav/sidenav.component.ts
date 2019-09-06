import { Component, OnInit } from '@angular/core';
import { MenuItem } from "../../models/MenuItem";
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  menu:Array<MenuItem>;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.getRoutes();
  }

}
