<template>
<v-container>
    <v-row>
        <v-col cols="12" md="4">
            <v-card>
                <v-tabs v-model="tab" bg-color="primary">
                    <v-tab value="one">Item One</v-tab>
                    <v-tab value="two">Item Two</v-tab>
                    <v-tab value="three">Item Three</v-tab>
                </v-tabs>
            
                <v-card-text>
                    <v-tabs-window v-model="tab">
                        <v-tabs-window-item value="one">
                            one
                        </v-tabs-window-item>
                        <v-tabs-window-item value="two">
                            two
                        </v-tabs-window-item>
                        <v-tabs-window-item value="three">
                           three
                        </v-tabs-window-item>
                    </v-tabs-window>
                </v-card-text>
            </v-card>
        </v-col>  

        <v-col cols="12" md="4">
            <v-card>
                <v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
                    <v-tab :value="1">Landscape</v-tab>
                    <v-tab :value="2">City</v-tab>
                    <v-tab :value="3">Abstract</v-tab>
                </v-tabs>
            </v-card>
        </v-col>

        <v-col cols="12" md="4">
        
        </v-col>           
    </v-row>
</v-container>
</template>

<script>
export default {
    data:()=> ({
        tab: null,
    }),
}
</script>