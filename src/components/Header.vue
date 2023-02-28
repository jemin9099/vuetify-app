<template>
<v-app-bar>

    <template v-slot:prepend>
        <v-img src="@/assets/developers.png" width="25px"></v-img>
    </template>

    <v-app-bar-title>Infortech</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-tabs fixed-tabs color="#1a73e8">
        <v-tab>
            <router-link to="/" class=" text-decoration-none ">Home</router-link>
        </v-tab>
        <v-tab>
            <router-link to="/event" class=" text-decoration-none ">event</router-link>
        </v-tab>
        <v-tab>
            Team
        </v-tab>
        <v-tab>
            Speakers
        </v-tab>
        <v-tab>
            About
        </v-tab>
        <v-tab>
            Contact
        </v-tab>
        <v-tab>
            Blogs
        </v-tab>
    </v-tabs>

    <v-btn icon>
        <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-btn icon>
        <v-icon @click="dark_mode">mdi-heart</v-icon>
    </v-btn>

</v-app-bar>
</template>

<script>
import {
    useTheme
} from 'vuetify'
export default {
    name: 'Header',
    setup() {
        const theme = useTheme()

        return {
            theme,
        }
    },
    methods: {
        dark_mode() {
            this.theme.global.name.value = this.theme.global.current.value.dark ? 'light' : 'dark'

            axios.post('dvsfbfb')
        }
    },
}
</script>
