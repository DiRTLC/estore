import Mock from 'mockjs'
import position from './position.json'
import surprise from './surprise.json'
import home from './home.json'
import brands from './brands.json'
import classify from './classify.json'
import classifydetail from './classifydetail.json'

Mock.mock('bigPlace', {
  data: position.city.hotcity
})

Mock.mock('detailPlace', {
  data: position.city.cityclassify
})


Mock.mock('surprise', {
  data: surprise.data['3'].goods
})

Mock.mock('home/banner', {
  data: home.datas[0]
})

Mock.mock('home/hotType', {
  data: home.datas[3]
})

Mock.mock('home/ratings', {
  data: home.datas.find(item => {
    return item.index === '464'
  })
})

Mock.mock('classify/brands', {
  data: brands.brand
})

Mock.mock('classify/classifyList', {
  data: classify.categorys
})

Mock.mock('classify/classifyAll', {
  data: classifydetail
})
