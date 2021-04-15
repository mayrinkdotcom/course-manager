import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html'
})

export class StarComponent implements OnChanges {
    
    @Input()
    rating: number = 0;

    starWidth: number = 0;

    ngOnChanges(): void {
        this.starWidth = this.rating * 94 / 5;
    }
}