import { Injectable } from "@angular/core";
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';

import { Item } from 'src/app/models/item/item.model';
import * as firebase from 'firebase';
import { getRandomString } from 'selenium-webdriver/safari';

export class ListService {

    id: any
    database = firebase.database();
    db = firebase.firestore();
    constructor(
        private firedb: AngularFireDatabase,
        

    ) {

    }

    writeData(name, product, quantity) {
        this.id = getRandomString()

        this.database.ref('list' + this.id).set({
            name: name,
            product: product,
            quantity: quantity
        });

    }

    getAllLists(){
        let ref = this.db.collection('list').doc()
        let getLists = ref.get()
            .then(res => {
                if (!res.exists) {
                    console.log('Sem listas');
                } else {
                    console.log(res.data());
                }
            })
            .catch(err => {
                console.log('Deu erro!', err);
                
            })
    }

    getList(listId){
        const ref = this.database.ref('list' + listId)
        ref.on('value', (res) => {
            res.val()
            console.log(res.val());
            
        })
    }


    async getListById(id) {

    }
}