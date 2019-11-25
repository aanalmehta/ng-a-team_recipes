import { Input, ElementRef, HostListener, Directive } from '@angular/core';

@Directive({
    selector: '[foodType]'
})

export class VegNonVegTypeDirective {
    @Input('foodType') foodType: string;
    constructor(private elRef: ElementRef) {
    }
    @HostListener('mouseover') onMouseOver() {
        this.changeBackgroundColor((this.foodType == 'v') ? 'green' : 'red');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.changeBackgroundColor('black');
    }
    private changeBackgroundColor(color: string) {
        this.elRef.nativeElement.style.backgroundColor = color;
    }
}