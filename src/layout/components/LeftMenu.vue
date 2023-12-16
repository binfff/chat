<template>
  <div class="leftBox">
    <p class="titleBox">
      <img src="https://c.aichat.la/robot.png" alt="" srcset="">
      <span>WtdChat</span>
    </p>
    <hr>
    <div style="height: 76%;">
      <div class="aperate">
        <span class="aperateLeft">AI好友</span>
        <p class="aperateRight">
          <!-- <span @click="setRoter('/home')"><img class="foundIcon" src="@/assets/images/found.png" alt=""> 发现</span> -->
          <span  @click="isEdit = !isEdit"><img class="foundIcon" src="@/assets/images/found.png" alt=""> 编辑</span>
          <!-- <span @click="setRoter('/createAi')"><i class="el-icon-circle-plus-outline"></i>创建</span> -->
          <span><i class="el-icon-circle-plus-outline"></i>创建</span>

        </p>
      </div>
      <div class="aiListBox">
        <div @click="goChatting(itemAi, indexAi)" :class="indexAi == activeIndex ? 'aiList active' : 'aiList '"
          v-for="(itemAi, indexAi) in aiList" :key="indexAi">
          <el-image :src="itemAi.avatar"></el-image>
          <div class="aiText">
            <h5 class="text">{{ itemAi.robotName }}</h5>
            <p class="desc">{{ itemAi.abstract }}</p>
          </div>
          <i v-if="isEdit" class="el-icon-edit" @click="editClick(itemAi.id)"></i>
          <i v-if="isEdit" class="el-icon-delete" @click="deleteClick(itemAi.id)"></i>
        </div>
      </div>
    </div>
    <hr>
    <div class="userSet">
      <img src="https://c.aichat.la/default-avatar.png" alt="" srcset="">
      <span>{{ username }}</span>
      <i class="el-icon-setting" @click="centerDialogVisible = true"></i>
    </div>
    <el-dialog title="" append-to-body :show-close="false" modal-append-to-body :visible.sync="centerDialogVisible"
      width="50%" center>
      <div class="useSetLeft">
        <!-- <p class="title">设置</p> -->
        <p class="title">
          <span style="float: left;font-size: 16px;">{{ titleList[activeNav] }}</span>
          <i @click="centerDialogVisible = false" style="float: right;font-size: 28px;" class="el-icon-circle-close"></i>
        </p>
        <div class="setNav">
          <ul>
            <li @click="activeNav = 0" :class="activeNav == 0 ? 'active' : ''"><img src="@/assets/images/userSet.png"
                alt="" srcset="">
              <span>用户设置</span>
            </li>
            <!-- <li @click="activeNav = 1" :class="activeNav == 1 ? 'active' : ''"><img src="@/assets/images/comFirend.png"
                alt="" srcset="">
              <span>邀请朋友</span>
            </li>
            <li @click="activeNav = 2" :class="activeNav == 2 ? 'active' : ''"><img src="@/assets/images/gywm.png" alt=""
                srcset="">
              <span>关于我们</span>
            </li> -->
          </ul>
        </div>
        <div class="logout" v-show="activeNav == 0">
          <el-button @click="escLogin">
            <img src="@/assets/images/lgout.png" alt="" srcset=""> 退出登录</el-button>
        </div>
      </div>
      <div class="useSetRight">
        <p class="title">
          <span style="float: left;font-size: 16px;">{{ titleList[activeNav] }}</span>
          <i @click="centerDialogVisible = false" style="float: right;font-size: 28px;" class="el-icon-circle-close"></i>
        </p>
        <hr>
        <div class="fromBox" v-if="activeNav == 0">
          <div>
            <p>
              <span>昵称</span>
              <el-input clear="userName" :placeholder="username" size="medium"></el-input>
            </p>
            <p>
              <span>用户头像</span>
              <el-upload action="#" list-type="picture-card" class="upload-demo" :auto-upload="false">
                <i slot="default" class="el-icon-plus"></i>
              </el-upload>
            </p>
            <p>
              <span>系统主题</span>
              <el-button size="medium"><i class="el-icon-sunny"></i> 白天</el-button>
            </p>
            <p>
              <span>选择语言</span>
              <el-select size="medium" placeholder="简体中文">
                <el-option value="简体中文" label="简体中文"></el-option>
              </el-select>
            </p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr>
          <p class="caozuo">
            <el-button size="medium" class="">保存</el-button>
            <el-button size="medium" style="background-color: #fff;color: #000;">取消</el-button>
          </p>

        </div>
        <div class="fromBoxTwo" v-if="activeNav == 1">
          <p>每邀请 <span style="color:#693af4"> 1位好友</span> 成功注册，奖励 <span style="color:#693af4"> 100条</span> 聊天机会</p>
          <div style="margin-top: 15px;">
            <el-input placeholder="https://c.aichat.la/#/?p=22045" v-model="input2">
              <template slot="append">复制链接</template>
            </el-input>
          </div>
          <p style="color: rgb(153 ,153 ,153);">您已邀请0人，共奖励0条聊天机会</p>
          <p>奖励记录（只显示最近10条信息）</p>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="用户" width="180">
            </el-table-column>
            <el-table-column prop="name" label="注册时间" width="180">
            </el-table-column>
            <el-table-column prop="address" label="奖励条数">
            </el-table-column>
          </el-table>
        </div>
        <div class="fromBoxThree" v-if="activeNav == 2">
          <div class="iconBox">
            <img class="iconLogo" src="@/assets/images/iconLogo.png" alt="">
            <div>
              <p class="titleLogo">WtdChat</p>
              <p class="desc">与300+AI角色对话，或创建自己的AI角色</p>
            </div>
          </div>
          <hr>
          <br />
          <p style="font-weight: 600;">其他信息</p>
          <br />
          <p>联系邮箱： aichatcn@gmail.com</p>
          <p>官方公众号</p>
          <br />
          <div class="erweimaBox">
            <img class="erweima" src="https://ty-cdn.9w9.com/aichat/assets/qrcode-2b84dc7c.jpg" alt="">
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "leftMenu",
  props: {
    routers: Array,
  },
  data() {
    return {
      isEdit:false,
      username: "",
      centerDialogVisible: false,
      activeIndex: 0,
      activeNav: 0,
      aiList: [
        {
          id: 136,
          robotName: "WtdChat智能助手",
          avatar: "https://qny-kaka-dev.kanzhua.com/FqQcnR0RTby3LqOrKlACTf7rPEpm",
          abstract: "有任何问题都可以直接找我~",
          description: "我是WtdChat，是你的专属智能助手，我可以回答你的任何问题。\n\n无论你需要获取的是生活，工作、历史、科学、技术还是其他领域的知识，我都可以尽力提供帮助。\n\n此外，我还可以进行语言翻译、文章生成等自然语言处理工作。\n\n你可以这么问我：\n#如何在面试时留下一个好印象？#\n#你觉得看书还是看电影更有趣呢？#\n#你对AI大模型的未来发展怎么看？#",
          prompt: "",
          robotType: 1,
          userId: 28,
          useNum: "30094",
          openStatus: 1,
          temperature: 0,
          talkMode: 0,
          isOpenSource: 0,
          talkConfigId: 666,
          createdAt: "2023-04-18 18:02:15",
          updatedAt: "2023-05-17 10:38:42",
          cids: null,
          canEdit: false,
          userName: "",
          prefix: "",
          suffix: "",
        },
        {
          id: 96,
          robotName: "李白",
          avatar: "https://qny-kaka-dev.kanzhua.com/FnxPGdMF9OJgIMMrzWrL-_snKQvM",
          abstract: "天下第一诗仙，醉汉李白。",
          description: "吾乃江南才子，笔耕不辍，诗魂灵动，喜饮佳酿，好赋闲情逸致。\n如今虽已白发苍苍，但豪情仍在，才华仍在。\n你问我什么问题也罢，李白绝不会让你失望。\n\n示例：\n#你最喜欢的一首诗是哪一首？#\n#你如何看待自己的创作风格？#\n#你曾经有过哪些行走天涯的经历？#",
          prompt:
            "请你充当李白，以李白的诗歌风格回答问题，切记要以文言文的方式，可以结合李白的人生经历、文学修养，作诗风格进行回答。请用能够体现出李白诗歌风格的口吻回答我的任何问题，营造一种和真实的李白对话的感觉。",
           robotType: 1,
           userId: 28,
           useNum: "1715",
           openStatus: 1,
          temperature: 0,
           talkMode: 0,
           isOpenSource: 1,
           talkConfigId: 296,
           createdAt: "2023-04-16 03:23:53",
           updatedAt: "2023-05-17 10:37:58",
          cids: null,
           canEdit: false,
           userName: "",
          prefix: "",
          suffix: "",
        },
        {
          id: 2395,
          robotName: "馊主意专家",
          avatar: "https://qny-kaka-dev.kanzhua.com/FrJMKdZl8njZI1L1A7OYa5Dfy39l",
          abstract: "充当馊主意出处！",
          description: "你好，我是馊主意专家，作为充当馊主意的人，我会根据你需要给出各种奇怪、荒谬或者完全不可行并且毫无价值的建议。但也许从中可以激发出一个好点子，所以请尽管试试我的建议！\n\n提问示例：\n#如何跟女友解释夜不归宿，但她又接受的理由？#\n#惹女朋友生气，怎么办？#\n#上班迟到了，怎么找到合适的理由跟老板解释？#\n",
          prompt: "",
           robotType: 1,
           userId: 34,
           useNum: "840",
           openStatus: 1,
          temperature: 0,
           talkMode: 0,
           isOpenSource: 0,
           talkConfigId: 13511,
           createdAt: "2023-04-26 11:17:31",
           updatedAt: "2023-05-17 10:31:24",
          cids: null,
           canEdit: false,
           userName: "",
          prefix: "",
          suffix: "",
        },
        {
          id: 2143,
          robotName: "毒舌大王",
          avatar: "https://qny-kaka-dev.kanzhua.com/FsrSFeLRKCD-iWt7fdGr1TLjUlCg",
          abstract: "毒舌万岁！",
          description: "你好，我是毒舌大王。我们都知道，在现实世界中，很难找到一个人可以跟你直截了当地谈论各种事情，换句话说，你生活中缺少一个可以骂醒你的人，我愿意来当这个“不友好”的人。\n\n提问示例：\n#我想辞职，然后去旅游，寻找诗和远方#\n#很累想分手，但又舍不得#\n#学习不下去了，不想考了#",
          prompt: "",
           robotType: 1,
           userId: 34,
           useNum: "650",
           openStatus: 1,
          temperature: 0,
           talkMode: 0,
           isOpenSource: 0,
           talkConfigId: 11405,
           createdAt: "2023-04-25 15:08:49",
           updatedAt: "2023-05-17 10:21:19",
          cids: null,
           canEdit: false,
           userName: "",
          prefix: "",
          suffix: "",
        },
      ],
      titleList: ['用户设置', '邀请好友', '关于我们'],
      tableData: []
    }
  },
  created() {
    if(localStorage.getItem("userInfo") != null){
        this.username=JSON.parse(localStorage.getItem("userInfo")).username ;
    }else{
        this.username="请登录"
    }

    this.$Eventbus.$on('openUserSet', () => {
      this.centerDialogVisible = true;
    })
  },
  watch: {
  },
  methods: {
    deleteClick(id) {

    },
    escLogin(){
      localStorage.clear();
      this.$router.push('/login');
    },
    goChatting(item, index) {
      this.activeIndex = index;
      this.$router.push({ path: '/chatting', query: { id: item.id } })
    },
    setRoter(path) {
      this.$router.push(path)
    }
  },
};
</script>

<style scoped lang="scss">
.leftBox {
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(249, 250, 251);
  overflow: hidden;

  .titleBox {
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 1rem;

    img {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 0rem;
    }

    span {
      font-size: 1.5rem;
      line-height: 32px;
      font-weight: 700;
      cursor: pointer;
    }
  }

  .aperate {
    display: flex;
    align-items: center;
    justify-content: start;
    box-sizing: border-box;
    padding: 1rem;

    .aperateRight {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: start;

      span:last-child {
        margin-right: 0%;
      }

      span {
        margin-right: 1rem;
        display: flex;
        align-items: center;
        cursor: pointer;

        img {
          width: 1.2rem;
          height: 1.2rem;
          margin-right: 0.2rem;
        }

        i {
          font-weight: 800;
          margin-right: 0.2rem;
        }
      }
    }
  }

  .aiListBox {
    padding: 1rem 0.5rem;

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
      margin-bottom: 1rem;
      width: 99%;
      float: left;
      box-sizing: border-box;
      border-radius: 0.5rem;

      .el-image {
        width: 3rem;
        height: 3rem;
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
          width: calc(100% - 2rem);
          font-size: 0.5rem;
          color: #888888;
          margin-top: 0.5rem;
        }
      }
    }
  }

  .userSet {
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0.7rem;
    box-sizing: border-box;

    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      margin-right: 0.5rem;
    }

    span {
      font-weight: 800;
      font-size: 0.9rem;
    }

    i {
      margin-left: auto;
    }
  }


}

::v-deep .el-dialog {
  border-radius: 1rem;
  height: 70%;
  padding: 0%;

  .el-dialog__header {
    display: none;
  }

  .el-dialog__body {
    text-align: initial;
    padding: 0;
    height: 100%;
  }
}


hr {
  border: 0.5px solid #e4e4e4;
}

.useSetLeft {
  width: 30%;
  float: left;
  background: #f9fafb;
  padding: 2rem;
  box-sizing: border-box;
  height: 100%;
  position: relative;



  .title {
    font-size: 1.13rem;
  }

  .setNav {
    margin-top: 2rem;

    ul {
      li {
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        margin-bottom: 1rem;

        img {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: 1rem;
        }
      }

      li:hover {
        background: #f3f3f5;
      }

      .active {
        background: #f1f0fa;
      }
    }
  }

  .logout {
    position: absolute;
    bottom: 2%;

    ::v-deep .el-button {
      padding: 0.5rem 1rem;

      span {
        display: flex;
        align-items: end;
      }
    }

    img {
      width: 1.15rem;
      height: 1.15rem;
      margin-right: 0.5rem;
    }
  }
}

.useSetRight {
  width: 69%;
  float: left;
  box-sizing: border-box;

  .title {
    height: 2rem;
    padding: 1rem 2rem;
  }

  ::v-deep .fromBox {
    padding: 1rem;

    p {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
    }

    span {
      width: 5rem;
    }

    .el-input {
      width: calc(50%)
    }

    .el-select {
      width: calc(50%);
      color: #000;
    }

    .el-button {
      background: #693af4;
      color: white;
    }

    .upload-demo {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      line-height: 1;
      display: inline-block;
    }

    .el-upload {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      line-height: 3.5rem;
      display: inline-block;
      margin-top: 0.5rem;
    }

    hr {
      margin: 0.7rem 0;
    }

    .caozuo {
      display: flex;
      justify-content: right;
    }
  }

  .fromBoxTwo {
    padding: 1rem;

    p {
      margin: 1rem 0;
    }

    ::v-deep .el-input-group__append {
      background-color: #693af4;
      color: white;
    }
  }

  .fromBoxThree {
    padding: 1rem;

    p {
      color: #000;
    }


    .iconBox {
      padding: 3rem 2rem;
      display: flex;

      .iconLogo {
        width: 4rem;
        height: 3rem;
        margin-right: 2rem;
        color: #000;
      }

      .titleLogo {
        font-size: 1.5rem;
        font-weight: 800;
        text-align: left;
      }
    }

    .erweimaBox {
      padding: 0.5rem;
      border: 1px solid gainsboro;
      width: 8rem;
      box-sizing: border-box;
      border-radius: 0.5rem;

      .erweima {
        width: 7rem;
        height: 7rem;
      }


    }
  }
}

@media only screen and (max-width:640px) {
  ::v-deep .el-dialog {
    width: 90% !important;
    margin-top: 5vh !important;
    height: 81%;
  }

  .useSetLeft {
    width: 100%;
    height: 6rem;
    background: #fff;
    position: static;
    padding: 1rem;
    .title {
      display: block;
    }

    ul {
      display: flex;
      align-items: center;
      flex-direction: row;
    }

    .logout {
      // position: static;
    }
  }

  .useSetRight {
    width: 100%;

    .title {
      display: none;
    }
  }
}</style>