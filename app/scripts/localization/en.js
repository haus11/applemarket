/**
 * Created by paul on 04.01.15.
 */

'use strict';

var app = angular.module('applemarketApp');

app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
    TITLE_TRADE           : 'Negotiate ',

    TRADE_TITLE           : 'Trade',
    TRADE_INITIATED       : 'The Trade is processing...',
    TRADE_OFFER           : 'Offer',
    TRADE_PROFIT          : 'Profit',
    TRADE_SEND_OFFER      : 'Submit offer',
    TRADE_SEND_NEW_OFFER  : 'Submit new offer',
    TRADE_ACCEPTED        : 'accepted',
    TRADE_DECLINED        : 'declined',
    TRADE_OFFER_ACCEPTED  : 'Offer was accepted.',
    TRADE_OFFER_DECLINED  : 'Offer was declined.',

    WORD_WITH             : 'with',

    SYSTEM_CANCEL         : 'Cancel',
    SYSTEM_APPROVE        : 'Approve',
    SYSTEM_ACCEPT         : 'Accept',
    SYSTEM_DECLINE        : 'Decline',
    SYSTEM_OK             : 'Ok'
  });
});
