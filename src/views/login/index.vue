<template>
  <div class="login-container">
    <img src="../../assets/image/login-tit.png" style="position:fixed;left:50%;top:9%;margin-left:-194px">
    <div class="form-con">
      <el-form
        class="login-form"
        auto-complete="on"
        label-position="left"
      >
        <div class="title-container">
          <h3 class="title" style="margin-top:18px;">登 录</h3>
          <el-form-item prop="username" style="margin-top:32px;">
            <span class="svg-container svg-container_login">
        
            </span>
            <el-input  name="username" type="text" auto-complete="on" placeholder="username" />
          </el-form-item>
          <el-form-item prop="password">
            <span class="svg-container">
              
            </span>
            <el-input
              name="password"
              auto-complete="on"
              placeholder="password"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd">
        
            </span>
          </el-form-item>
          <el-button type="primary" style="width:100%;margin:10px 0 20px;height:45px;font-size:17px;" class="loginBtn" >登 录</el-button>
        </div></el-form>
    </div>
  </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   },
   methods: {

   }
 }
</script>

<style lang='scss' scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  height: 100vh;
  background-color: $bg;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url('../../assets/image/login-bg.jpg');
  .login-form {
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    background-image: url('../../assets/image/login-box.jpg');
    height: 352px;
    width: 780px;
    padding: 15px 20px 5px 20px;
    margin: -185px 0 120px -410px;
    background-color: white;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title-container {
    width: 304px;
    position: absolute;
    right: 38px;
    top: 0;
    .title {
      font-size: 26px;
      font-weight: 400;
      color: #29599a;
      margin: 0px auto 5px auto;
      text-align: center;
      font-weight: bold;
    }
    .tenant {
      text-align: center;
      margin-left: 12px;
    }

    .set-language {
      color: #959fa1;
      position: absolute;
      top: 5px;
      right: 0px;
    }
    .loginBtn{
      background-image:linear-gradient(#0e85da, #1852a9);
      border-radius: 50px;
      margin-top: 25px !important;
      font-weight: 900;
      font-size: 18px !important;
      line-height: 21px;
      box-shadow: 0px 2px 5px rgba(58, 132, 195, 0.7);
      transition: all .3s;
      &:hover{
        filter: saturate(1.3);
      }
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 35px;
    bottom: 28px;
  }
}
 
</style>
