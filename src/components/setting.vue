<template>
    <div class="setting">
        <h2>表单验证</h2>
        <validator name="validation1">
            <form novalidate>
                <div class="username-field">
                    <label for="username">用户名:</label>
                    <input id="username" type="text" v-validate:username="['required']">
                    <span v-if="$validation1.username.required" class="errors">请填写用户名</span>
                </div>
                <div class="comment-field">
                    <label for="comment">留言:</label>
                    <input id="comment" type="text" v-validate:comment="{required:true, maxlength: 5 }">
                    <span v-if="$validation1.comment.maxlength" class="errors">评论最多输入5个字符</span>
                </div>
                <div class="mobile-field">
                    <label for="mobile">手机</label>
                    <input type="text" id="mobile" v-validate:mobile="{required:true,phone:true}" />
                    <span v-if="$validation1.mobile.required" class="errors">请输入手机号码</span>
                    <span v-if="$validation1.mobile.required== false &&  $validation1.mobile.phone" class="errors">手机号码不正确</span>
                </div>
                <input type="submit" value="保存" v-if="$validation1.valid">
            </form>
        </validator>
        <pre>
            {{ $validation1 | json }}
        </pre>
    </div>
</template>

<style>
    .username-field,.comment-field,.mobile-field{line-height: 36px;text-align: left}
    .errors{color:#ff7800}
</style>
<script>
    export default{
        validators:{
            phone:function (val) {
                return /^1[3,4,5,7,8]\d{9}$/.test(val)
            }
        }
    }
</script>
