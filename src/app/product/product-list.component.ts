import { Component, OnInit } from "@angular/core";
import { __importDefault } from "tslib";
import { IProduct } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    
    private _listFilter: string = "";
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        console.log("In setter: ", value);
        this.filteredProduct = this.performFilter(value);
    }

    filteredProduct: IProduct[] = [];
    products: IProduct[]= [
        {
            "productId": 2,
            "productName": "Hammer",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon Capacity",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://rukminim2.flixcart.com/image/416/416/k4px6kw0/hammer/w/3/x/tubular-steel-handle-curved-claw-hammer-10-5-inch-vasundhara-original-imafnjznd3ghjfyd.jpeg?q=70"
        },
        {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2021",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "assets/images/garden_cart.png"
        }
    ];

    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().includes(filterBy));  
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.listFilter = "cart";
    }
}