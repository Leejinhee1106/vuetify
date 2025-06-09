<template>
<div class="mt100"></div>

<v-layout class="border rounded">
    <div class="mx-auto mt100">
        <v-btn
        color="deep-purple" 
        variant="outlined"
        @click="active = !active"> <!--토글기능-->
            toggle Navigation
        </v-btn>
        <div class="mb-5"></div>
    </div>

    <v-bottom-navigation
    :active="active"
    color="indigo">
        <v-btn>
            <v-icon>mdi-history</v-icon>
                Recents
        </v-btn>

        <v-btn>
            <v-icon>mdi-heart</v-icon>
                favorites
        </v-btn>

        <v-btn>
            <v-icon>mdi-map-marker</v-icon>
                Nearby
        </v-btn>
    </v-bottom-navigation>
</v-layout>


<v-container>
    <v-row>
        <v-col>
        
        </v-col>
    </v-row>
</v-container> 


<div class="my-5"></div>

<v-layout class="overflow-visible">
    <v-bottom-navigation
    v-model="value"
    :bg-color="color"
    mode="shift"> 
        <v-btn>
            <v-icon>mdi-television-play</v-icon>
            <span>Video</span>
        </v-btn>
        <v-btn>
            <v-icon>mdi-music-note</v-icon>
            <span>Music</span>
        </v-btn>
        <v-btn>
            <v-icon>mdi-book</v-icon>
            <span>Book</span>
        </v-btn>
        <v-btn>
            <v-icon>mdi-image</v-icon>
            <span>Image</span>
        </v-btn>
    </v-bottom-navigation>
</v-layout>

<v-bottom-navigation :elevation="24"> 
<!--elevation : 그림자효과-->
    <v-btn value="recent">
        <v-icon>mdi-history</v-icon>
        <span>Recent</span>
    </v-btn>
    <v-btn value="favorites">
        <v-icon>mdi-heart</v-icon>
        <span>Favorite</span>
    </v-btn>
    <v-btn value="nearby">
        <v-icon>mdi-map-marker</v-icon>
        <span>NearBy</span>
    </v-btn>
</v-bottom-navigation>
</template>

<script setup>
import {computed, ref} from 'vue';

const active = ref(true) // 팝업창 활성화&비활성화

const value = ref(1) // value는 이제 반응형 데이터
const color = computed(() => {
    switch (value.value) {
        case 0: return 'blue-grey'
        case 1: return 'teal'
        case 2: return 'brown'
        case 3: return 'indigo'
        default: return 'blue-grey'
    }
})
</script>