import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({ 
    name: 'append',
    standalone: true
})
export class AppendPipe implements PipeTransform {

    // Քանի որ մեթոդը կանչել, օգտագործելուց args մեթոդի ընդունող պարամետրը կռնան տան, կռնան չտան՝ ինքը optional է էստեղ,
    // դրա համար ? նշանը կդնենք, որ ինչխոր required: false ըլլա 
    transform( value: any, args?: any ) {
        return "City Name: " + value;
    }
}