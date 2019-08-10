import { Injectable } from "@angular/core";
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';


import { Item } from 'src/app/models/item/item.model';

export class ListService{
    private ListRef= this.db.list<Item>
    ('list');

    constructor(
        private db: AngularFireDatabase
        
    ){ }

    getList(){
        return this.ListRef
    }

    addItem(item: Item){
        return this.ListRef.push(item)
    }

    async getListByName(name: string){
       const item = await this.db.database.ref('name').orderByChild('name').equalTo(name).on('value', function(snapshot){
          
           
           snapshot.forEach(function(childSnapshot){
               var key = childSnapshot.key
               var childData = childSnapshot.val()

               console.log(childData.product);
               
            })
       })
        
            
        
       return item
    }
}