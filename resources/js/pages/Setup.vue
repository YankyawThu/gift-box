<template>
    <div class="py-4">
        <div class="flex flex-row my-5 px-4">
           <Link :href="$url+'/user'" as="button">
                <div class="p-2 pl-0 mr-2">
                    <img :src="$asset+'/image/ui/BackArrow.svg'">
                </div>
            </Link>
            <div class="font-bold text-xl text-white self-center">
                Set Up
            </div>
        </div>
        <div class="border_grad2 order_card flex flex-col before:rounded-xl m-4">
            <div class="flex justify-between py-4 mx-4 text-sm" @click="changeAvatar()">
                <div>Avatar</div>
                <div class="self-center ml-5"><img :src="$asset+'/image/ui/Vector.svg'"></div>
                <input type="file" id="avatar" @change="uploadAvatar($event)" hidden>
            </div>
            <div class="divider mx-4"></div>
            <div class="flex justify-between py-4 mx-4 text-sm">
                <div>Gender</div>
                <div class="self-center ml-5">
                    <select name="gender" v-model="gender" @change="changeGender()" class="block apperance-none focus:outline-none bg-transparent">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </div>
            <div class="divider mx-4"></div>
            <div class="flex justify-between py-4 mx-4 text-sm">
                <div>Username</div>
                <div class="self-center ml-5">
                    <span v-show="!nameVisible" class="text_c2" @click="nameVisible = !nameVisible">{{name}}</span>
                    <input v-show="nameVisible" type="text" v-model="name" @mouseleave="changeUsername()" class="bg-transparent text_c2 focus:outline-none text-right" autofocus>
                </div>
            </div>
            <div class="divider mx-4"></div>
            <div class="flex justify-between py-4 mx-4 text-sm">
                <div>Nickname</div>
                <div class="self-center ml-5 text_c2">
                    <span v-show="!nicknameVisible" class="text_c2" @click="nicknameVisible = !nicknameVisible">{{nickname}}</span>
                    <input v-show="nicknameVisible" type="text" v-model="nickname" @mouseleave="changeNickname()" class="bg-transparent text_c2 focus:outline-none text-right" autofocus>
                </div>
            </div>
            <div class="divider mx-4"></div>
            <div class="flex justify-between py-4 mx-4 text-sm">
                <div>Phone</div>
                <div class="self-center ml-5 text_c2">
                    <span v-show="!phoneVisible" class="text_c2" @click="phoneVisible = !phoneVisible">{{phone}}</span>
                    <input v-show="phoneVisible" type="text" v-model="phone" @mouseleave="changePhone()" class="bg-transparent text_c2 focus:outline-none text-right" autofocus>
                </div>
            </div>
            <div class="divider mx-4"></div>
            <div class="flex justify-between py-4 mx-4 text-sm">
                <div>Change Password</div>
                <div class="self-center ml-5"><img :src="$asset+'/image/ui/Vector.svg'"></div>
            </div>
        </div>
        <div class="absolute w-full bottom-16 px-4">
            <Link :href="$url+'/logout'" method="post" as="button" class="py-3 btn_gradient rounded-full w-full text-white text-center" @click="logout()">Sign Out</Link>
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
            name: this.user.name,
            nickname: this.user.nickname,
            phone: this.user.phone,
            nameVisible: false,
            nicknameVisible: false,
            phoneVisible: false
        }
    },
    watch: {

    },
    methods: {
        logout() {
            location.reload()
        },
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
            axios.post('/user/change-phone', {
                phone: this.phone
            }).then(res => {
                location.reload()
            })
        }
    }
}
</script>