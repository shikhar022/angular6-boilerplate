import { Injectable } from '@angular/core';
import { MenuItem } from '../models/MenuItem';
import { AppConstants } from '../constants/AppConstants';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuRoutes:Array<MenuItem>;

  constructor() {
    this.menuRoutes = AppConstants.getMenuRoutes();
  }

  getRoutes():Array<MenuItem>{
    return this.menuRoutes;
  }
}
