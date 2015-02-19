/**
 * Created by paul on 14.02.15.
 */
/*jshint unused:false*/

var config = {
  routes : {
    base              : '/',
    profile           : '/profile',
    offers            : '/offers',
    statistics        : '/statistics',
    trade             : '/trade',
    tradeSuccess      : '/trade/success',
    tradeFail         : '/trade/fail',
    tradeAccept       : '/trade/accept',
    managerCreate     : '/manager/create-game',
    managerManage     : '/manager/manage-game',
    lobby             : '/lobby',
    join              : '/join/:gameId',
    error             : '/error'
  },

  api : {
    connect           : 'connect',
    authenticate      : '/user/authenticate',
    user              : '/user',
    userCreate        : 'user:create',
    userReconnect     : 'user:reconnect',
    userDisconnect    : 'user:disconnect',
    userUpdate        : 'user:update',

    serverCreate      : '/game',
    serverJoin        : '/game/:gameId/join',

    playerJoined      : 'game:playerJoined',
    playerLeaved      : 'game:playerLeaved',
    playerReconnected : '',

    gameStart         : '/game/id/start',
    gameFinish        : '/game/id/finish',
    gameStarted       : 'game:started',
    gameFinished      : 'game:finished',

    sessionCreate     : '/apple/game/session',
    roundCreate       : '/game/session/round',
    sessionCreated    : 'session:new',
    roundCreated      : 'session:newRound',

    offer             : '/apple/offer/',
    offerCreated      : 'offer:created',
    offersCurRoundGet : 'apple/offer/currentRound',

    trade_create      : '/offer/:offerId/trade',
    trade_update      : '/trade/:tradeId',
    trade_accept      : '/trade/:tradeId/accept',


    completedTransactions : '/apple/completedTransactions',
    transactionUpdate     : 'transaction:updated',

    trade_created     : 'trade:created',
    trade_updated     : 'trade:updated',
    trade_accepted    : 'trade:accepted',

    secret            : 'apple',
    sails             : 'http://192.168.0.197:1338'
  },

  bc : {
    onNewRound : 'onNewRound',
    onNewSession : 'onNewSession',
    onGameFinished : 'onGameFinished',
    onOfferCreated : 'onOfferCreated',
    onTradeCreated : 'onTradeCreated',
    onTradeUpdated : 'onTradeUpdated',
    onTradeAccepted : 'onTradeAccepted'
  },

  nav : {
    home    : 'home',
    offers  : 'offers',
    profile : 'profile',
    stats   : 'stats',
    manager : 'manager'
  }
};
