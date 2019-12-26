'use strict';

import getPopupCall from './modules/popup-call';
import getPopupDiscount from './modules/popup-discount';
import getPopupCheck from './modules/popup-check';
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

/***** accordion *****/
accordion();

/***** more *****/
more();

/***** calc-accordion *****/
calcAccordion();

/***** ajax *****/
sendForm();


