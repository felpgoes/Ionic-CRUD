import { Component } from '@angular/core';
import { ListService } from '../services/list/list.service';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Item } from '../models/item/item.model';
import { NavParams, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listItem: any

  constructor(
    //public navParams: NavParams,
    public navCtrl: NavController,
    private list: ListService
  ) {

    this.listItem = this.list.getAllLists()
    
    // this.list
    // .getList()
    // .snapshotChanges()
    // .pipe(map(
    //   changes =>{
    //     return changes.map(c => ({
    //       key: c.payload.key, ...c.payload.val()
    //     })) 
    //   }))
  }

}
