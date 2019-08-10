import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item/item.model';
import { ListService } from '../services/list/list.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.page.html',
  styleUrls: ['./create-list.page.scss'],
})
export class CreateListPage implements OnInit {
 
  item: Item = {
    name: '',
    product: '',
    quantity: undefined
  }

  constructor(
    private list: ListService,
    public NavCtrl: NavController
  ) { }

  ngOnInit() {
  }

  addItem(item: Item){
    this.list.addItem(item).then(ref => {
      this.NavCtrl.navigateForward('/home')
    })
  }
  
}
