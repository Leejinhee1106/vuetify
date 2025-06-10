<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <h2>Vue Methods</h2>
                <p>
                - vue 메서드는 '메서드' 속성 아래 Vue인스턴스에 속하는 함수<br/>
                - 이벤트 처리, 동작 실행, 계산 로직 등을 수행하는데 유용
                </p>
            </v-col>
            <v-col cols="12" md="6">   
                <h2>Click on the box below</h2>
                <div class="app">
                    <div v-on:click="changeText">{{ text }}</div>
                </div>
            </v-col> 
        </v-row>
        
        <v-row class="mt-5">
            <v-col cols="12" md="6">
                <h2>이벤트 객체를 사용하여 호출</h2>
                <div class="mouse">
                    <div @mousemove="mousePos"> 
                    <!-- v-on:mousemove="mousePos" -->
                        <span>
                        윤지나이: {{ xPos }}
                        </span>
                        <span>
                        내나이: {{ yPos }}
                        </span>
                    </div>
                </div>
            </v-col>

            <v-col cols="12" md="6">
                <h2>Vue Write</h2>
                <div class="rot">
                    <textarea @input="writeText"
                    rows="8" cols="30"
                    placeholder="Start writing..">
                    </textarea>
                    <div>
                        <span>{{ txt }}</span>
                    </div>
                </div>
            </v-col>
        </v-row>
        <p>연어초밥</p>
        <div class="rice"></div>
        <div class="salmon"></div>

        <p>계란초밥</p>
        <div class="rice"></div>
        <div class="egg"></div>
        <div class="kim"></div>

    </v-container>
</template>

<script>
export default {
    data(){
        return{
            text: '',
            xPos: 0,
            yPos: 0,
            txt: '',
        }
    },
    methods:{
        changeText(){
            this.text = 'Hello World'
        },
        mousePos(event){
            this.xPos = event.offsetX
            this.yPos = event.offsetY
        },
        writeText(event){
            this.txt = event.target.value
        }
    }
}
</script>
<style>
.app{
    border: black dashed 1px;
    width: 200px;
    padding: 0px 20px 20px 20px;
}
.app > div{
    width: 140px;
    height: 60px;
    background-color: lightgreen;
    padding: 20px;
}

.mouse{
    border : 1px inset;
    width: 100%;
    padding:  0 20px 20px 20px;
}
.mouse div{
    width: 80%;
    height: 80px;
    background-color: rgb(243, 146, 81);
    padding: 20px;
    margin: 0 auto;
}
.mouse div span{
    font-weight: bold;
}
.rot{
    border:1px dashed;
    width: 300px;
    padding: 20px;
}
.rot > div{
    width: 100%;
    position: relative;
    margin-top: 10px;
    aspect-ratio: 1;
    background-image: url(../../assets/note.png);
    background-size: 100%;
}
.rot span{
    width: 80%;
    font-weight: bold;
    line-height: 1.2em;
    transform-origin: 0 0;
    rotate: 33deg;
    position: absolute;
    top: 40px;
    left: 70px;
}
.rot textarea{
    width: 100%;
    box-sizing: border-box;
}
.rice{
    width: 100px;
    height: 50px;
    background-color: rgb(255, 244, 237);
    border: 1px solid black;
    border-radius: 40%;
    position: relative;
}
.salmon{
    width: 110px;
    height: 30px;
    background-color: rgb(243, 146, 81);
    border-radius: 40%;
    position: relative;
    top: -50px;
    left: -5px;
}
.egg{
    width: 110px;
    height: 25px;
    background-color: rgb(240, 243, 66);
    border-radius: 20%;
    position: relative;
    top: -50px;
    left: -5px;
}
.kim{
    width: 15px;
    height: 50px;
    background-color: black;
    position: relative;
    top: -75px;
    left: 40px;
}

</style>