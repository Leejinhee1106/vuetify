<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <h1>타임라인</h1>
                <v-timeline direction="horizontal">
                    <v-timeline-item>
                        <template v-slot:opposite>
                            1999
                        </template>
                        <div class="">
                            <div class="text-h6">진히 탄생</div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam cum tenetur mollitia libero, ipsum nam accusamus laboriosam laborum reiciendis dolore!</p>
                        </div>
                    </v-timeline-item>

                    <v-timeline-item>
                        <template v-slot:opposite>
                            2003
                        </template>
                        <div class="">
                            <div class="text-h6">뽄지 탄생</div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam cum tenetur mollitia libero, ipsum nam accusamus laboriosam laborum reiciendis dolore!</p>
                        </div>
                    </v-timeline-item>

                    <v-timeline-item>
                        <template v-slot:opposite>
                            2025
                        </template>
                        <div class="">
                            <div class="text-h6">만남 성사</div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam cum tenetur mollitia libero, ipsum nam accusamus laboriosam laborum reiciendis dolore!</p>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
            <v-col cols="12" md="4">
                <h1>박스형</h1>
                <v-timeline side="end">
                    <v-timeline-item
                    v-for="item in items"
                    :key="item.id"
                    :dot-color="item.color"
                    size="small">
                        <v-alert
                        :color="item.color"
                        :icon="item.icon"
                        :value="true">
                        {{ item.text }}
                        </v-alert>
                    </v-timeline-item>
                </v-timeline>
            </v-col>

            <v-col cols="12" md="4">
                <h1>박스타이틀 <small>근데 배경색을 곁들인..</small></h1>
                <v-timeline align="start">
                    <v-timeline-item
                    v-for="(item, i) in its"
                    key="i"
                    :dot-color="item.color"
                    :icon="item.icon"
                    fill-dot>
                        <v-card>
                            <v-card-title :class="['text-h6', `bg-${item.color}`]">
                                오늘은 6월 11일. 거꾸로 하면 내 생일 ㅋ
                            </v-card-title>
                            <v-card-text class="bg-white text-primary">
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ex quos, adipisci culpa incidunt nobis asperiores hic pariatur aut error ratione omnis atque officiis quod molestias voluptatum tenetur distinctio fuga.
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
const items = [
    {id:1, color:'info', icon:'mdi-information', text: '991106'},
    {id:2, color:'error', icon:'mdi-alert-circle', text: '030509'},
]
const its = [
      {
      color: 'red-lighten-2',
      icon: 'mdi-star',
    },
    {
      color: 'purple-lighten-2',
      icon: 'mdi-book-variant',
    },
    {
      color: 'green-lighten-1',
      icon: 'mdi-airballoon',
    },
    {
      color: 'indigo-lighten-2',
      icon: 'mdi-layers-triple',
    },
]
</script>