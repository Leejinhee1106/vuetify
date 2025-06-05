<template>
    <v-container>
        <v-row> 
             <v-col cols="12" md="12">
                <v-system-bar>
                    <v-icon icon="mdi-wifi-strength-4"></v-icon>
                    <v-icon icon="mdi-signal" class="ms-2"></v-icon>
                    <v-icon icon="mdi-battery" class="ms-2"></v-icon>
                    <span class="ms-2">14:41 오후</span>
                </v-system-bar>
            </v-col>

            <v-col cols="12" md="12">
                <h2>Basic</h2>
                <v-pagination :length="20"></v-pagination>
            </v-col>

             <v-col cols="12" md="12">
                <h2>Round</h2>
                <v-pagination v-model="page" :length="5" rounded="circle">
                </v-pagination>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import {ref} from 'vue'
//뷰 라이브러리에서 ref(react)함수를 가져옴.
//일반적인 값(숫자, 문자열, 객체)등을 반응형으로 만들어서 뷰 컴포넌트에 추적할 수 있게 해줌
const page = ref(1) 
//페이지라는 변수를 선언하고 그 값은 (1).
//ref(1)은 숫자 1을 초기값으로 가지는 반응형 참조객체(Ref object)를 생성.
//즉, 페이지는 단순한 숫자 1이 아니라 {value:1} 형태의 객체.
</script>