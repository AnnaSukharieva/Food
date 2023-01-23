import calc from './modules/calc';
import cards from './modules/cards';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import forms from './modules/forms';
import { openModal } from './modules/modal';


window.addEventListener('DOMContentLoaded', function () {
    const modalTimerId = setTimeout(() => openModal('.modal, modalTimerId'), 50000);

    // const
        // tabs = require('./modules/tabs'),
        // timer = require('./modules/timer'),
        // modal = require('./modules/modal'),
        // cards = require('./modules/cards'),
        // forms = require('./modules/forms');
        // calc = require('./modules/calc'),
        // slider = require('./modules/slider');
    
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prewArr: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        curretCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2023-03-11');
    cards();
    calc();
    forms('form', modalTimerId);

});