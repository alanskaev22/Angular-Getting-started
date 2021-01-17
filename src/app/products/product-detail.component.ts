import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from './product.service'


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct;;
  errorMessage: string;
  pageTitle: string = 'Product Detail for: ';

  


  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(
      product => {
        this.product = product[0];
      }
      );
  }

  onBack(): void {
    this.router.navigate(['products']);
  }

}
