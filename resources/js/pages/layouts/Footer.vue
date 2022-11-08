<template>
    <div class="grid grid-cols-4 fixed w-full bg-white bottom-0 footer_nav text-gray-400">
        <div class="text-lg p-3 text-center cursor-pointer nav_link_active"><img class="m-auto" :src="$assetUrl+'image/ui/HomeActive.svg'"><div class="text-sm">Home</div></div>
        <div class="text-lg p-3 text-center cursor-pointer"><img class="m-auto" :src="$assetUrl+'image/ui/Recycle.svg'"><div class="text-sm">Exchange</div></div>
        <div class="text-lg p-3 text-center cursor-pointer"><img class="m-auto" :src="$assetUrl+'image/ui/Wallet.svg'"><div class="text-sm">Wallet</div></div>
        <div class="text-lg p-3 text-center cursor-pointer"><img class="m-auto" :src="$assetUrl+'image/ui/UserTag.svg'"><div class="text-sm">Profile</div></div>
    </div>
</template>

<script>
export default {

}
</script>
