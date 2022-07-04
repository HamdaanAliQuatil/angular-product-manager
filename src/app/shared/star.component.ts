import { Component, Input, OnChanges, Output, EventEmitter } from "@angular/core";
// import {  } from "stream";

@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})

export class StarComponent implements OnChanges{
    @Input() rating: number = 0;
    cropWidth: number = 75;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void{
        this.cropWidth = this.rating * 75 / 5;
    }

    onClick(): void{
        this.ratingClicked.emit(`Clicked ${this.rating}`);
    }
}