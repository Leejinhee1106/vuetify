<template>
<!-- <v-app-bar app>
            <v-toolbar-title>Vuetify Ref</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text :to="'/home'" >Home</v-btn>
            <v-btn text :to="'/nav1'" >*네</v-btn>
            <v-btn text :to="'/nav2'">비</v-btn>
            <v-btn text :to="'/nav3'" >게</v-btn>
            <v-btn text :to="'/nav4'" >이</v-btn>
            <v-btn text :to="'/nav5'" >션*</v-btn>
            <v-btn text :to="'/tabs'">Tabs</v-btn>
            <v-btn text :to="'/button'" >button</v-btn>
            <v-btn text :to="'/fbutton'" >Floating Btn</v-btn>
            <v-btn text :to="'/expan'" >Expan</v-btn>
            <v-btn text :to="'/tooltip'">Tooltip</v-btn>
            <v-btn text :to="'/breadcrumbs'">Crumbles</v-btn> 
            <v-btn text :to="'/bottom1'" >B_nav1</v-btn>
            <v-btn text :to="'/footer'" >Footer</v-btn>          
</v-app-bar> -->

        <v-app-bar app>
        <v-toolbar-title>Vuetify Ref</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn text :to="'/home'">Home</v-btn>

        <!-- 그룹화된 드롭다운 메뉴 -->
        <v-menu>
        <template #activator="{ props }">
                <v-btn v-bind="props" text>
                네비게이션
                <v-icon end>mdi-menu-down</v-icon>
                </v-btn>
        </template>
        <v-list>
                <v-list-item :to="'/nav1'" title="Nav1" />
                <v-list-item :to="'/nav2'" title="Nav2" />
                <v-list-item :to="'/nav3'" title="Nav3" />
                <v-list-item :to="'/nav4'" title="Nav4" />
                <v-list-item :to="'/nav5'" title="Nav5" />
                <v-list-item :to="'/bottom1'" title="B-Nav1" />
        </v-list>
        </v-menu>

        <v-menu>
        <template #activator="{ props }">
                <v-btn v-bind="props" text>
                Coms
                <v-icon end>mdi-menu-down</v-icon>
                </v-btn>
        </template>
        <v-list>
                <v-list-item :to="'/tabs'" title="Tabs"/>
                <v-list-item :to="'/button'" title="button"/>
                <v-list-item :to="'/fbutton'" title="Floating Btn"/>
                <v-list-item :to="'/expan'" title="Expan"/>
                <v-list-item :to="'/tooltip'" title="Tooltip"/>
                <v-list-item :to="'/breadcrumbs'" title="Crumbles"/>
                <v-list-item :to="'/page'" title="Page"/>
        </v-list>
        </v-menu>

        <!-- 나머지 버튼들 -->
        <v-btn text :to="'/dir'">Directive</v-btn>
        <v-btn text :to="'/footer'">Footer</v-btn>
        </v-app-bar>


        <v-main>
                <router-view></router-view>
        </v-main>
</template>