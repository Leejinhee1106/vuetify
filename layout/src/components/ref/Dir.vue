<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" class="border">
                <h2>지시어</h2>
                <p class="">
                - v-bind : 태그의 속성을 vue인스턴스 내부의 데이터 변수에 연결<br/>
                - v-if : 조건부 렌더링<sub>(v-if, v-else-if, v-else)</sub><br/>
                - v-show : true가 되면 보이고 false가 되면 안보임<br/>
                - v-for : 정해진 크기 만큼 반복<br/>
                - Events : <br/>
                - v-on :
                </p>
                <div class="" id="msg">
                    {{ message }}
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="6">
            <h2>v-bind</h2>
            <p>line</p>
            <section v-bind:class="vueClass">분홍배경</section>
            <p v-bind:style="{fontSize:size}">내 키는 더 못 크지만 글자는 클 수 있어</p>
            <div v-bind:style="{backgroundColor: isImportant ? 'lightcoral' : 'lightgreen'}">
            조배칠
            </div>
            </v-col>

            <v-col cols="12" md="6">
            <h2>v-if</h2>

            <div class="" v-if="text.includes('pizza')">
            <p>텍스트에 피자라는 단어가 포함되어 있음</p>
            <img class="mrPizza" src="../../assets/img_pizza.svg"/>
            </div>

            <div class="" v-else-if="text.includes('burrito')">
            <p>텍스트에 부리또라는 단어가 포함되어 있음</p>
            </div>

            <div class="" v-else="text.includes('')">
            <p>텍스트에 아무것도 포함되어 있지 않음</p>
            </div>
            </v-col>

            
        </v-row>

        <v-row>
            <v-col cols="12" md="4">
            <ol>
                <li v-for="x in manyFoods">
                    {{ x }}
                </li>
            </ol>
            </v-col>

            <v-col cols="12" md="8">
            <div class="border w-100 d-flex">
            <h3>figure</h3>
            <figure v-for="x in manyFood" :key="x">
                <img v-bind:src="x.url"/>
                <figcaption>{{x.name}}</figcaption>
            </figure> 
            </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <h2>Basic Css Transition</h2>
                <v-btn @click="doesRotate = true">Rotate</v-btn>
                <div :class="{rotate: doesRotate}" id="rect"></div>
            </v-col>
        </v-row>
    </v-container>
</template>

<!--
*setup 버전* 
<v-btn @click="doesRotate = true">Rotate</v-btn>

*script 버전* 
<v-btn @click="this.doesRotate = true">Rotate</v-btn> 
-->                



<!--
<script>
//html로 뷰를 학습할때는 const app = Vue.createApp
export default{
    data() {
        return{
message:"Hello world",
vueClass:"pinkBG",
size:'48px',
isImportant:true,
text:'I like burrito, pizza, ...',
manyFoods:['Burrito','Salad','Cake','Soup','Fish','Pizza'],
manyFood: [
        {name: 'Burrito', url: 'src/assets/img_burrito.svg'},
        {name: 'Salad', url: 'src/assets/img_salad.svg'},
        {name: 'Cake', url: 'src/assets/img_cake.svg'},
        {name: 'Soup', url: 'src/assets/img_soup.svg'},
        {name: 'Fish', url: 'src/assets/img_fish.svg'},
        {name: 'Pizza', url: 'src/assets/img_pizza.svg'}
      ],
doesRotate:false
        };
    }
}
</script>
-->

<script setup>
import { ref } from 'vue'

const message = ref("HelloWorld")
const vueClass = ref("pinkBG")
const size = ref("48px")
const isImportant = ref(false) // or true하면 light coral
const text = ref("I like burrito, pizza, ...")
const manyFoods = ref(['burrito', 'Salad', 'Cake', 'Soup'])
const manyFood = ref([
  { name: 'Burrito', url: 'src/assets/img_burrito.svg' },
  { name: 'Salad', url: 'src/assets/img_salad.svg' },
  { name: 'Cake', url: 'src/assets/img_cake.svg' },
  { name: 'Soup', url: 'src/assets/img_soup.svg' },
  { name: 'Fish', url: 'src/assets/img_fish.svg' },
  { name: 'Pizza', url: 'src/assets/img_pizza.svg' },
])
const doesRotate = ref(false)

</script>

<style>
#msg{
padding:10px;
font-size: x-larage;
background: coral;
}
.pinkBG{background: lightpink;}
.mrPizza{width: 50%;}
figure{width: 70px; margin: 10px;}
figcaption{text-align: center;}

#rect {
  border: 2px solid;
  background-color: aqua;
  width: 60px;
  height: 60px;
  transition: transform 1s ease-in-out;
}

.rotate {
  transform: rotate(180deg);
}
</style>