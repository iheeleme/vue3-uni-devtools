<script setup>
import { getCurrentInstance, onMounted, ref } from 'vue';
import { watchConsole } from '../utils/mitt'

const consoleArr = ref([])
onMounted(() => {
    watchConsole(() => {

    })
})

const instance = getCurrentInstance()
const move = (e) => {
    const touch = e.touches[0]
    uni.createSelectorQuery().in(instance).select('.devtools').boundingClientRect((data) => {
        console.log("得到布局位置信息" + JSON.stringify(data));
    }).exec()
    console.log(instance);
}

</script>

<template>
    <view>
        <button class="devtools" ref="devtools" style="position: absolute;left: 0;top:10vw;"
            @touchmove="move">dev_tool</button>
        <view>

        </view>
    </view>
</template>
