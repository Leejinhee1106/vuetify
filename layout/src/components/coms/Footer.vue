<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <h1>보라돌이</h1>
                <v-footer class="text-center d-flex flex-column ga-2 py-4" 
                color="indigo-lighten-1">
                    <div class="d-flex ga-3">
                        <v-btn
                        v-for="icon in icons" 
                        :key="icon"
                        :icon="icon"
                        density="comfortable"
                        variant="text">
                        </v-btn>
                    </div>

                    <v-divider class="my-2" thickness="2" width="50"></v-divider>

                    <div class="text-caption font-weight-regular opacity-60">
                        Quis amet aute ex esse ad anim dolor veniam incididunt nostrud aliqua mollit do. Est commodo consequat in esse sint cupidatat enim laborum ut anim occaecat sit. Excepteur ad esse sit nulla. Nulla quis velit cillum quis do occaecat voluptate commodo consectetur. Enim duis eiusmod officia eu in proident ut quis voluptate Lorem ea.

                        Consectetur id consectetur deserunt dolor magna ex anim sint sit dolor qui consectetur. Tempor eu esse velit sit ea laboris id pariatur ex cupidatat aliqua Lorem nisi. Reprehenderit labore in aliqua voluptate amet veniam. Aute labore ex reprehenderit mollit eu.

                        Nostrud ut aliqua aliqua reprehenderit anim tempor minim incididunt ea dolore anim cupidatat esse deserunt. Est ipsum elit dolor do nisi excepteur laborum voluptate deserunt ut. Commodo nisi adipisicing enim duis anim enim tempor veniam aliqua ea. Tempor nulla consequat occaecat ut magna ut deserunt dolore.

                        Consectetur sit reprehenderit veniam aliqua anim veniam fugiat laboris. Eu amet irure labore sunt excepteur cillum anim magna qui. Sint sunt fugiat quis culpa ullamco. Pariatur pariatur culpa est minim laborum veniam amet culpa dolor.

                        Sit ipsum incididunt qui pariatur tempor sint aute laborum sunt nulla non Lorem aute in. Elit elit sit ex cupidatat enim non ea excepteur tempor irure ut. Sunt magna aliqua proident aute anim ipsum aliqua non sint adipisicing aliquip aliqua laboris. Deserunt ipsum voluptate dolor occaecat culpa pariatur cillum elit enim Lorem anim voluptate.
                    </div>
                    
                    <v-divider></v-divider>

                    <div class="">
                    {{ new Date().getFullYear() }} - <strong>Vuetify</strong>
                    </div>
                
                </v-footer>
            </v-col>

            <v-col cols="12" md="6">
            <h1>뚜비</h1>
            <v-footer class="d-flex align-center 
            justify-center ga-2 flex-wrap flex-grow-1 py-3"
            color="#035900">
                <v-btn
                v-for="link in links" 
                :key="link"
                :text="link"
                variant="text"
                rounded>
                </v-btn>
                <div class="flex-1-0-100 text-center mt-2">
                {{ new Date().getFullYear() }} - <strong>Vuetify</strong>
                </div>
            </v-footer>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
const icons = [
    'mdi-facebook','mdi-twitter','mdi-instagram'
]
const links = [
    'Home','About US','Team','Services','Blog','Contact Us'
]
</script>