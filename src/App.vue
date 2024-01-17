<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';

const devtools_app = ref<HTMLInputElement | null>(null)

//按钮拖动逻辑
function appDrag() {
    let isDown = false
    let disX = 0
    let disY = 0
    devtools_app.value?.addEventListener('mousedown', (e) => {
        isDown = true
        disX = e.clientX - devtools_app.value!.offsetLeft
        disY = e.clientY - devtools_app.value!.offsetTop
    })
    document.addEventListener('mousemove', (e) => {
        if (isDown) {
            let left = e.clientX - disX
            let top = e.clientY - disY
            if (left < 0) {
                left = 0
            } else if (left > window.innerWidth - devtools_app.value!.offsetWidth) {
                left = window.innerWidth - devtools_app.value!.offsetWidth
            }
            if (top < 0) {
                top = 0
            } else if (top > window.innerHeight - devtools_app.value!.offsetHeight) {
                top = window.innerHeight - devtools_app.value!.offsetHeight
            }
            devtools_app.value!.style.left = left + 'px'
            devtools_app.value!.style.top = top + 'px'
        }
    })
    document.addEventListener('mouseup', () => {
        isDown = false
    })
}

onMounted(() => {
    //dom加载后绑定拖动时间
    appDrag()
})

onBeforeMount(() => {
    //dom卸载前移除拖动事件
    document.removeEventListener('mousemove', appDrag)
    document.removeEventListener('mouseup', appDrag)
})

</script>

<template>
    <div>
        <button ref="devtools_app" style="position: absolute;left: 0;top:10vw;">dev_tool</button>
    </div>
</template>
