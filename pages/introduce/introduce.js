// pages/introduce/introduce.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData: [
      {
        title: '大数据',
        image: '/pages/img/introduce/img2.png',
        icon: '/pages/img/introduce/data.svg',
        content: '打通医联体内各个医院数据库构建病人每次就认错的完整病历；打通医联休内各个医院数据中心构建跨医院的病历互联互通；汇聚各家医院的病历构建每镁患者在各家医院历次就诊的完整档案。'
      }, {
        title: '知识图谱',
        image: '/pages/img/introduce/img2.png',
        icon: '/pages/img/introduce/knowledge.svg',
        content: '打通医联体内各个医院数据库构建病人每次就认错的完整病历；打通医联休内各个医院数据中心构建跨医院的病历互联互通；汇聚各家医院的病历构建每镁患者在各家医院历次就诊的完整档案。'
      }, {
        title: '辅助决策',
        image: '/pages/img/introduce/img2.png',
        icon: '/pages/img/introduce/intr.svg',
        content: '打通医联体内各个医院数据库构建病人每次就认错的完整病历；打通医联休内各个医院数据中心构建跨医院的病历互联互通；汇聚各家医院的病历构建每镁患者在各家医院历次就诊的完整档案。'
      }, {
        title: '自诊工具',
        image: '/pages/img/introduce/img2.png',
        icon: '/pages/img/introduce/tool.svg',
        content: '打通医联体内各个医院数据库构建病人每次就认错的完整病历；打通医联休内各个医院数据中心构建跨医院的病历互联互通；汇聚各家医院的病历构建每镁患者在各家医院历次就诊的完整档案。'
      }
    ],
    currentIndex: 0
  },
  change(e) {
    this.setData({
      currentIndex: e.currentTarget.id
    })
  },
  swiperChange (e) {
    this.setData({
      currentIndex: e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})