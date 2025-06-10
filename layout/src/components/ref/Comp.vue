<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12">
                <h2>Computed Properties</h2>
                <p>
                - 다른 속성에 따라 달라지는 점을 제외하면 데이터 속성과 유사 <br/>
                - 메서드처럼 작성되지만 입력 인수를 허용하지 않음<br/>
                - 종속성이 변경되면 자동으로 업데이트되고 메서드는 이벤트 처리와 같이 무언가가 발생하면 호출<br/>
                - 다른 것에 의존하는 것을 출력할 때 사용<br/>
                - 동적이다 ▶ 하나 이상의 데이터 속성값에 따라 변경<br/>
                - computed라는 예약된 이름을 가짐
                </p>
            </v-col>
        </v-row>
         <v-row>
            <v-col cols="12" md="4">
            <form>
                <p>
                    체크박스를 췤췤 암더코리안
                    <label class="form-label">
                        <input type="checkbox" class="form-check" v-model="chbxVal">
                        {{ isImportant }}
                    </label>
                </p>
            </form>
            </v-col>
            <v-col cols="12" md="4">
            <h2>{{ name }}</h2>
            <p>{{ message }}</p>
            </v-col>
            <v-col cols="12" md="4">
                <h1>{{ msg }}</h1>
                <p>이것은 파라미터</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { isImportAttribute } from 'typescript';

export default {
    data(){
        return{
            chbxVal: false,
            name: 'Apples',
            message: 'i like ..',
            msg:'세계여 안녕'
        }
    },
    computed:{
        isImportant(){
            if(this.chbxVal){
                return 'yes'
            }
            else{
                return 'no'
            }
        }
    }
}
</script>

<style>
form{
    border: dashed 1px black;
    display: inline-block;
    padding: 10px;
}
label{
    padding: 5px;
}
label:hover{
    cursor: pointer;
    background-color: lightgray;
    border-radius: 5px;
}
</style>