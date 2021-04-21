"use strict";

import Cell from './cellen.js';

class Game {
    constructor(){
        this.cells = [];

        for (let i =0; i<20; i++){
            for (let j =0; j<20; j++){
                // toevoegen van cellen
                const c = new Cell (i,j);   /* i = als x-waarde    j = als y-waarde */
                this.cells.push(c);
                
            }
        }
    }
    
    update(){
        this._cells.ForEach((c) => {
    
        });
    }
}


function init() {

}


init();



