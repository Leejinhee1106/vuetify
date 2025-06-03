<template>
    <v-container class="text-center" fluid>
        <v-row>
            <v-col cols="12" md="3">
                 <v-tooltip text="JINI">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props">WHO AM I</v-btn>
                    </template>
                </v-tooltip>
            </v-col>
            <v-col cols="12" md="3">
                 <v-tooltip text="JINI" model-value @update:model-value="">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props">WHO AM I</v-btn>
                    </template>
                </v-tooltip>
            </v-col>
            <v-col cols="12" md="3">
                <v-btn>End
                    <v-tooltip activator="parent" location="end">
                        JINI
                    </v-tooltip>
                </v-btn>
            </v-col>
            <v-col cols="12" md="3">
                <v-btn>Bottom
                    <v-tooltip activator="parent" location="bottom">
                        아래
                    </v-tooltip>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>