<template>
    <div class="createAi">
        <div class="createAiLeft">
            <div class="header">
                <h4>创建AI角色
                    <img class="openRight" src="@/assets/images/menu.png" @click="isCollapse = true" alt="" srcset="">
                </h4>

            </div>
            <div class="fromBox">
                <div class="fromItem">
                    <span class="fromLabel">角色名称</span>
                    <el-input type="textarea" v-model="chatData.robotName" style="height: 2.5rem;" placeholder="如翻译助理、健身教练等"
                        maxlength="18" show-word-limit>
                    </el-input>
                </div>
                <div class="fromItem">
                    <span class="fromLabel">头像</span>
                    <div style="display:flex;width: calc(100% - 6.5rem);">
                        <el-upload action="#" list-type="picture-card" class="upload-demo" :auto-upload="false">
                            <i slot="default" class="el-icon-plus"></i>
                        </el-upload>
                        <div class="colorList">
                            <ul>
                                <li v-for="(item, index) in colorList" :key="index" @click="activeColor = index"
                                    :class="activeColor == index ? 'activeColor' : ''">
                                    <div :style="{ 'background': item }">
                                        <el-input type="text" v-model="headerText"></el-input>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="fromItem">
                    <span class="fromLabel">角色设定<br />Prompt</span>
                    <div class="textBox">
                        <el-button class="onetouch">AI一键生成</el-button>
                        <el-input style="height: 9rem;" type="textarea" placeholder="请输入角色设定的Prompt,参考格式如下：
角色：小红书文案助手
能力：能根据我提供的产品信息撰写小红书风格的种草文案
说话风格：幽默、可爱、亲和，喜欢用emoji表情，与用户产生共鸣
回答身份：始终以小红书文案助手的身份回答我的任何问题。" v-model="chatData.prompt" maxlength="2048" show-word-limit>
                        </el-input>
                    </div>

                </div>
                <div class="fromItem ADvanced" :style="{ 'height': !value ? '5rem' : '23rem' }">
                    <h4>
                        <span>角色设定 - 高级功能</span>
                        <el-switch v-model="value" active-color="#693af4">
                        </el-switch>
                    </h4>
                    <p v-show="!value" style="color: #c0c4cc;font-size: 0.7rem;">设置用户消息上下文、联想能力、对话模式</p>
                    <div style="width: 100%;" v-show="value">
                        <h5>1. 用户消息上下文编辑 <i class="el-icon-question"></i></h5>
                        <!-- <div class="messageBox">
                            <el-input placeholder="请输入用户消息上文"></el-input>
                            <p>{ 用户消息 }</p>
                            <el-input placeholder="请输入用户消息下文"></el-input>
                        </div> -->
                        <!-- <br /> -->
                        <h5>1. 联想能力 <i class="el-icon-question"></i></h5>
                        <el-slider v-model="slider" :marks="marks" :min="0" :range="false" :max="4"></el-slider>
                        <br />
                        <h5>2. 对话模式</h5>
                        <p style="text-align: left;">
                            <el-radio v-model="radio2" label="1"> 连续对话模式 </el-radio>
                            <el-radio v-model="radio2" label="2"> 单次回合模式 </el-radio>
                        </p>
                    </div>
                </div>
                <div class="fromItem">
                    <span class="fromLabel">角色简介</span>
                    <div class="textBox">
                        <el-button class="onetouch">AI一键生成</el-button>
                        <el-input type="textarea" style="height:2rem;" placeholder="请输入一句话角色简介" v-model="chatData.abstract"
                            maxlength="18" show-word-limit>
                        </el-input>
                    </div>
                </div>
                <div class="fromItem">
                    <span class="fromLabel">角色介绍</span>
                    <div class="textBox">
                        <el-button class="onetouch">AI一键生成</el-button>
                        <el-input type="textarea" style="height: 5rem;"
                            placeholder="请输入角色介绍和使用说明，该说明会在首次聊天时作为默认回复，如需要给用户提供提问示例，请使用双#号包含，如：#提问示例#"
                            v-model="chatList[0].description" maxlength="2048" show-word-limit>
                        </el-input>
                    </div>
                </div>
                <div class="fromItem">
                    <span class="fromLabel">角色可见性</span>
                    <el-radio v-model="radio" label="1">私密</el-radio>
                    <el-radio v-model="radio" label="2">公开发布</el-radio>
                </div>
                <div class="fromItem" v-show="radio == 2">
                    <span class="fromLabel">Prompt公开</span>
                    <el-radio v-model="radio1" label="1">公开</el-radio>
                    <el-radio v-model="radio1" label="2">不公开</el-radio>
                </div>
            </div>
            <div class="creatBtn">
                <el-button @click="isCollapse = true" class="openRight">预览</el-button>
                <el-button @click="newRobot">创建角色</el-button>
            </div>
        </div>
        <div class="createAiRight">
            <div class="chatLeft">
                <div class="header">
                    <p>Ai角色预览</p>
                    <p>{{ chatData.robotName == '' ? '暂无设置角色名称' : chatData.robotName }}</p>
                </div>
                <div class="chatListBox">
                    <ul>
                        <li :class="item.type == 'AI' ? 'chatList' : 'chatList userChat'" v-for="(item, index) in chatList"
                            :key="index">
                            <img :src="item.imgUrl" alt="">
                            <div class="text">
                                <p>{{ item.time }}</p>
                                <p class="desc" v-html="item.description == '' ? '暂无设置角色介绍' : item.description"></p>
                            </div>
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
                            <el-button @click="send()" slot="append" icon="el-icon-s-promotion"></el-button>
                        </el-input>
                    </div>
                </div>
            </div>
        </div>
        <el-drawer class="createAiRightPhone" direction="rtl" title="我是标题" :visible.sync="isCollapse" :with-header="false">
            <div class="createAiRight">
                <div class="chatLeft">
                    <div class="header">
                        <p>Ai角色预览</p>
                        <p>{{ chatData.robotName == '' ? '暂无设置角色名称' : chatData.robotName }}</p>
                    </div>
                    <div class="chatListBox">
                        <ul>
                            <li :class="item.type == 'AI' ? 'chatList' : 'chatList userChat'"
                                v-for="(item, index) in chatList" :key="index">
                                <img :src="item.imgUrl" alt="">
                                <div class="text">
                                    <p>{{ item.time }}</p>
                                    <p class="desc" v-html="item.description == '' ? '暂无设置角色介绍' : item.description"></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="chatInput">
                        <el-button class="title">
                            <img src="@/assets/images/saoba.png" alt="">
                            <span>新话题</span>
                        </el-button>
                        <div class="chatText">
                            <el-input placeholder="来说点什么吧...（Shift + Enter = 换行）" class="input-with-select"
                                v-model="message">
                                <el-button @click="send()" slot="append" icon="el-icon-s-promotion"></el-button>
                            </el-input>
                        </div>
                    </div>
                </div>
            </div>
        </el-drawer>
    </div>
</template>
<script>
import { addRobot } from "@/api/chat.js"
export default {
    name: 'createAi',
    data() {
        return {
            isClick: false,
            message: "",
            isCollapse: false,
            radio: '1',
            value: false,
            headerText: '',
            activeColor: 0,
            slider: [0, 1],
            radio1: 1,
            radio2: 1,
            chatList: [
                {
                    time: '05/19 10:22:22',
                    imgUrl: "https://c.aichat.la/robot.png",
                    description: "",
                    color: "",
                    type: 'AI'
                },
            ],
            chatData: {
                robotName: "",
                avatar: "https://c.aichat.la/robot.png",
                abstract: "。",
                description: "",
                prompt:
                    "",
                robotType: 1,
                userId: 28,
                useNum: "1715",
                openStatus: 1,
                temperature: 0,
                talkMode: 1,
                isOpenSource: 1,
                talkConfigId: 296,
                cids: null,
                canEdit: false,
                userName: "",
                prefix: "",
                suffix: "",
            },
            marks: {
                0: '最精确',
                1: '较精确',
                2: '平衡',
                3: "强创造力",
                4: "天马行空    ",
            },
            colorList: ['rgb(146, 115, 238)', 'rgb(114, 143, 237)', 'rgb(23, 192, 230)', 'rgb(0, 204, 149)', 'rgb(237, 110, 168)', 'rgb(242, 100, 111)', 'rgb(250, 140, 23)']
        }
    },
    methods: {
        newRobot() {
            if (this.isClick == true) {
                this.$message({
                    type: 'warning',
                    message: '正在创建中请稍后'
                });
            } else {
                this.isClick = true;
                let userInfo = localStorage.getItem("userInfo");
                this.chatData.description = this.chatList[0].description
                this.chatData.openStatus = this.radio
                this.chatData.isOpenSource = this.radio1
                this.chatData.talkMode = this.radio2
                this.chatData.temperature = this.slider / 4
                if (userInfo != null) {
                    this.chatData.userId = userInfo.id;
                    this.chatData.userName = userInfo.name;
                    addRobot(this.chatData).then(res => {
                        if (res.data.code == 200) {
                            this.$message({
                                type: 'success',
                                message: '创建成功'
                            });
                        }
                    }).finally(() => {
                        this.isClick = false;
                    })
                } else {
                    this.$message({
                        type: 'error',
                        message: '请登陆后再试'
                    });
                }
            }
        },
        send() {
            console.log();
            let a = {
                time: '05/19 10:22:22',
                imgUrl: "https://c.aichat.la/robot.png",
                description: this.message,
                color: "",
                type: 'NOAI'
            }
            this.chatList.push(a)
            this.message = ""
        }
    }
}
</script>
<style lang="scss" scoped>
.createAi {
    background: #fff;
    height: 100%;
    display: flex;

    .createAiLeft {
        width: 70%;
        position: relative;

        .header {
            border-bottom: 1px solid gainsboro;
            padding: 1rem;
        }

        .fromBox {
            padding: 1rem;
            height: 80%;
            overflow: auto;

            .fromItem {
                display: flex;
                margin-bottom: 2rem;
                align-items: start;

                span {
                    width: 8rem;
                    text-align: left;
                }

                .el-input {
                    width: 100%;
                }

                ::v-deep .el-textarea__inner {
                    resize: none;
                    line-height: 1.6;
                    min-height: 0px !important;
                    height: 100%;
                    font-size: 1rem;
                    width: 100%;
                }

                .textBox {
                    text-align: left;
                    width: 100%;
                    display: flex;
                    flex-direction: column;


                    ::v-deep .el-textarea {
                        width: 100%;
                    }
                }

                .onetouch {
                    width: 6rem;
                    height: 1.5rem;
                    padding: 0.2rem;
                    margin-bottom: 0.5rem;
                    border-color: #693af4;
                    color: #693af4;
                    padding: 0.3rem 0.2rem;

                }
            }

            .upload-demo {
                width: 4rem;
                height: 4rem;
                border-radius: 50%;
                line-height: 1;
                display: inline-block;
                margin-right: 1rem;
            }

            ::v-deep .el-upload {
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                line-height: 3.5rem;
                display: inline-block;
                margin-top: 0.5rem;
            }

            ::v-deep .el-radio__input.is-checked .el-radio__inner {
                border-color: #693af4;
                background: #693af4;
            }

            .colorList {
                ul {
                    display: flex;
                }

                li {
                    width: 3.5rem;
                    height: 3.5rem;
                    border: 0px solid #693af4;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 0.5rem;

                    div {
                        width: 3rem;
                        height: 3rem;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;

                        ::v-deep .el-input__inner {
                            background: rgba(0, 0, 0, 0);
                            border: 0;
                            border-radius: 50%;
                            color: #fff;
                        }
                    }
                }

                .activeColor {
                    border: 1px solid #693af4;
                }
            }

            .ADvanced {
                width: 100%;
                height: 15rem;
                flex-direction: column;
                background: rgb(242, 242, 242);
                padding: 1rem;
                box-sizing: border-box;

                h4 {
                    margin-bottom: 0.5rem;
                    width: 95%;
                    text-align: left;

                    .el-switch {
                        float: right;
                    }
                }

                h5 {
                    margin-bottom: 0.5rem;
                    text-align: left;
                    padding-left: 0.5rem;
                }

                .el-slider {
                    padding-left: 2rem;
                    padding-right: 2rem;
                    box-sizing: border-box;
                }

                ::v-deep .el-slider__marks-text {
                    white-space: nowrap;
                }

                ::v-deep .el-slider__runway .el-slider__bar {
                    background: #693af4;
                }

                .messageBox {
                    width: 100%;
                    background: #fff;
                    border-radius: 1rem;
                    padding: 1rem;
                    box-sizing: border-box;

                    ::v-deep .el-input__inner {
                        border: 0;
                        border-bottom: 1px solid #DCDFE6;
                    }

                    p {
                        text-align: left;
                        color: #693af4;
                        margin-top: 0.5rem;
                        padding-left: 1rem;
                    }
                }
            }
        }

        .creatBtn {
            border-top: 1px solid gainsboro;
            height: 4rem;
            position: absolute;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: end;
            width: 100%;
            padding-right: 1rem;
            box-sizing: border-box;

            .el-button {
                background: #693af4;
                color: white;
            }

            .openRight {
                background: #fff;
                color: #693af4;
                border: 1px solid #693af4;
            }
        }
    }

    .createAiRight {
        width: 30%;
        background: rgb(249, 250, 251);
        box-sizing: border-box;
        padding: 1rem;
        padding-bottom: 0;

        .chatLeft {
            width: 100%;
            height: 100%;
            background: #fff;
            padding-bottom: 1rem;
            box-sizing: border-box;

            .header {
                padding: 0.5rem 2rem;
                background: #693af4;
                color: white;
                border-top-left-radius: 1rem;
                border-top-right-radius: 1rem;
                text-align: center;

                p {
                    text-align: center;
                    font-weight: 800;
                }

                p:last-child {
                    font-size: 0.75rem;
                    color: rgb(204, 204, 204);
                }

                .operate {
                    margin-left: auto;
                    width: 5rem;

                    img {
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                }
            }

            .chatListBox {
                padding: 1rem;
                height: 82%;
                border-top: 1px solid #e6e6e6;

                .chatList {
                    display: flex;
                    align-items: start;

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
                padding-left: 1rem;

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
    }

}

.openRight {
    display: none;
    float: right;
}

@media only screen and (max-width:450px) and (max-width:640px) {
    .createAiLeft {
        width: 100% !important;
    }

    .createAiRight {
        display: none;
    }

    .openRight {
        display: block;
    }

    .createAiRightPhone {
        display: block;

        .createAiRight {
            display: block;
            height: 100%;
            width: 100% !important;
        }

        height: 100%;

        ::v-deep .el-drawer {
            width: 50% !important;
        }
    }

    ::v-deep .upload-demo {
        margin-right: 0.5rem !important;
    }

    .colorList {


        ul {

            li {
                margin-right: 0 !important;
            }
        }
    }

}

@media only screen and (max-width:450px) {
    .createAiLeft {
        width: 100% !important;
    }

    .createAiRight {
        display: none;
    }

    .openRight {
        display: block;
    }

    .createAiRightPhone {
        display: block;

        .createAiRight {
            display: block;
            height: 100%;
            width: 100% !important;
        }

        height: 100%;

        ::v-deep .el-drawer {
            width: 70% !important;
        }
    }

    ::v-deep .upload-demo {
        margin-right: 0.5rem !important;
    }

    .colorList {


        ul {

            li {
                margin-right: 0 !important;
            }
        }
    }

}
</style>