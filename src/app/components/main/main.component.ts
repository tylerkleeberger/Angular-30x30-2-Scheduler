import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { MethodService } from '../method.service';

const emptyItem: Item = {
  id: '',
  name: '',
  description: '',
  priority: false
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  scheduledItem = emptyItem;
  items = [] 

  

  constructor(private itemService: MethodService) { }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems() {
    this.itemService.all().subscribe((result:any) => this.items = result);
  }

  saveItem(item) {
    this.itemService.create(item).subscribe(result => this.fetchItems());
  }

  deleteItem(itemId) {
    this.itemService.delete(itemId).subscribe(result => this.fetchItems());

  }



}
