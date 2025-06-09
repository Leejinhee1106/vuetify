<template>
    <v-layout class="rounded rounded-md-border">
        <v-navigation-drawer>
            <v-list nav>
                <v-list-item title="Navigation drawer" link>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar title="Application Bar"></v-app-bar>

        <v-main class="d-flex align-center justify-center">
            <v-container>
                <v-sheet
                border="dashed md"
                color="surface-light"
                rounded="lg"
                width="100%">   
                  <h1>App bar</h1>
                  <p>- 네비게이션은 모든 사이트에 존재</p>
                  <v-app-bar :elevation="2">
                      <template v-slot:prepend>
                          <v-app-bar-nav-icon></v-app-bar-nav-icon>
                      </template>
                      <v-app-bar-title>기본형</v-app-bar-title>
                  </v-app-bar>

                  <h1>Collapse</h1>
                  <v-app-bar :elevation="2">
                    <template v-slot:prepend>
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    </template>
                    <v-app-bar-title>기본형</v-app-bar-title>
                  </v-app-bar>
                  
                  <h1>Rounded</h1>
                  <v-app-bar :elevation="2">
                    <template v-slot:prepend>
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    </template>
                    <v-app-bar-title>기본형</v-app-bar-title>
                  </v-app-bar>
                </v-sheet>

                
            </v-container>
        </v-main>
    </v-layout>
</template>