<template>
    <div class="h-screen">
        <main class="pb-20">
            <div class="flex justify-between user_header pb-12 pt-7 px-4">
                <div class="flex flex-row">
                    <div><img src="https://1.bp.blogspot.com/-VpNN3ROqFSw/WRC7TRlPYfI/AAAAAAAAi3k/8P1JqjBG4186-fVjrjW3v21RnF8fZFRHACLcB/s1600/18221988_435811773439708_638227643630576354_n.jpg" alt="" class="home_avatar"></div>
                    <div class="ml-2 self-center">
                        <div class="font-bold text-lg text-white">Thinzar Wint Kyaw</div>
                    </div>
                </div>
                <div class="self-center">
                    <img :src="$asset+'/image/ui/Service.svg'">
                </div>
            </div>
            <div class="flex justify-around -mt-6">
                <Link href="#" as="button" class="text-left"><div class="w-44 px-1 rounded-full bg-white fun_menu_tab text-sm"><img class="inline-block rounded-full p-1" :src="$asset+'/image/ui/TidePlay.svg'">My Box Cabinet</div></Link>
                <Link href="#" as="button" class="text-left"><div class="w-44 px-1 rounded-full bg-white fun_menu_tab text-sm"><img class="inline-block rounded-full p-1" :src="$asset+'/image/ui/Recharge.svg'">Unboxing Records</div></Link>
            </div>
            <div class="order_card flex flex-col rounded-xl m-4">
                <div class="flex justify-between px-4 py-3 rounded-t-xl" style="background:#DACEFF;">
                    <div>My Order</div>
                    <div class="self-center text-xs">All Orders<img :src="$asset+'/image/ui/Vector.svg'" class="inline-block ml-2"></div>
                </div>
                <Link :href="$url+'/shipping/1'" as="button">
                    <div class="flex justify-between py-3 mx-4 text-sm border-b">
                        <div><img :src="$asset+'/image/ui/ToBeDelivered.svg'" class="inline-block mr-3"><span>To Be Delivered</span></div>
                        <div class="self-center"><img :src="$asset+'/image/ui/Vector.svg'"></div>
                    </div>
                </Link>
                <Link :href="$url+'/shipping/2'" as="button">
                    <div class="flex justify-between py-3 mx-4 text-sm border-b">
                        <div><img :src="$asset+'/image/ui/Ongoing.svg'" class="inline-block mr-3"><span>On Going</span></div>
                        <div class="self-center"><img :src="$asset+'/image/ui/Vector.svg'"></div>
                    </div>
                </Link>
                <Link :href="$url+'/shipping/3'" as="button">
                    <div class="flex justify-between py-3 mx-4 text-sm">
                        <div><img :src="$asset+'/image/ui/Completed.svg'" class="inline-block mr-3"><span>Completed</span></div>
                        <div class="self-center"><img :src="$asset+'/image/ui/Vector.svg'"></div>
                    </div>
                </Link>
            </div>
            <div class="order_card flex flex-col rounded-xl m-4">
                <Link :href="$url+'/user/balance'" as="button">
                    <div class="flex justify-between py-3 mx-4 text-sm border-b">
                        <div><img :src="$asset+'/image/ui/Balance.svg'" class="inline-block mr-3"><span>My Balance</span></div>
                        <div class="self-center"><img :src="$asset+'/image/ui/Vector.svg'"></div>
                    </div>
                </Link>
                <Link :href="$url+'/user/collection'" as="button">
                    <div class="flex justify-between py-3 mx-4 text-sm border-b">
                        <div><img :src="$asset+'/image/ui/Collection.svg'" class="inline-block mr-3"><span>My Collection</span></div>
                        <div class="self-center"><img :src="$asset+'/image/ui/Vector.svg'"></div>
                    </div>
                </Link>
                <Link :href="$url+'/user/shipping-address'" as="button">
                    <div class="flex justify-between py-3 mx-4 text-sm border-b">
                        <div><img :src="$asset+'/image/ui/Address.svg'" class="inline-block mr-3"><span>Shipping Address</span></div>
                        <div class="self-center"><img :src="$asset+'/image/ui/Vector.svg'"></div>
                    </div>
                </Link>
                <Link :href="$url+'/user/set-up'" as="button">
                    <div class="flex justify-between py-3 mx-4 text-sm">
                        <div><img :src="$asset+'/image/ui/Setup.svg'" class="inline-block mr-3"><span>Set Up</span></div>
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
    }
}
</script>