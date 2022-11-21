<template>
    <div class="h-screen">
        <main class="pb-20">
            <div class="flex justify-between user_header pb-12 pt-6 px-4">
                <div class="flex flex-row">
                    <div><img :src="user.avatar" alt="" class="home_avatar"></div>
                    <div class="ml-2 self-center">
                        <div class="font-bold text-lg text-white">{{ user.name }}</div>
                    </div>
                </div>
                <div class="self-center">
                    <img :src="$asset+'/image/ui/Service.svg'">
                </div>
            </div>
            <div class="flex justify-around -mt-7">
                <Link :href="$url+'/exchange'" as="button" class="text-left"><div class="border_grad1 w-52 p-3 before:rounded-full rounded-full fun_menu_tab text-white text-sm bg_grad"><img class="inline-block mr-2" :src="$asset+'/image/ui/TidePlay.svg'">My Box Cabinet</div></Link>
                <Link href="#" as="button" class="text-left"><div class="border_grad1 w-52 p-3 before:rounded-full rounded-full fun_menu_tab text-white text-sm bg_grad"><img class="inline-block mr-2" :src="$asset+'/image/ui/Recharge.svg'">Unboxing Records</div></Link>
            </div>
            <div class="border_grad2 order_card flex flex-col before:rounded-xl m-5">
                <div class="flex justify-between px-4 py-3 rounded-t-xl">
                    <div class="text_c2">My Order</div>
                    <div class="self-center text_c2 text-xs">All Orders<img :src="$asset+'/image/ui/Vector.svg'" class="inline-block ml-2"></div>
                </div>
                <div class="divider mx-1"></div>
                <Link :href="$url+'/shipping/1'" as="button">
                    <div class="flex justify-between py-3 mx-4 text-sm">
                        <div><img :src="$asset+'/image/ui/ToBeDelivered.svg'" class="inline-block mr-3"><span class="text-xs font-bold">To Be Delivered</span></div>
                        <div class="self-center"><img :src="$asset+'/image/ui/Vector.svg'"></div>
                    </div>
                </Link>
                <div class="divider mx-4"></div>
                <Link :href="$url+'/shipping/2'" as="button">
                    <div class="flex justify-between py-3 mx-4 text-sm">
                        <div><img :src="$asset+'/image/ui/Ongoing.svg'" class="inline-block mr-3"><span class="text-xs font-bold">On Going</span></div>
                        <div class="self-center"><img :src="$asset+'/image/ui/Vector.svg'"></div>
                    </div>
                </Link>
                <div class="divider mx-4"></div>
                <Link :href="$url+'/shipping/3'" as="button">
                    <div class="flex justify-between py-3 mx-4 text-sm">
                        <div><img :src="$asset+'/image/ui/Completed.svg'" class="inline-block mr-3"><span class="text-xs font-bold">Completed</span></div>
                        <div class="self-center"><img :src="$asset+'/image/ui/Vector.svg'"></div>
                    </div>
                </Link>
            </div>
            <div class="border_grad2 order_card flex flex-col before:rounded-xl m-4">
                <Link :href="$url+'/user/balance'" as="button">
                    <div class="flex justify-between py-3 mx-4 text-sm">
                        <div><img :src="$asset+'/image/ui/Balance.svg'" class="inline-block mr-3"><span class="text-xs font-bold">My Balance</span></div>
                        <div class="self-center"><img :src="$asset+'/image/ui/Vector.svg'"></div>
                    </div>
                </Link>
                <div class="divider mx-4"></div>
                <Link :href="$url+'/user/collection'" as="button">
                    <div class="flex justify-between py-3 mx-4 text-sm">
                        <div><img :src="$asset+'/image/ui/Collection.svg'" class="inline-block mr-3"><span class="text-xs font-bold">My Collection</span></div>
                        <div class="self-center"><img :src="$asset+'/image/ui/Vector.svg'"></div>
                    </div>
                </Link>
                <div class="divider mx-4"></div>
                <Link :href="$url+'/user/shipping-address'" as="button">
                    <div class="flex justify-between py-3 mx-4 text-sm">
                        <div><img :src="$asset+'/image/ui/Address.svg'" class="inline-block mr-3"><span class="text-xs font-bold">Shipping Address</span></div>
                        <div class="self-center"><img :src="$asset+'/image/ui/Vector.svg'"></div>
                    </div>
                </Link>
                <div class="divider mx-4"></div>
                <Link :href="$url+'/user/set-up'" as="button">
                    <div class="flex justify-between py-3 mx-4 text-sm">
                        <div><img :src="$asset+'/image/ui/Setup.svg'" class="inline-block mr-3"><span class="text-xs font-bold">Set Up</span></div>
                        <div class="self-center"><img :src="$asset+'/image/ui/Vector.svg'"></div>
                    </div>
                </Link>
            </div>
        </main>
        <footer>
            <bot></bot>
        </footer>
    </div>
</template>

<script>

import bot from './layouts/Footer.vue'
import {Link} from '@inertiajs/inertia-vue'

export default {
    components: {
        bot,
        Link
    },
    props: {
        user: {
            type: Object
        }
    }
}
</script>