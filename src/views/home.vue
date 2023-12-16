<template>
	<div class="bigBox">
		<div class="pc">
			<div class="header">
				<p class="userInfo">
					<el-button @click="openUserSet">{{ username }}
						<i class="el-icon-setting"></i>
					</el-button>
				</p>
				<br />
				<br />
				<h1>WtdChat!</h1><br />
				<h2>与300+AI角色对话，或创建自己的AI角色</h2><br />
				<p>
					<el-button @click="startChat">立即开聊</el-button>
					<el-button @click="setRoter('/createAi')">创建AI角色</el-button>
				</p><br /><br />
				<div class="typeNavBox">
					<ul>
						<li v-for="(item, index) in aiAllList" :key="index" @click="activeType = index"
							:class="activeType == index ? 'activeType' : ''">
							{{ item.categoryInfo.label }}</li>
					</ul>

				</div>
			</div>
			<div style="background-color: #f0f1f2;">
				<div v-for="(item, index) in AiList" :key="index">
					<p class="typeTitle"><i class="el-icon-collection-tag"></i>{{
						item.categoryInfo.label }}</p>
					<div :class="openLeft ? 'aiListBox' : 'openLeft aiListBox'">
						<div class="aiListBac" @click="goChatting(itemAi)" v-for="(itemAi, indexAi) in item.robots"
							:key="indexAi">
							<div class="aiList">
								<el-image :src="itemAi.avatar"></el-image>
								<div class="aiText">
									<h5 class="text">{{ itemAi.robotName }}</h5>
									<p class="desc">{{ itemAi.abstract }}</p>
								</div>
							</div>
						</div>

					</div>
					<div style="clear: both;"></div>
				</div>
			</div>
		</div>
		<div class="iphone"></div>
	</div>
</template>

<script>
import { getPub } from '@/api/home'
import { AiList } from '@/assets/js/data'
export default {
	name: "home_page",
	data() {
		return {
			username: "",
			aiAllList: AiList,
			AiList: AiList,
			activeType: 0,
			openLeft: false

		}
	},
	watch: {
		activeType(val) {
			if (val == 0) {
				this.AiList = this.aiAllList
			} else {
				this.AiList = [this.aiAllList[val]];
			}
		}
	},
	mounted() {
		if (localStorage.getItem("userInfo") != null) {
			this.username = JSON.parse(localStorage.getItem("userInfo")).username;
			getPub().then(res => {
				if (res.data.code == 200) {
					this.aiAllList = AiList.concat(res.data.data);
					this.AiList = AiList.concat(res.data.data);
				} else if (res.data.code == 10002) {
					this.$message({
						type: err === 'warning',
						message: res.data.msg
					});
					localStorage.clear()
				}
			})
		} else {
			this.username = "请登录"
		}
		// this.getAiListFn()
		this.$Eventbus.$on('openLeft', (res) => {
			this.openLeft = res
		})
		// console.log(this.AiList)
	},
	methods: {
		startChat() {
			this.$router.push({ path: "/chatting", query: { id: 136 } })
		},
		setRoter(path) {
			this.$router.push(path)
		},
		openUserSet() {
			if (this.username === "请登录") {
				this.$router.push("/login")
			} else {
				this.$Eventbus.$emit('openUserSet')
			}

		},
		goChatting(item) {
			this.$router.push({ path: "/chatting", query: { id: item.id } })
		}
		// getAiListFn() {
		// 	getAiList({}).then(res => {
		// 		// console.log(res)
		// 	})
		// 	getRoots({}).then(res => {
		// 		// console.log(JSON.stringify(res.data))
		// 	})
		// }
	}
}
</script>

<style lang="scss" scoped>
.bigBox .pc {
	background: #f0f1f2 url(https://ty-cdn.9w9.com/aichat/assets/friend-bg-b609dc71.webp) center top/100% 550px no-repeat;
}


.header {
	background: #f0f1f2 url(https://ty-cdn.9w9.com/aichat/assets/friend-bg-b609dc71.webp) center top / 100% 550px no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0.8rem 0rem;

	.userInfo {
		text-align: right;
		box-sizing: border-box;
		position: fixed;
		top: 0.8rem;
		right: 1rem;

		.el-button {
			cursor: pointer;
			background: #693af4;
			border-radius: 2rem;
			padding: 0.5rem 0.8rem;
		}
	}

	h1 {
		-tw-text-opacity: 1;
		color: #03043d;
		font-size: 4rem;

	}

	h2 {
		-tw-text-opacity: 1;
		color: #03043d;
		font-size: 3rem;
		padding: 1rem;
		box-sizing: border-box;
		width: 95%;
	}

	.el-button {
		background: #693af4;
		padding: 0.8rem 2rem;
		color: white;
	}

	.typeNavBox {
		width: 95%;
		overflow-x: auto;

		ul {
			display: flex;

			li {
				margin-right: 16px;
				padding: 0 26px;
				height: 28px;
				line-height: 28px;
				border-radius: 14px;
				transition: all .4s;
				background: #fff;
				list-style: none;
				flex-shrink: 0;
				cursor: pointer;
			}

			.activeType {
				background: #693af4;
				color: #fff;

			}
		}

	}
}

.typeTitle {
	font-size: 1.2rem;
	font-weight: 800;
	text-align: left;
	padding-left: 2rem;

	i {
		margin-right: 0.3rem;
	}
}



.aiListBox {
	padding: 1rem;

	.aiListBac {
		background: rgba(0, 0, 0, 0);
		padding: 0.5rem;
		box-sizing: border-box;
		width: calc((100% / 6));
		float: left;
	}

	.aiList {
		display: flex;
		align-items: center;
		justify-content: start;
		background: #fff;
		width: 100%;
		padding: 1rem;
		box-sizing: border-box;

		.el-image {
			width: 3rem;
			height: 3rem;
			border-radius: 50%;
			margin-right: 0.5rem;
		}

		.aiText {
			text-align: start;
			width: calc(100% - 4rem);

			.text {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.desc {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				width: calc(100% - 2rem);
				font-size: 0.5rem;
				color: #888888;
				margin-top: 0.5rem;
			}
		}
	}

	.aiList:hover {
		transform: translateY(-2px);
		box-shadow: 0 26px 40px -24px #0024644d;
	}
}

.openLeft {
	.aiListBac {
		width: calc((100% / 5)) !important;
	}
}

@media only screen and (min-width: 1200px) and (max-width: 1450px) {
	.aiListBox {
		.aiListBac {
			width: calc((100% / 5) - 1rem) !important;
		}
	}

	.openLeft {
		.aiListBac {
			width: calc((100% / 4) - 1rem) !important;
		}
	}
}

@media only screen and (min-width: 1000px) and (max-width: 1200px) {
	.aiListBox {
		.aiListBac {
			width: calc((100% / 4) - 1rem) !important;
		}
	}

	.openLeft {
		.aiListBac {
			width: calc((100% / 3)) !important;
		}
	}
}

@media only screen and (min-width: 800px) and (max-width: 1000px) {
	.aiListBox {
		.aiListBac {
			width: calc((100% / 4)) !important;
		}
	}

	.openLeft {
		.aiListBac {
			width: calc((100% / 3)) !important;
		}
	}
}

@media only screen and (min-width: 640px) and (max-width: 800px) {
	.aiListBox {
		.aiListBac {
			width: calc((100% / 3)) !important;
		}
	}

	.openLeft {
		.aiListBac {
			width: calc((100% / 2)) !important;
		}
	}
}

@media only screen and (min-width: 560px) and (max-width:640px) {
	.aiListBox {
		.aiListBac {
			width: calc((100% /3)) !important;
		}
	}

	.openLeft {
		.aiListBac {
			width: calc((100% / 3)) !important;
		}
	}

	.header {
		h1 {
			font-size: 2.375rem;
		}

		h2 {
			font-size: 0.9375rem;
		}
	}
}

@media only screen and (max-width:490px) {
	.aiListBox {
		.aiListBac {
			width: calc((100% /2)) !important;
		}
	}

	.openLeft {
		.aiListBac {
			width: calc((100% / 2)) !important;
		}
	}

	.header {
		h1 {
			font-size: 2.375rem;
		}

		h2 {
			font-size: 0.9375rem;
		}
	}

	.header {
		h1 {
			font-size: 2.375rem;
		}

		h2 {
			font-size: 0.9375rem;
		}
	}
}

@media only screen and (max-width:325px) {
	.aiListBox {
		.aiListBac {
			width: calc((100% /1)) !important;
		}
	}

	.openLeft {
		.aiListBac {
			width: calc((100% / 1)) !important;
		}
	}

	.header {
		h1 {
			font-size: 2.375rem;
		}

		h2 {
			font-size: 0.9375rem;
		}
	}
}
</style>
