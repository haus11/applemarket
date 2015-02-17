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

    gameStart           : '/game/id/start',
    gameFinish          : '/game/id/finish',
    gameStarted         : 'game:started',
    gameFinished        : 'game:finished',

    sessionNew          : '/game/gameId/session',
    roundNew            : '/game/gameId/session/sessionCount/round',
    sessionsGet         : '/game/gameId/sessions'
  },

  nav : {
    home    : 'home',
    offers  : 'offers',
    profile : 'profile',
    stats   : 'stats',
    manager : 'manager'
  }
};
