import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../services/list/list.service';
import { snapshotChanges } from '@angular/fire/database';


@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.page.html',
  styleUrls: ['./edit-list.page.scss'],
})
export class EditListPage implements OnInit {

  private item: string;

  constructor(
    public navCtrl: NavController,
    public route: ActivatedRoute,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.item = this.route.snapshot.paramMap.get('id')
    this.getList(this.item)
  }

  async getList(item){
    console.log(this.item);
    
    const list = await this.listService.getListById(item)
    console.log(list);

    
  }

}
