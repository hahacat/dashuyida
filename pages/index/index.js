//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperData: [
      {
        image: 'elite.svg',
        cResume: '顶尖团队',
        eResume: 'Elite team'
      }, {
        image: 'medical.svg',
        cResume: '医学专家',
        eResume: 'Medical experts'
      }, {
        image: 'leading.svg',
        cResume: '国际领先',
        eResume: 'Leading international'
      }, {
        image: 'acs.svg',
        cResume: 'acs',
        eResume: 'Leading international'
      }, {
        image: 'ais.svg',
        cResume: 'ais',
        eResume: 'Leading international'
      }, {
        image: 'bigData.svg',
        cResume: '大数据',
        eResume: 'Leading international'
      }, {
        image: 'cloud.svg',
        cResume: '云计算',
        eResume: 'Leading international'
      }
    ],
    markers: [{
      id: 0,
      scale: 15,
      latitude: 40.052905,
      longitude: 116.293341,
      height: 19,
      width: 15,
      iconPath: '/pages/img/index/maker.png',
      title: '大树医达'
    }]
  },

  onLoad: function () {

  }
})
