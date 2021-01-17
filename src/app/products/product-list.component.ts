import { Component, OnInit } from '@angular/core';
import {IProduct} from './product'
import {ProductService} from './product.service'

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });
        
    }
    
    constructor(private productService: ProductService) {
    }

    pageTitle: string = 'Products List';
    imgWidth: number = 50;
    imgMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    _listFilter: string;

    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];


    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
        product.ProductName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Products List: ' + message;
    }
}