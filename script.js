'use strict'

const elems = document.querySelector('body');


const DomElement = function(selector,height,width,bg,fontSize, position) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.position = position;

};

    document.addEventListener('DOMContentLoaded', DomElement);


DomElement.prototype.creator = function(){
    
    if(this.selector.substring(0,1) === '.'){
        const newElem = document.createElement('div');
            newElem.classList.add('block');
            elems.append(newElem);
            newElem.textContent = 'Блок DIV';
    
            newElem.style.cssText =`width: ${this.width}; height: ${this.height}; background: ${this.bg}; font-size: ${this.fontSize}; position: ${this.position};`;
    } else if(this.selector.substring(0,1) === '#'){
        const newElem2 = document.createElement('p');
        newElem2.setAttribute('id', 'best');
        elems.append(newElem2);    
        newElem2.textContent = 'Блок P';

        newElem2.style.cssText =`width: ${this.width}; height: ${this.height}; background: ${this.bg}; font-size: ${this.fontSize}; position: ${this.position};`;
    }else{
        console.log('Неверный символ')
    }
    
};



const newElement = new DomElement ('.', '100px', '100px', 'red', '20px', 'absolute');


newElement.creator();


