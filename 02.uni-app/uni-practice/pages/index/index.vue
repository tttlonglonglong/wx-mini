<template>
	<!-- 
		1.模板语法
		2.数据绑定
		3.条件判断
		4.列表渲染
		5.基础组件的使用
		6.自定义组件的使用(简单的使用)
		8.条件编译
		9.页面布局
	 -->
	
	<view class="content" v-bind:class="className" v-on:click="open">
		<view>
			<text>{{title}}</text>
			<view>test</view>
		</view>
		<view>
		  <view>条件渲染</view>
		  <view v-show="show">v-show</view>
		  <view v-if="showIf">v-if</view>
		</view>
	</view>

</template>

<script>
	export default {
		// 初始化数据
		data() {
			return {
				title: '我是一个被修改过的值',
				className: 'active',
				show: false,
				showIf: false
			}
		},
		// 不建议：关闭页面，再打开页面，再次调用变量不会被初始化，data的值都是同一
		// 不建议：保留上次的变量值，不会被初始化
		// data:{

		// },
		onLoad() {
			setTimeout(()=>{
				this.title  = '2s 之后修改的标题'
				wx.setNavigationBarTitle({
				  title: '趣味表情' 
				})
			}
			, 800)
		},
		methods: {
			open() {
				this.title = '我被点击了1'
				console.log("我被点击了")
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
