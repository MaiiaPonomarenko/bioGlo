'use strict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'fetch-polyfill';
import 'es6-promise';

import getPopupCall from './modules/popup-call';
import getPopupDiscount from './modules/popup-discount';
import getPopupCheck from './modules/popup-check';
import getPopupDirector from './modules/popup-director';
import accordion from './modules/accordion';
import more from './modules/more';
import calcAccordion from './modules/calc-accordion';
import sendForm from './modules/ajax';
import valid from './modules/validator';

/***** validator *****/
valid();

/***** popup *****/
getPopupCall();
getPopupDiscount();
getPopupCheck();
getPopupDiscount();
getPopupDirector();

/***** accordion *****/
accordion();

/***** more *****/
more();

/***** calc-accordion *****/
calcAccordion();

/***** ajax *****/
sendForm();


