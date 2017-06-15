import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({

    selector: '[autoGrow]',
    host: {
        '(focus)' : 'onFocus()',
        '(blur)' : 'onBlur()'
    }

})
export class AutoGrowDirective{


    //ElementRef and Renderer are Core Angular2 Services
    constructor(private el: ElementRef, private renderer: Renderer){

    }

    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    }

    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '80');
    }

}