import { Component, OnInit } from '@angular/core';
import { ProductsService } from "./products.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers: [ProductsService]
})
export class ShopComponent implements OnInit {

  constructor(private products:ProductsService) { }

  ngOnInit() {
  }

}
