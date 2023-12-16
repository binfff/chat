<template>
    <div class="logn_page">
        <header>
            <img src="@/assets/images/login/lognicon.png" alt="">
            <p>WTD-CHAT中文在线</p>
        </header>
        <div class="loginCenter">
            <div class="centerLeft">
                <p class="title">真正意义上的AI机器人</p>
                <div class="imgBox">
                    <p class="label">轻松搜索，高效工作</p>
                </div>
                <p class="desc">ChatGPT是美国人工智能研究实验室OpenAI推出的一种人工智能技术驱动的自然语言处理工具，拥有语言理解和文本生成能力，尤其是它会通过连接大量的语料库来训练模型。</p>
            </div>
            <div class="centerRight">
                <p class="title">
                    <img src="@/assets/images/login/lognicon.png" alt="">
                    <span>欢迎注册</span>
                </p>
                <el-form class="fromBox" ref="regForm" :model="searchForm">
                    <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="searchForm.username">
                    </el-input>
                    <el-input placeholder="请输入密码" show-password prefix-icon="el-icon-lock" v-model="searchForm.password">
                    </el-input>
                    <el-input placeholder="邮箱（可不填）" show-password prefix-icon="el-icon-lock" v-model="searchForm.email">
                    </el-input>
                    <el-input placeholder="手机号（可不填）" show-password prefix-icon="el-icon-lock" v-model="searchForm.phone">
                    </el-input>
                    <p>
                        <span style="cursor: default" @click="logIndex">已有账户去登陆</span>
                    </p>
                    <el-button @click="submitForm('regForm')">立即注册</el-button>
                </el-form>

            </div>
        </div>
    </div>
</template>
<script>
import { goRegister } from "@/api/regist.js"
export default {
    name: 'logn_page', //首页
    data() {
        return {
            searchForm:{
                "username": "",
                "password": "",
                "email": "",
                "phone": ""
            },
            ruleForm: {
                "username": "张三哈哈",
                "userpwd": "12345678"
            },
            rules: {
                username: [
                    { required: true, message: '用户名不能为空' },
                ],
                userpwd: [
                    { required: true, message: '密码不能为空' },
                ],
            }
        }
    },
    methods: {
        logIndex(){
            this.$router.push('/login');
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    goRegister(this.searchForm).then(res => {
                        if (res.data.code == 200) {
                            this.$message.success('注册成功');
                            this.$router.push("/login")
                            // sessionStorage.setItem("isLogin", true);
                        } else {
                            this.$message.error(res.msg);
                        }

                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>
<style lang="scss" scoped>
* {
    box-sizing: border-box;
}

.logn_page {
    width: 100%;
    height: 100%;
    background: linear-gradient(175deg, rgb(20, 20, 20) 0%, rgb(28 35 46) 70.63%, rgba(12, 27, 48, 0.41) 100%);
    box-shadow: 4px 0px 4px rgba(43, 45, 55, 0.01);
    position: relative;
    padding-top: 47px;
    padding-left: 114px;

    header {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: white;
    }

    .loginCenter {
        display: flex;
        width: 80%;
        margin: 0 auto;
        // margin-top: 3rem;

        .centerLeft {
            width: 50%;
            color: white;

            .title {
                font-size: 28px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 40.54px;
                color: rgba(255, 255, 255, 1);
                text-align: left;
                vertical-align: top;
            }

            .imgBox {
                background-image: url('@/assets/images/login/ai.png');
                width: 667px;
                height: 424px;
                margin-top: 1rem;

                .label {
                    font-size: 20px;
                    font-weight: 400;
                    letter-spacing: 0px;
                    line-height: 28.96px;
                    color: rgba(255, 255, 255, 1);
                    text-align: left;
                    vertical-align: top;
                    padding-left: 2rem;
                }


            }

            .desc {
                width: 70%;
                font-size: 16.8px;
                font-weight: 300;
                letter-spacing: 0px;
                line-height: 24.33px;
                color: rgba(255, 255, 255, 1);
                text-align: center;
                vertical-align: middle;
                margin-left: 2rem;
            }
        }

        .centerRight {
            width: 392px;
            height: 482px;
            // margin-top: 2rem;
            border-radius: 11.81px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 15px 45px rgba(123, 61, 224, 0.1);
            padding-top: 2rem;

            .title {
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    margin-right: 1rem;
                }

                span {
                    font-size: 23px;
                    font-weight: 700;
                    letter-spacing: 1px;
                    line-height: 33.3px;
                    color: rgba(20, 20, 20, 1);
                    text-align: center;
                    vertical-align: top;
                }
            }

            .desc {
                font-size: 13px;
                font-weight: 400;
                letter-spacing: 0.19px;
                line-height: 17.84px;
                color: rgba(201, 201, 201, 1);
                text-align: center;
                vertical-align: top;
                margin-top: 1rem;
            }

            .fromBox {
                width: 80%;
                margin: 2rem auto;

                .el-input {
                    margin-top: 1rem;

                }

                p {
                    margin-top: 1rem;

                    span {
                        /** 文本1 */
                        font-size: 12.83px;
                        font-weight: 400;
                        letter-spacing: 0px;
                        line-height: 19.25px;
                    }

                    text-align: right;
                }

                .el-input__inner {
                    background: rgba(245, 247, 250, 1);

                }

                .el-input__icon {
                    color: rgba(23, 117, 245, 1);
                }

                .el-button {
                    margin-top: 2rem;
                    color: #fff;
                    width: 100%;
                    height: 44px;
                    opacity: 1;
                    border-radius: 13px;
                    background: linear-gradient(90deg, rgba(0, 104, 236, 1) 0%, rgba(0, 181, 248, 1) 100%);
                }
            }

        }
    }
}

@media only screen and (max-width:640px) {
    .logn_page {
        padding: 1rem;

        .loginCenter {
            width: 100%;

            .centerLeft {
                display: none;

            }

            .centerRight {
                width: 100% !important
            }
        }

    }

}
</style>
  