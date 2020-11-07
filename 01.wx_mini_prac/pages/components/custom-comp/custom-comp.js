// pages/components/custom-comp/custom-comp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerText: {
      type: Object,
      value: null
    }
    // owner:"owner-properties"，
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){}
  }
})
