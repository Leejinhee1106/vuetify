<template>
    <v-layout ref="app" class="rounded rounded-md border">
        <v-app-bar color="surface-variant" name="app-bar">
            <child v-slot="{print}">
                <v-btn class="mx-auto" @click="print('app-bar')">
                    Get data
                </v-btn>
            </child>
        </v-app-bar>

        <v-navigation-drawer
        color="surface-light" name="drawer"permanent>
        <div class="d-flex justify-center align-center h-100">
            <child v-slot="{print}">
                <v-btn variant="text" @click="print('drawer')">
                Get data
                </v-btn>
            </child>
        </div>
        </v-navigation-drawer>

        <v-main class="d-flex align-center justify-center">
            <v-container>
                <v-row align="center" justify="center">
                    <v-col cols="12" md="4" sm="6">
                        <div class="position-absolute d-flex align-center justify-center">
                            <v-btn color="deep-purple-darken-2" size="x-large" @click="dialog = !dialog">
                                팝업창 열기
                            </v-btn>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                    </v-col>
                    
                    <v-col cols="12" md="4" sm="6">
                        <v-card class="px-2 mx-auto"
                        max-width="900"
                        rounded="lg"
                        text="Maria~~~~~~~~~abbam Maria"
                        theme="dark"
                        title="SURVEY"
                        variant="flat"
                        >
                            <template v-slot:append>
                                <v-btn icon="$close" 
                                variant="plain" 
                                density="comfortable" 
                                class="me-n2">
                                </v-btn>
                            </template>

                            <v-item-group
                            v-model="model"
                            class="d-flex justify-sm-space-between px-6 pt-2 pb-6">
                            <v-item v-for="n in 5" :key="n">
                                <template v-slot:default="{toggle}">
                                <v-btn
                                :active="model != null && model + 1 >= n"
                                :icon="`mdi-numeric-${n}`"
                                height="40"
                                variant="text"
                                width="40"
                                border
                                @click="toggle"
                                >
                                </v-btn>
                                </template>
                            </v-item>
                            </v-item-group>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row align="center" justify="center">
                    <v-col cols="auto">
                        <v-btn density="compact" icon="mdi-plus"></v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn density="compotable" icon="$vuetify"></v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn density="default" icon="mdi-open-in-new"></v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn icon="mdi-account" size="x-small"></v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn icon="$vuetify"></v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn icon="mdi-open-in-new" size="large"></v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn icon="mdi-calendar" size="x-large"></v-btn>
                    </v-col>
                    <v-col cols="auto">
                    </v-col>
                </v-row> 

                <v-row align="center" justify="center">
                    <v-col>
                        <h1>Rounded Button</h1>
                    </v-col>
                </v-row>

                <v-row align="center" justify="center">
                    <v-col cols="12" md="4" sm="6">
                        <v-btn rounded="0" size="x-large" block>Rounded 0</v-btn>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                        <v-btn rounded="xs" size="x-large" block>Rounded xs</v-btn>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                        <v-btn rounded="sm" size="x-large" block>Rounded sm</v-btn>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                        <v-btn rounded="x-large" size="x-large" block>Rounded x-large</v-btn>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                        <v-btn rounded="lg" size="x-large" block>Rounded lg</v-btn>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                        <v-btn rounded="xl" size="x-large" block>Rounded xl</v-btn>
                    </v-col>
                </v-row>
                <v-row align="center" justify="center">
                    <v-col>
                        <v-btn block>block button</v-btn>
                    </v-col>
                </v-row>

                <v-row align="center" justify="center">
                    <v-col cols="auto" class="mt100">
                        <v-btn size="x-small">x-small</v-btn>
                    </v-col>
                    <v-col cols="auto" class="mt100">
                        <v-btn size="small">small</v-btn>
                    </v-col>
                    <v-col cols="auto" class="mt100">
                        <v-btn size="auto">auto</v-btn>
                    </v-col>
                    <v-col cols="auto" class="mt100">
                        <v-btn size="large">large</v-btn>
                    </v-col>
                    <v-col cols="auto" class="mt100">
                        <v-btn size="x-large">x-large</v-btn>
                    </v-col>
                </v-row>

                <v-sheet
                border="dashed md"
                color="surface-light"
                rounded="lg">
                <h1 class="my-5 text-primary">Buttons</h1>
                <p>
                <v-btn>기본형</v-btn>
                <v-btn prepend-icon="$vuetify" class="mx-3">prepend-icon</v-btn>
                <v-btn append-icon="$vuetify">append-icon</v-btn>
                <v-btn prepend-icon="$vuetify" stacked class="mx-3">stack</v-btn>
                </p>
                </v-sheet>
            </v-container>
        </v-main>

        <v-footer color="surface-light" name="footer" app>
            <v-btn class="mx-auto" 
            text="Get Data"
            variant="text" 
            @click="print('footer')">
                Get data
            </v-btn>
        </v-footer>
    </v-layout>
</template>

<script setup>
/* setup은 vue3에서 composition API를 
간결하게 사용할 수 있도록 도와주는 SFC문법 */
import {useLayout} from 'vuetify';

const Child = {
    setup (props, ctx){ //() = > setup 함수의 매개변수
        const {getLayoutItem} = useLayout();

        function print(key) { //key값을 받아서 아이템의 정보를 json으로 경고창을 출력
            alert(JSON.stringify(getLayoutItem(key), null, 2))    
        }

        return () => ctx.slots.default({print})
    },
}
</script>

<style>
.mt100{margin: 50px 0 50px 0;}
</style>