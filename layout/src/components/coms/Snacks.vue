<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <h1 class="text-center">Snackbar</h1>
                <div class="text-center ma-2">
                    <v-btn @click="snackbar = true">
                        Open Snackbar
                    </v-btn>

                    <v-snackbar v-model="snackbar">
                        {{ text }}
                        <template v-slot:actions>
                           <v-btn color="green" variant="text" @click="snackbar = false">
                                Close
                            </v-btn>
                        </template>
                    </v-snackbar>
                </div>
            </v-col>
            <v-col cols="12" md="4">
            
            </v-col>
            <v-col cols="12" md="4">
            
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data:() => ({
        snackbar:false,
        text:`babo bbonzi`
    })
}
</script>