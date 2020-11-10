// pages/useComp/useComp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageData: { name: "来自page页面的name" }
  },
  // 页面中定义的样式
  onPageEvent: function (e, ...rest) {
    console.log('page中定义的事件', e, rest)
    const custCompRef = this.selectComponent('#custom-comp-id')
    console.log("获取到的自定义组件的实例", custCompRef)
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