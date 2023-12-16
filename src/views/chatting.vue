<template>
    <div class="chattingBox">
        <div class="chatLeft">
            <div class="header">
                <p>{{ chatData.robotName }}({{ currentChat }})</p>
                <p class="operate">
                    <img style="margin-right:1rem" src="@/assets/images/export.png" alt="" srcset="">
                    <img src="@/assets/images/menu.png" @click="isCollapse = true" alt="" srcset="">
                </p>
            </div>

            <div class="chatListBox" ref="chatListBox">
                <ul>
                    <li :class="item.type == 'AI' ? 'chatList' : 'chatList userChat'" v-for="(item, index) in chatList"
                        :key="index">
                        <img :src="item.imgUrl" alt="">
                        <div class="text">
                            <p>{{ item.time }}</p>
                            <p class="desc">
                                <span style="white-space: pre-wrap;"
                                    v-if="!isInit && !loading && index === chatList.length - 1 && item.type == 'AI' && index != 0">{{
                                        displayedMessages[index]
                                    }}</span>
                                <span v-else-if="!isInit && loading && index === chatList.length - 1" class="blink"></span>
                                <span v-else style="white-space: pre-wrap;"> {{ item.description }}</span>
                                <a-float-button-group trigger="click" type="primary" :style="{ right: '24px' }">
                                    <template #icon>
                                        <CustomerServiceOutlined />
                                    </template>
                                    <a-float-button />
                                    <a-float-button>
                                        <template #icon>
                                            <CommentOutlined />
                                        </template>
                                    </a-float-button>
                                </a-float-button-group>
                            </p>
                        </div>
                        <button
                            v-if="!isInit && !loading && index === chatList.length - 1 && item.type == 'AI' && index != 0"
                            @click="resend" style="float:right ;">⟳</button>
                    </li>
                </ul>
            </div>
            <div class="chatInput">
                <el-button class="title">
                    <img src="@/assets/images/saoba.png" alt="">
                    <span>新话题</span>
                </el-button>
                <div class="chatText">
                    <el-input placeholder="来说点什么吧...（Shift + Enter = 换行）" class="input-with-select" v-model="message">
                        <el-button @click="send" slot="append" icon="el-icon-s-promotion"
                            :disabled="disabledValue"></el-button>
                    </el-input>
                </div>
            </div>
        </div>
        <div class="chatRight">
            <div class="aiListBox">
                <div class="aiList">
                    <el-image :src="chatData.avatar"></el-image>
                    <div class="aiText">
                        <h5 class="text">{{ chatData.robotName }}</h5>
                        <p class="desc">{{ chatData.abstract }}</p>
                    </div>
                </div>
            </div>
            <el-tabs v-model="activeName">
                <el-tab-pane name="first">
                    <span slot="label"><i class="el-icon-time"></i> 历史话题</span>
                    <div class="xjht">
                        <el-button size="mini" @click="newChat()">
                            新建话题
                        </el-button>
                        <div class="messageBox">
                            <el-badge value="x" class="item">
                                <i class="el-icon-chat-square"></i>
                            </el-badge>
                        </div>
                    </div>
                    <div style="height: 37rem;overflow: auto;">
                        <div class="talkList" v-for="(item, index) in chats" :key="index"
                            :style="{ backgroundColor: serialNumber === index ? '#f1f0fa' : '#f4f4f5' }">
                            <div @click="selectChat(index)">
                                <i class="el-icon-chat-dot-square"></i>
                                <span>{{ item.name }}</span>
                            </div>
                            <i class="el-icon-edit" @click="editClick(item.id)"></i>
                            <i class="el-icon-delete" @click="deleteClick(item.id)"></i>
                        </div>
                    </div>

                </el-tab-pane>
                <el-tab-pane name="second">
                    <span slot="label"><i class="el-icon-user"></i> 角色信息</span>
                    <div class="Roles">
                        <div class="Basicinformation boxBor">
                            <h4>基础信息</h4>
                            <p>创建者：<span style="color:rgb(59 130 246)">@{{
                                this.chatData.username != null ? this.chatData.username : "wutiand" }}</span></p>
                            <p>对话模式：{{ this.chatData.talkMode === 1 ? '连续对话' : "单回合聊天" }}</p>
                            <p>联想能力：较精确（参数0.7）</p>
                        </div>
                        <div class="boxBor">
                            <h4>
                                <span>角色分享链接</span>
                            </h4>
                            <p style="color:rgb(59 130 246)">https://c.aichat.la/#/bot/96?p=22045</p>
                        </div>
                        <div class="boxBor">
                            <h4>Prompt</h4>
                            <p>{{ chatData.isOpenSource == 1 && chatData.openStatus == 1 ? chatData.prompt : "用户未公开" }}</p>
                        </div>
                        <div class="boxBor">
                            <h4>使用介绍</h4>
                            <p v-html="chatData.description"></p>
                        </div>
                        <div class="caozuo">
                            <el-checkbox v-model="checked">全选</el-checkbox>
                            <div class="caozRight">
                                <el-button size="small" disabled class="delete">删除</el-button>
                                <el-button size="small">取消</el-button>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>

        </div>
        <el-drawer class="chatRightPhone" direction="rtl" title="我是标题" :visible.sync="isCollapse" :with-header="false">
            <div class="chatRight">
                <div class="aiListBox">
                    <div class="aiList">
                        <el-image :src="chatData.avatar"></el-image>
                        <div class="aiText">
                            <h5 class="text">{{ chatData.robotName }}</h5>
                            <p class="desc">{{ chatData.abstract }}</p>
                        </div>
                    </div>
                </div>
                <el-tabs v-model="activeName">
                    <el-tab-pane name="first">
                        <span slot="label"><i class="el-icon-time"></i> 历史话题</span>
                        <div class="xjht">
                            <el-button size="mini" @click="newChat()">
                                新建话题
                            </el-button>
                            <div class="messageBox">
                                <el-badge value="x" class="item">
                                    <i class="el-icon-chat-square"></i>
                                </el-badge>
                            </div>
                        </div>
                        <div style="height: 37rem;overflow: auto;">
                            <div class="talkList" v-for="(item, index) in chats" :key="index"
                                :style="{ backgroundColor: serialNumber === index ? '#f1f0fa' : '#f4f4f5' }">
                                <div @click="selectChat(index)">
                                    <i class="el-icon-chat-dot-square"></i>
                                    <span>{{ item.name }}</span>
                                </div>
                                <i class="el-icon-edit" @click="editClick(item.id)"></i>
                                <i class="el-icon-delete" @click="deleteClick(item.id)"></i>
                            </div>
                        </div>

                    </el-tab-pane>
                    <el-tab-pane name="second">
                        <span slot="label"><i class="el-icon-user"></i> 角色信息</span>
                        <div class="Roles">
                            <div class="Basicinformation boxBor">
                                <h4>基础信息</h4>
                                <p>创建者：<span style="color:rgb(59 130 246)">@{{
                                    this.chatData.username != null ? this.chatData.username : "wutiand" }}</span></p>
                                <p>对话模式：{{ this.chatData.talkMode === 1 ? '连续对话' : "单回合聊天" }}</p>
                                <p>联想能力：较精确（参数0.7）</p>
                            </div>
                            <div class="boxBor">
                                <h4>
                                    <span>角色分享链接</span>
                                </h4>
                                <p style="color:rgb(59 130 246)">https://c.aichat.la/#/bot/96?p=22045</p>
                            </div>
                            <div class="boxBor">
                                <h4>Prompt</h4>
                                <p>{{ chatData.isOpenSource == 1 && chatData.openStatus == 1 ? chatData.prompt : "用户未公开" }}
                                </p>
                            </div>
                            <div class="boxBor">
                                <h4>使用介绍</h4>
                                <p v-html="chatData.description"></p>
                            </div>
                            <div class="caozuo">
                                <el-checkbox v-model="checked">全选</el-checkbox>
                                <div class="caozRight">
                                    <el-button size="small" disabled class="delete">删除</el-button>
                                    <el-button size="small">取消</el-button>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-drawer>
    </div>
</template>
<script>
import { CustomerServiceOutlined, CommentOutlined } from '@ant-design/icons-vue';
import { sendMsg, chatList, addChat, records, editChat, deleteChat } from "@/api/chat.js"
import { AiList } from '@/assets/js/data'
import { getPub } from "@/api/home"
export default {
    name: "chattine_page",  //对话页面
    data() {
        return {
            aiList: AiList,
            serialNumber: 0,
            isInit: true,
            loading: false,
            chatForm: {
                isOpenSource: 1,
                userId: 0,
                chatSelectId: 0,
                robotId: 0,
                username: "jj",
                name: "new Chat",
                temperature: 0,
                messages: []
            },
            disabledValue: false,
            displayedMessages: [],
            currentChatId: 1,
            currentChat: "新建话题1",
            chats: [],
            message: "",
            resMsg: "",
            isCollapse: false,
            activeName: "second",
            checked: false,
            chatData: {
            },
            chatList: [
                {
                    time: '05/19 10:22:22',
                    imgUrl: "",
                    description: "请登录",
                    color: "",
                    type: 'AI'
                },
            ]
        }
    },
    watch: {
        currentChatId: function (id, oldValue) {
            this.chatList = [{
                time: '05/19 10:22:22',
                imgUrl: "",
                description: "",
                color: "",
                type: 'AI'
            }];
            this.chatList[0].imgUrl = this.chatData.avatar;
            this.chatList[0].description = this.chatData.description;
            this.chatForm.chatSelectId = id;
            this.displayedMessages = [];
            this.loading = false;
            this.isInit = true;
            records(this.chatForm).then(res => {
                if (res.data.code === 200) {
                    const newArray = res.data.data.map(item => ({ ...item, imgUrl: this.chatData.avatar }));
                    if (newArray.length > 0) {
                        this.chatList.push(...newArray);
                    }
                }
            })
            // 当currentChatId发生变化时执行相应的规则
            // 根据newValue和oldValue执行相应的操作
        },
        "$route.query.id"(val) {
            console.log("watch");
            getPub().then(res => {
                if (res.data.code == 200) {
                    this.aiList = AiList.concat(res.data.data)
                    this.isInit = true;
                    console.log("循环次数");
                    for (let i = 0; i < this.aiList.length; i++) {
                        console.log(i);
                        let item = this.aiList[i]
                        item.robots.forEach(itemR => {
                            if (itemR.id == val) {
                                this.chatList = [{
                                    time: '05/19 10:22:22',
                                    imgUrl: "",
                                    description: "",
                                    color: "",
                                    type: 'AI'
                                }];
                                this.chatData = itemR;
                                this.chatForm.robotId = itemR.id;
                                this.chatList[0].imgUrl = itemR.avatar;
                                this.chatList[0].description = itemR.description;
                                chatList(this.chatForm).then(res => {
                                    if (res.data.code == 200) {
                                        if (res.data.data.length > 0) {
                                            this.chats = res.data.data
                                            this.currentChatId = res.data.data[0].id
                                            this.currentChat = res.data.data[0].name;
                                        } else {
                                            this.chats = []
                                            this.newChat()
                                        }

                                    }
                                })
                            }
                        })
                    }
                }
            })
        }
    },
    mounted() {
        console.log("mounted");
        getPub().then(res => {
            if (res.data.code == 200) {
                this.aiList = AiList.concat(res.data.data)
                this.isInit = true;
                let id = this.$route.query.id;
                let userInfo = JSON.parse(localStorage.getItem("userInfo"));
                console.log(this.chatForm);
                if (userInfo != null) {
                    this.chatForm.userId = userInfo.id;
                    this.chatForm.username = userInfo.username;
                }
                this.chatForm.robotId = id;
                for (let i = 0; i < this.aiList.length; i++) {
                    let item = this.aiList[i]
                    item.robots.forEach(itemR => {
                        if (itemR.id == id) {
                            console.log(itemR);
                            this.chatList = [{
                                time: '05/19 10:22:22',
                                imgUrl: "",
                                description: "",
                                color: "",
                                type: 'AI'
                            }];
                            this.chatData = itemR;
                            this.chatList[0].imgUrl = itemR.avatar;
                            this.chatList[0].description = itemR.description;
                            chatList(this.chatForm).then(res => {
                                if (res.data.code == 200) {
                                    if (res.data.data.length > 0) {
                                        this.chats = res.data.data
                                        this.currentChatId = res.data.data[0].id
                                        this.currentChat = res.data.data[0].name;
                                    } else {
                                        this.chats = []
                                        this.newChat()
                                    }
                                } else {
                                    this.$message.error(res.data.msg)
                                }
                            }).catch((err) => {
                                this.$message({
                                    type: err === "cancel" ? 'info' : 'error',
                                    message: err
                                });
                            })
                        }
                    })
                }
                // this.aiList.forEach(item => {
                //     console.log(item);

                // })
                this.scrollToBottom(); // 组件首次挂载时滚动到底部
            }
        }).catch((err) => {
            this.$message({
                type: err === "cancel" ? 'info' : 'error',
                message: err
            });
        })

    },
    methods: {
        animateMessages() {
            let currentIndex = this.chatList.length - 1;
            const interval = 10; // 每个字符显示的间隔时间，可以根据需要调整
            const timer = setInterval(() => {
                if (currentIndex >= this.chatList.length) {
                    clearInterval(timer);
                } else {
                    //console.log("本次打印消息为" + this.messages[currentIndex]);

                    const msg = this.chatList[currentIndex].description;
                    const displayedMessage = this.displayedMessages[currentIndex] || "";
                    if (displayedMessage.length < msg.length) {
                        /* 判断当前消息是否已经完全显示，
                         * 如果没有，则追加下一个字符到已显示消息的末尾 */
                        this.displayedMessages[currentIndex] = msg.slice(
                            0,
                            displayedMessage.length + 1

                        );
                        this.$nextTick(this.scrollToBottom);
                    } else {
                        /* 当前消息已经完全显示，进入下一条消息的动画 */
                        currentIndex++;
                    }
                }
                if (currentIndex < this.chatList.length) {
                    this.chatList[currentIndex].time = "";
                    this.chatList[currentIndex].time = new Date().toLocaleTimeString('zh-CN', { hour12: false });
                }
                // console.log(this.chatList[currentIndex]);
            }, interval);
        },
        buildChatForm() {

            // let userInfo = JSON.parse(localStorage.getItem("userInfo"));
            // console.log(userInfo);
            // this.chatForm.userId = userInfo.id;
            // this.chatForm.username = userInfo.username;
            const maxLength = 4096; // 最大字符数之和
            const maxItems = 10; // 最多项数
            this.chatForm.isOpenSource = this.chatData.isOpenSource;
            this.chatForm.temperature = this.chatData.temperature;
            let count = 0;
            let items = [];
            this.chatForm.messages = [];
            for (let i = this.chatList.length - 1; i >= 0; i--) {
                const item = this.chatList[i];
                const itemLength = item.description.length;

                if (count + itemLength <= maxLength && items.length < maxItems) {
                    count += itemLength;
                    let result = {
                        role: item.type == 'AI' ? 'assistant' : 'user',
                        content: item.description
                    }
                    this.chatForm.messages.unshift(result);
                } else {
                    break;
                }
            }
            let sysMsg = {
                role: "system",
                content: this.chatData.prompt
            }
            this.chatForm.messages.unshift(sysMsg);
        },
        selectChat(index) {
            this.currentChat = this.chats[index].name;
            this.currentChatId = this.chats[index].id;
            this.serialNumber = index;
        },
        deleteClick(id) {
            this.$confirm('此操作将永久删除该该聊天项及所有聊天内容, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                let index = this.chats.findIndex(chat => chat.id === id);
                let del = {
                    chatSelectId: id,
                    username: JSON.parse(localStorage.getItem("userInfo")).name,
                    userId: JSON.parse(localStorage.getItem("userInfo")).id,
                    robotId: this.chatData.id
                }
                deleteChat(del).then(res => {
                    if (res.data.code === 200) {
                        chatList(this.chatForm).then(res => {
                            if (res.data.code == 200) {
                                if (res.data.data.length > 0) {
                                    this.chats = res.data.data
                                    this.currentChatId = res.data.data[0].id
                                    this.currentChat = res.data.data[0].name;
                                } else {
                                    this.chats = []
                                    this.newChat()
                                }
                            }
                        })
                    }
                })
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: err === "cancel" ? 'info' : 'error',
                    message: err
                });
            });
        },
        editClick(id) {
            this.$prompt('请输入修改名称', '修改聊天名', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                center: true
            }).then(({ value }) => {

                let edit = {
                    id: id,
                    name: value,
                    userId: JSON.parse(localStorage.getItem("userInfo")).id,
                    robotId: this.chatData.id
                }
                editChat(edit).then(res => {
                    if (res.data.code === 200) {
                        this.chats.find(chat => chat.id === id).name = value
                        this.$message({
                            type: 'success',
                            message: '修改成功'
                        });
                    }
                })
            }).catch((err) => {
                this.$message({
                    type: err === "cancel" ? 'info' : 'error',
                    message: err
                });
            });
        },
        newChat() {
            if (this.chats.length >= 10) {
                this.$message({
                    type: 'error',
                    message: '当前聊天已达上限'
                });
            } else {
                addChat(this.chatForm).then(res => {
                    if (res.data.code == 200) {
                        this.chats.push({
                            name: res.data.data.name,
                            id: res.data.data.id
                        })
                        this.currentId = res.data.data.id
                    }
                })
            }

        },
        scrollToBottom() {
            this.$refs.chatListBox.scrollTop = this.$refs.chatListBox.scrollHeight;
        },
        send() {
            this.isInit = false;
            // this.disabledValue = true;
            let a = {
                time: '05/19 10:22:22',
                imgUrl: "https://c.aichat.la/robot.png",
                description: this.message,
                color: "",
                type: 'NOAI'
            }
            this.chatList.push(a)  //改变原数组
            this.buildChatForm();
            let ai = {
                time: '05/19 10:22:22',
                imgUrl: this.chatData.avatar,
                description: "",
                color: "",
                type: 'AI',
            }
            this.chatList.push(ai)
            this.loading = true
            this.chatForm.content = this.message;
            sendMsg(this.chatForm).then(res => {
                if (res.data.code == 200) {
                    let ai2 = {
                        time: '05/19 10:22:22',
                        imgUrl: this.chatData.avatar,
                        description: res.data.data,
                        color: "",
                        type: 'AI',
                    }
                    this.chatList.splice(this.chatList.length - 1, 1, ai2)
                    this.loading = false
                    this.animateMessages();
                    // localStorage.setItem("isLogin", true);
                } else {
                    let ai2 = {
                        time: '05/19 10:22:22',
                        imgUrl: this.chatData.avatar,
                        description: res.data.msg,
                        color: "",
                        type: 'AI',
                    }
                    this.chatList.splice(this.chatList.length - 1, 1, ai2)
                    this.loading = false
                    this.animateMessages();
                    this.$message.error(res.msg);
                }
            }).catch(() => {
                let ai2 = {
                    time: '05/19 10:22:22',
                    imgUrl: this.chatData.avatar,
                    description: "请求失败",
                    color: "",
                    type: 'AI',
                }
                this.chatList.splice(this.chatList.length - 1, 1, ai2)
                this.loading = false
                this.animateMessages();
                this.$message.error("请求失败");
            })
            this.message = ""
            this.$nextTick(this.scrollToBottom);
        },
        resend() {
            this.isInit = false;
            let ai = {
                time: '05/19 10:22:22',
                imgUrl: this.chatData.avatar,
                description: "",
                color: "",
                type: 'AI',
            }
            this.chatList.splice(this.chatList.length - 1, 1, ai)
            this.loading = true
            sendMsg(this.chatForm).then(res => {
                if (res.data.code == 200) {
                    let ai2 = {
                        time: '05/19 10:22:22',
                        imgUrl: this.chatData.avatar,
                        description: res.data.data,
                        color: "",
                        type: 'AI',
                    }
                    this.chatList.splice(this.chatList.length - 1, 1, ai2)
                    this.loading = false
                    this.animateMessages();
                    // localStorage.setItem("isLogin", true);
                } else {
                    let ai2 = {
                        time: '05/19 10:22:22',
                        imgUrl: this.chatData.avatar,
                        description: res.data.msg,
                        color: "",
                        type: 'AI',
                    }
                    this.chatList.splice(this.chatList.length - 1, 1, ai2)
                    this.loading = false
                    this.animateMessages();
                    this.$message.error(res.msg);
                }
            }).catch(() => {
                let ai2 = {
                    time: '05/19 10:22:22',
                    imgUrl: this.chatData.avatar,
                    description: "请求失败",
                    color: "",
                    type: 'AI',
                }
                this.chatList.splice(this.chatList.length - 1, 1, ai2)
                this.loading = false
                this.animateMessages();
                this.$message.error("请求失败");
            })
            this.$nextTick(this.scrollToBottom);
        }
    }
}
</script>
<style lang="scss" scoped>
@keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.blink {
    animation: blink 1s infinite;
    width: 0.3vh;
    height: 3vh;
    background-color: black;
    display: inline-block
}

.chattingBox {
    width: 100%;
    box-sizing: border-box;
    display: flex;

    .chatLeft {
        width: 80%;
        height: 100vh;
        background: #fff;
        border-right: 1px solid #e6e6e6;

        .header {
            background-color: white;
            // width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem 2rem;
            z-index: 100;

            p {
                margin-left: 2rem;
                text-align: right;
                width: calc(100% - 1rem);
                font-weight: 800;
            }

            .operate {

                img {
                    width: 1.5rem;
                    height: 1.5rem;
                }
            }
        }

        .chatListBox {
            padding: 1rem;
            height: 78%;
            border-top: 1px solid #e6e6e6;
            overflow: auto;

            .chatList {
                display: flex;
                align-items: start;
                margin-bottom: 1rem;

                img {
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 50%;
                    margin-right: 0.5rem;
                }

                .text {
                    p {
                        text-align: left;
                        font-size: 0.5rem;
                        color: rgb(180 187 196);
                    }

                    .desc {
                        background: rgba(220, 220, 220, 0.187);
                        border-radius: 1rem;
                        padding: 1rem;
                        box-sizing: border-box;
                        margin-top: 1rem;
                        color: #000;
                        font-size: 0.9rem;
                    }
                }
            }

            .userChat {
                justify-content: end;
                flex-direction: row-reverse;

                img {
                    margin-left: 1rem;
                }

                .desc {
                    background: rgb(105, 58, 244) !important;
                    color: #fff !important;
                }
            }
        }

        .chatInput {
            display: flex;
            align-items: center;
            padding-left: 0.7rem;

            .title {
                background: rgb(105, 58, 244);
                color: #fff;
                border-radius: 2rem;
                width: 7rem;
                margin-right: 0.5rem;

                img {
                    width: 1rem;
                    height: 1rem;
                    transform: scale(1.9);
                    margin-right: 0.5rem;
                }
            }

            .chatText {
                width: calc(100% - 8.5rem);
                padding-top: 0.2rem;

                ::v-deep .el-input__inner {
                    border-radius: 2rem;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                    // border-right: 0; 
                }

                ::v-deep .el-input-group__append {
                    border-radius: 2rem;
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                    // border-right: 0; 
                }
            }

            ::v-deep .el-textarea__inner {
                resize: none;
            }
        }
    }

    .chatRight {
        width: 20%;
        box-sizing: border-box;
        background: #fff;

        .aiListBox {
            padding: 0;

            .aiList:last-child {
                margin-right: 0rem;
            }

            .aiList:hover {
                background: #f1f0fa;
            }

            .active {
                background: #f1f0fa;
            }

            .aiList {
                display: flex;
                align-items: center;
                justify-content: start;
                padding: 0.5rem;
                width: 99%;
                box-sizing: border-box;
                border-radius: 0.5rem;

                .el-image {
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 50%;
                    margin-right: 0.5rem;
                }

                .aiText {
                    text-align: start;
                    width: calc(100% - 4rem);

                    .text {}

                    .desc {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        width: calc(100%);
                        font-size: 0.5rem;
                        color: #888888;
                        margin-top: 0.1rem;
                    }
                }
            }
        }

        ::v-deep .el-tabs__nav-wrap {
            padding-left: 2rem;
        }

        .is-active {
            span {
                color: rgb(105, 58, 244)
            }
        }

        .xjht {
            display: flex;

            .el-button {
                border: 1px solid rgb(105, 58, 244);
                border-radius: 2rem;
                width: calc(100% - 4rem);
                height: 2rem;
                margin-left: 1rem;
                margin-right: 0.5rem;
                line-height: 0.5rem;
            }

            .messageBox {
                width: 2rem;
                height: 2rem;
                background: #ebeef5;
                border-radius: 50%;
                padding: 1rem;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;

                .el-icon-chat-square {
                    font-size: 1rem;
                    color: black;
                }

                ::v-deep .el-badge__content {
                    font-size: 7px;
                    height: 14px;
                    line-height: 14px;
                    background: #000;
                    padding: 0 4px;
                    color: #fff;
                    top: 3px;
                    right: 10px;
                }
            }

        }

        .talkList {
            background: #f4f4f5;
            border-radius: 2rem;
            display: flex;
            align-items: center;
            justify-content: start;
            padding: 0.5rem 1rem;
            box-sizing: border-box;
            margin: 1rem 1rem;

            i {
                margin-right: 1rem;
                font-size: 1rem;
            }

            .el-icon-chat-dot-square {
                color: rgb(105, 58, 244);
                ;
            }

            span {
                margin-right: 2.3rem;
                color: rgb(105, 58, 244);
                font-size: 0.9rem;
            }

            .el-icon-edit {
                margin-right: 0.5rem;
                margin-left: auto;
            }
        }

        .Roles {
            text-align: left;
            padding: 1rem;
            padding-top: 0;
            box-sizing: border-box;

            .boxBor {
                border-bottom: 1px solid gainsboro;
                padding: 1rem;
                box-sizing: border-box;
                padding-top: 0;
                padding-left: 0;
                margin-bottom: 0.5rem;

                h4 {
                    margin-bottom: 0.5rem;
                }

                p {
                    font-size: 0.75rem;
                    color: rgb(102, 102, 102);
                }
            }

            .caozuo {
                display: flex;
                justify-content: start;
                align-items: center;

                .caozRight {
                    margin-left: auto;

                    .delete {
                        background: #693af493;
                        color: #fff;
                    }

                    .el-button {
                        font-size: 0.9rem;
                        padding: 0.5rem;
                    }
                }
            }
        }
    }
}

.chatRightPhone {
    display: none;
}

@media only screen and (max-width:640px) {
    .chatLeft {
        width: 100% !important;
    }

    .chatRight {
        display: none;
    }

    .chatRightPhone {
        display: block;

        .chatRight {
            display: block;
            width: 100% !important;
        }

        ::v-deep .el-drawer {
            width: 40% !important;
        }
    }

}

@media only screen and (max-width:440px) {
    .chatLeft {
        width: 100% !important;
    }

    .chatRight {
        display: none;
    }

    .chatRightPhone {
        display: block;

        .chatRight {
            display: block;
            width: 100% !important;
        }

        ::v-deep .el-drawer {
            width: 70% !important;
        }
    }

}
</style>