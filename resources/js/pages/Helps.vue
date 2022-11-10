<template>
    <div class="p-4">
        <div class="flex flex-row my-5">
           <Link :href="$url+'/box'" as="button">
                <div class="p-2 pl-0 mr-2">
                    <img :src="$asset+'/image/ui/BackArrow.svg'">
                </div>
            </Link>
            <div class="font-bold text-xl self-center">
                Helps
            </div>
        </div>
        <div v-for="(help,i) in data.data" :key="i" class="help_tip_box bg-white rounded-xl p-3 my-4">
            <div class="flex justify-between col">
                <div class="w-full font-bold py-1">{{help.title}}</div>
                <div class="self-center"><img :src="$asset+'/image/ui/DropDown.svg'"></div>
            </div>
            <div class="content">
                <p class="pt-2 border-t border-gray-200 text-sm">{{help.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>

import {Link} from '@inertiajs/inertia-vue'

export default {
    components: {
        Link
    },
    props: {
        data: {
            type: Object
        }
    },
    mounted() {
        var coll = document.getElementsByClassName("col");
        var i;

        for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
            content.style.maxHeight = null;
            } else {
            content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
        }
    }
}
</script>