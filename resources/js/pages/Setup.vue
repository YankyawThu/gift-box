<template>
    <div class="py-4">
        <div class="flex flex-row my-5 px-4">
           <Link :href="$url+'/user'" as="button">
                <div class="p-2 pl-0 mr-2">
                    <img :src="$asset+'/image/ui/BackArrow.svg'">
                </div>
            </Link>
            <div class="font-bold text-xl text-white self-center">
                {{__('Set Up')}}
            </div>
        </div>
        <div class="border_grad2 order_card flex flex-col before:rounded-xl m-4">
            <div class="flex justify-between py-4 mx-4 text-sm">
                <div>{{__('Language')}}</div>
                <div class="self-center ml-5">
                    <select name="gender" v-model="lang" @change="changeLang()" class="block apperance-none focus:outline-none bg-transparent text_c2">
                        <option value="en">{{__('English')}}</option>
                        <option value="zh">{{__('China')}}</option>
                        <option value="mm">{{__('Myanmar')}}</option>
                    </select>
                </div>
            </div>
            <div class="divider mx-4"></div>
            <div class="flex justify-between py-4 mx-4 text-sm" @click="changeAvatar()">
                <div class="self-center">{{__('Avatar')}}</div>
                <div class="self-center ml-5"><img :src="user.avatar_url" alt="" class="w-8 h-8 rounded-full inline-block mr-2"><img :src="$asset+'/image/ui/Vector.svg'" class="inline-block"></div>
                <input type="file" id="avatar" @change="uploadAvatar($event)" hidden>
            </div>
            <div class="divider mx-4"></div>
            <div class="flex justify-between py-4 mx-4 text-sm">
                <div>{{__('Gender')}}</div>
                <div class="self-center ml-5">
                    <select name="gender" v-model="gender" @change="changeGender()" class="block apperance-none focus:outline-none bg-transparent text_c2">
                        <option value="male">{{__('Male')}}</option>
                        <option value="female">{{__('Female')}}</option>
                    </select>
                </div>
            </div>
            <div class="divider mx-4"></div>
            <div class="flex justify-between py-4 mx-4 text-sm">
                <div>{{__('Username')}}</div>
                <div class="self-center ml-5">
                    <span class="bg-transparent text_c2 focus:outline-none" @input="nameText" contenteditable>{{cName}}</span>
                </div>
            </div>
            <div class="divider mx-4"></div>
            <div class="flex justify-between py-4 mx-4 text-sm">
                <div>{{__('Nickname')}}</div>
                <div class="self-center ml-5 text_c2">
                    <span class="bg-transparent text_c2 focus:outline-none" @input="nickNameText" contenteditable>{{cNickname}}</span>
                </div>
            </div>
            <div class="divider mx-4"></div>
            <div class="flex justify-between py-4 mx-4 text-sm" @click="changePhone()">
                <div>{{__('Phone')}}</div>
                <div class="self-center ml-5 text_c2">
                    <span class="bg-transparent text_c2 focus:outline-none">{{cPhone}}</span>
                </div>
            </div>
            <div class="divider mx-4"></div>
            <Link :href="$url+'/user/change-password'" method="get" class="flex justify-between py-4 mx-4 text-sm">
                <div>{{__('Reset Password')}}</div>
                <div class="self-center ml-5"><img :src="$asset+'/image/ui/Vector.svg'"></div>
            </Link>
        </div>
    </div>
</template>

<script>

import {Link} from '@inertiajs/inertia-vue'
import axios from 'axios'

export default {
    components: {
        Link
    },
    props: {
        user: {
            type: Object
        }
    },
    data() {
        return {
            gender: this.user.gender,
            cName: this.user.name,
            cNickname:this.user.nickname,
            cPhone:this.user.phone,
            name: this.user.name,
            nickname: this.user.nickname,
            lang: this.$page.props.locale
        }
    },
    methods: {
        changeAvatar() {
            document.querySelector('#avatar').click()
        },
        uploadAvatar(event) {
            var file = event.target.files[0]
            let formData = new FormData()
            formData.append('avatar', file)
            axios.post('/user/change-avatar', 
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                console.log(res)
                location.reload()
            })
        },
        changeGender() {
            axios.post('/user/change-gender', {
                gender: this.gender
            }).then(res => {
                location.reload()
            })
        },
        changeUsername() {
            console.log(this.name)
            axios.post('/user/change-username', {
                name: this.name
            }).then(res => {
                location.reload()
            })
        },
        changeNickname() {
            axios.post('/user/change-nickname', {
                nickname: this.nickname
            }).then(res => {
                location.reload()
            })
        },
        changePhone() {
            location.replace(this.$url+'/wrong-phone')
        },
        nameText(e) {
            this.name = e.target.innerText
        },
        nickNameText(e) {
            this.nickname = e.target.innerText
        },
        changeLang() {
            axios.get(`/language/${this.lang}`)
            .then(() => {
                location.reload()
            })
        }
    },
    mounted() {
        window.addEventListener('keypress', event => {
            if(event.key == 'Enter') {
                this.changeUsername()
                this.changeNickname()
            }
        })
    }
}
</script>