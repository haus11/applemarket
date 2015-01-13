/**
 * Created by paul on 04.01.15.
 */

'use strict';

var app = angular.module('applemarketApp');

app.config(function ($translateProvider) {
  $translateProvider.translations('de', {
    TRADE_TITLE       : 'Verhandeln',
    TRADE_INITIATED   : 'Das Angebot wird bearbeitet...',
    TRADE_OFFER       : 'Angebot',
    TRADE_PROFIT      : 'Profit',
    TRADE_SEND_OFFER  : 'Angebot abgeben',
    TRADE_ACCEPTED    : 'Angenommen',
    TRADE_DECLINED    : 'Abgelehnt',
    TRADE_OFFER_ACCEPTED : 'Angebot wurde angenommen.',
    TRADE_OFFER_DECLINED : 'Angebot wurde abgelehnt.',

    WORD_WITH         : 'mit',

    SYSTEM_CANCEL     : 'Abbrechen',
    SYSTEM_APPROVE    : 'Akzeptieren',
    SYSTEM_ACCEPT     : 'Annehmen',
    SYSTEM_DECLINE    : 'Ablehnen',
    SYSTEM_OK         : 'Ok'
  });
});
