<template>
    <div>
         <vioce-top></vioce-top>
        <voice-recommend></voice-recommend>
        <voice-img></voice-img>
        <voice-item></voice-item>
        <voice-navigation></voice-navigation>
        <voice-modules></voice-modules>
         <voice-modules></voice-modules>
        <!-- <voice-navigation></voice-navigation> -->
    </div>
</template>

<script>
import VioceTop from './VoiceTop'
import VoiceRecommend from './VoiceRecommend'
import VoiceImg from './VoiceImg'
import VoiceItem from './VoiceItem'
import VoiceModules from './VoiceModules'
import VoiceNavigation from './VoiceNavigation'
export default {
    components:{
        VioceTop,
        VoiceRecommend,
        VoiceImg,
        VoiceItem,
        VoiceModules,
        VoiceNavigation
    }
}
</script>