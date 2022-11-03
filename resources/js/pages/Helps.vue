<template>
    <div class="p-4 bg-gray-50 h-screen">
        <div class="flex flex-row my-5">
           <Link href="/box" as="button">
                <div class="p-2 pl-0 mr-2">
                    <img src="/image/ui/BackArrow.svg">
                </div>
            </Link>
            <div class="font-bold text-xl self-center">
                Helps
            </div>
        </div>
        <div class="help_tip_box bg-white rounded-xl p-3 my-4">
            <div class="flex justify-between col">
                <div class="w-full font-bold py-1">How to buy Blind Box?</div>
                <div class="self-center"><img src="/image/ui/DropDown.svg"></div>
            </div>
            <div class="content">
                <p class="pt-2 border-t border-gray-300 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </div>
        </div>
        <div class="help_tip_box bg-white rounded-xl p-3 my-4">
            <div class="flex justify-between col">
                <div class="w-full font-bold py-1">How to buy Blind Box?</div>
                <div class="self-center"><img src="/image/ui/DropDown.svg"></div>
            </div>
            <div class="content">
                <p class="pt-2 border-t border-gray-300 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </div>
        </div>
        <div class="help_tip_box bg-white rounded-xl p-3 my-4">
            <div class="flex justify-between col">
                <div class="w-full font-bold py-1">How to buy Blind Box?</div>
                <div class="self-center"><img src="/image/ui/DropDown.svg"></div>
            </div>
            <div class="content">
                <p class="pt-2 border-t border-gray-300 text-sm"> Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit</p>
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