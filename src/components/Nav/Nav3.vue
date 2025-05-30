<template>
    <v-card class="mx-auto" color="grey-lighten-3" mx-width="768">
        <v-layout>
            <v-app-bar color="teal-darken-4" image="http://picsum.photos/1920/1080?random">
                <template v-slot:image>
                    <v-img gradient=
                    "to top right, 
                    rgba(19, 84, 122, .7), 
                    rgba(128, 100, 190, .7)">
                    </v-img>
                </template>

                <template v-slot:prepend>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                </template>

                <v-app-bar-title>JINI</v-app-bar-title>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </v-app-bar>

            <v-main>
                <v-container fluid>
                  <v-row dense>
                    <v-col
                      v-for="n in 4"
                      :key="n"
                      cols="12">
                      <v-card
                        :subtitle="`Subtitle for Content ${n}`"
                        :title="`Content ${n}`"
                        text="lorem1">
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
            </v-main>
        </v-layout>
    </v-card>
</template>