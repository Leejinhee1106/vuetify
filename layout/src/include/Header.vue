<template>
        <v-app-bar app>
        <v-toolbar-title>Vuetify Ref</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn text :to="'/home'">Home</v-btn>

        <!-- 그룹화된 드롭다운 메뉴 -->
        <v-menu>
        <template #activator="{ props }">
                <v-btn v-bind="props" text>
                Nav
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
                Vuetify3
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
                <v-list-item :to="'/footer'" title="Footer"/>
        </v-list>
        </v-menu>

        <v-menu>
        <template #activator="{ props }">
                <v-btn v-bind="props" text>
                Vuetify3 Inputs & Controls
                <v-icon end>mdi-menu-down</v-icon>
                </v-btn>
        </template>
        <v-list>
                <v-list-item :to="'/otpin'" title="OTP input"/>
                <v-list-item :to="'/radiobtn'" title="Radio Btn"/>
                <v-list-item :to="'/rs'" title="Range Slider"/>
                <v-list-item :to="'/swit'" title="Switch"/>
                <v-list-item :to="'/tf'" title="TextField"/>
                <v-list-item :to="'/ta'" title="TextAria"/>
        </v-list>
        </v-menu>

         <v-menu>
        <template #activator="{ props }">
                <v-btn v-bind="props" text>
                Vuetify3 Select
                <v-icon end>mdi-menu-down</v-icon>
                </v-btn>
        </template>
        <v-list>
                <v-list-item :to="'/tbtn'" title="Toggle Button" />
                <v-list-item :to="'/cslide'" title="Carousel Slide" />
                <v-list-item :to="'/cg'" title="Chip Group" />
                <v-list-item :to="'/ig'" title="Item Group" />
                <v-list-item :to="'/sgr'" title="Slide Group" />
                <v-list-item :to="'/ste'" title="Stepper" />
                <v-list-item :to="'/win'" title="Windows" />
        </v-list>
        </v-menu>

         <v-menu>
        <template #activator="{ props }">
                <v-btn v-bind="props" text>
                vue
                <v-icon end>mdi-menu-down</v-icon>
                </v-btn>
        </template>
        <v-list>
                <v-list-item :to="'/dir'" title="Directive"/>
                <v-list-item :to="'/events'" title="Event"/>
                <v-list-item :to="'/met'" title="Method"/>
                <v-list-item :to="'/comp'" title="Computed"/>
                <v-list-item :to="'/vmodel'" title="V-model"/>
                <v-list-item :to="'/Watc'" title="Watcher"/>
        </v-list>
        </v-menu>

        <!-- 드롭다운 아닌 버튼 
        <v-btn text :to="'/footer'">Footer</v-btn>
        -->
        </v-app-bar>


        <v-main>
                <router-view></router-view>
        </v-main>
</template>