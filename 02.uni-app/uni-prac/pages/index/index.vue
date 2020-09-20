<template>
	<view class="content" v-bind:class="className" v-on:click="open">
		<text>{{title}}</text>
	</view>
</template>

<script>
	export default {
		// 初始化数据
		data() {
			return {
				title: 'hello uni-app',
				className: 'active',
			}
		},
		// 不建议：再次调用变量不会被初始化，data的值都是同一个
		// data:{

		// },
		onLoad() {
			setTimeout(()=>{
				this.title  = 'hello'
			}
			,2000)
		},
		methods: {
			open() {
				this.title = '我被点击了'
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
