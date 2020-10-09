<template>
   <div>
       <van-nav-bar
            left-text="热门"
            right-text="更多"
        />
        <voice-modules></voice-modules>
   </div>
</template>

<script>
import VoiceModules from './VoiceModules'
export default {
    components:{
        VoiceModules
    }
}
</script>