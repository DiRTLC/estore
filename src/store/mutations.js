import {SHOPCART_SHOW, MYEPET, CHANGECITY, TOPLACE, SHOWHEADERWRAP} from './mutationType'

export default {
  [SHOPCART_SHOW] (state) {
    state.bottomNavShow = false
  },
  [MYEPET] (state) {
    state.bottomNavShow = false
  },
  [CHANGECITY] (state, {c}) {
    state.city = c
  },
  [TOPLACE] (state) {
    state.headerWrap = false
    state.bottomNavShow = false
  },
  [SHOWHEADERWRAP] (state) {
    state.headerWrap = true
    state.bottomNavShow = true
  }

}
