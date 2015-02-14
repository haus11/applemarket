/**
 * Created by paul on 14.02.15.
 */

var config = {
  routes : {
    base            : '/',
    profile         : '/profile',
    offers          : '/offers',
    statistics      : '/statistics',
    trade           : '/trade',
    trade_success   : '/trade/success',
    trade_fail      : '/trade/fail',
    trade_accept    : '/trade/accept',
    manager_create  : '/manager/create-game',
    manager_manage  : '/manager/manage-game',
    lobby           : '/lobby',
    init_player     : '/initPlayer'
  },

  api : {
    connect         : 'connect',
    authenticate    : '/user/authenticate',
    user            : '/user',
    user_create     : 'user:create',
    user_reconnect  : 'user:reconnect',
    user_disconnect : 'user:disconnect',

    server_create   : '/api/server',
    server_join     : ''
  },

  nav : {
    home    : 'home',
    offers  : 'offers',
    profile : 'profile',
    stats   : 'stats',
    manager : 'manager'
  }
};
