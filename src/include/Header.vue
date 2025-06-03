<template>
<v-app-bar app>
            <v-toolbar-title>Vuetify Ref</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text :to="'/home'" >Home</v-btn>
            <v-btn text :to="'/nav1'" >*네</v-btn>
            <v-btn text :to="'/nav2'">비</v-btn>
            <v-btn text :to="'/nav3'" >게</v-btn>
            <v-btn text :to="'/nav4'" >이</v-btn>
            <v-btn text :to="'/nav5'" >션*</v-btn>
            <v-btn text :to="'/bottom1'" >B_nav1</v-btn>
            <v-btn text :to="'/footer'" >Footer</v-btn>
            <v-btn text :to="'/button'" >button</v-btn>
            <v-btn text :to="'/fbutton'" >Floating Btn</v-btn>
            <v-btn text :to="'/expan'" >Expan</v-btn>
            <v-btn text :to="'/tooltip'">Tooltip</v-btn>
            <v-btn text :to="'/breadcrumbs'">Crumbles</v-btn>
            <v-btn text :to="'/tabs'">Tabs</v-btn>
</v-app-bar>

            <v-main>
                    <router-view></router-view>
            </v-main>
</template>