// pages/components/custom-comp/custom-comp.js
Component({
  /**
   * 组件的属性列表，外部传入
   */
  properties: {
    innerText: {
      type: Object,
      value: null
    },
    myProperty2: String, // 简化的定义方式
    // url中的params参数
    paramA: Number,
    paramB: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    someData: {} // 私有数据，可用于模板渲染
  },
  // 组件生命周期声明对象
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    // 优先级高于外部直接定义的 attached 组件生命周期函数
    attached: function () { console.log('自定义组件-lifetimes-attached') },
    moved: function () { console.log('自定义组件-lifetimes-moved') },
    detached: function () { console.log('自定义组件-lifetimes-detached') },
  },
  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { console.log('自定义组件-lifetimes-out-attached') }, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready: function () { console.log('自定义组件-lifetimes-out-ready') },
  // 无onLoad方法
  onLoad: function () {
    console.log('自定义组件-onLoad-onLoad')
    console.log("this.data.paramA", this.data.paramA)
    console.log("this.data.paramB", this.data.paramB)
  },
  pageLifetimes: {
    show: function () { console.log('自定义组件-pageLifetimes-show') },
    hide: function () { console.log('自定义组件-pageLifetimes-hide') },
    resize: function () { console.log('自定义组件-pageLifetimes-resize') },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function (e) {
      var myEventDetail = { e } // detail对象，提供给事件监听函数
      var myEventOption = { bubbles: true }// 触发事件的选项
      console.log('自定义组件中的事件', myEventDetail, myEventOption)
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    },
    // 这里是一个自定义方法
    onMyButtonTap: function () {
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
      })
    },
    // 内部方法建议以下划线开头
    _myPrivateMethod: function () {
      // 这里将 data.A[0].B 设为 'myPrivateData'
      this.setData({
        'A[0].B': 'myPrivateData'
      })
    },
  }
})
