import {SHOPCART_SHOW, MYEPET, CHANGECITY, TOPLACE, SHOWHEADERWRAP} from './mutationType'
export default {
  shopcartshow ({commit}) {
    commit(SHOPCART_SHOW)
  },
  myepet ({commit}) {
    commit(MYEPET)
  },
  changeCity ({commit}, {c}) {
    commit(CHANGECITY, {c})
  },
  toPlace ({commit}) {
    commit(TOPLACE)
  },
  showHeaderWrap ({commit}) {
    commit(SHOWHEADERWRAP)
  }
}
