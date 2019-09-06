import { MenuItem } from '../models/MenuItem';

export class AppConstants{

    static getMenuRoutes():Array<MenuItem>{
        return [
            {
                link: "dashboard",
                name: "Dashboard"
            },
            {
                link: "profile",
                name: "Profile"
            },
            {
                link: "campaigns/transactional",
                name: "Transactional Campaigns"
            },            
            {
                link: "campaigns/promotional",
                name: "Promotional Campaigns"
            },
            {
                link: "campaign/new",
                name: "Add New Campaign"
            }
        ];
    }

    constructor(){}
}