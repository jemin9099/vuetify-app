<template>
<v-container>
    <v-divider></v-divider>
    <p class="py-4" style="font-size: 130%;">Follow Us:
        <a href="www.facebook.com" class="text-decoration-none px-2">
            <span>
                <v-icon>mdi-facebook</v-icon>
                <v-tooltip activator="parent" location="top">facebook</v-tooltip>
            </span>
        </a>
        <a href="www.twitter.com"  class="text-decoration-none px-2">
            <span>
                <v-icon color="#1da1f2" >mdi-twitter</v-icon>
                <v-tooltip activator="parent" location="top">twitter</v-tooltip>
            </span>
        </a> 
        <a href="www.instagram.com"  class="text-decoration-none px-2">
            <span>
                <v-icon color="pink">mdi-instagram</v-icon>
                <v-tooltip activator="parent" location="top">instagram</v-tooltip>
            </span>
        </a>
        <a href="www.github.com"  class="text-decoration-none px-2">
            <span>
                <v-icon color="black">mdi-github</v-icon>
                <v-tooltip activator="parent" location="top">github</v-tooltip>
            </span>
        </a>
        <a href="www.linkdin.com"  class="text-decoration-none px-2">
            <span>
                <v-icon color="#0a66c2">mdi-linkedin</v-icon>
                <v-tooltip activator="parent" location="top">Linkedin</v-tooltip>
            </span>
        </a>
        <a href="www.youtube.com"  class="text-decoration-none px-2">
            <span>
                <v-icon color="red">mdi-youtube</v-icon>
                <v-tooltip activator="parent" location="top">youtube</v-tooltip>
            </span>
        </a>
       
    </p>

    <v-divider></v-divider>
    <v-row class="mt-5 mb-2">
        <v-col lg="3" md="6" sm="12">
            <div class="text-h5">About</div>
            <p style="font-size: 110%;"><router-link to="/"  class="text-decoration-none text-grey-darken-3">GDG Jalandhar</router-link></p>
            <p style="font-size: 110%;"><router-link to="/" class="text-decoration-none text-grey-darken-3">WomenTechmakers</router-link></p>
            <p style="font-size: 110%;"><router-link to="/" class="text-decoration-none text-grey-darken-3">Google Developers Groups</router-link></p>
        </v-col>
        <v-col lg="3" md="6" sm="12">
            <div class="text-h5">Resources</div>
            <p style="font-size: 110%;"><router-link to="/"  class="text-decoration-none text-grey-darken-3">Become a Sponsor</router-link></p>
            <p style="font-size: 110%;"><router-link to="/" class="text-decoration-none text-grey-darken-3">Some Link Name</router-link></p>
           
        </v-col>
        <v-col lg="3" md="6" sm="12">
            <div class="text-h5">Developer Console</div>
            <p style="font-size: 110%;"><router-link to="/"  class="text-decoration-none text-grey-darken-3">Google API Console</router-link></p>
            <p style="font-size: 110%;"><router-link to="/" class="text-decoration-none text-grey-darken-3">Google Play Console</router-link></p>
            <p style="font-size: 110%;"><router-link to="/" class="text-decoration-none text-grey-darken-3">Firebase Console</router-link></p>
        </v-col>
    </v-row>
    <v-divider></v-divider>
   <v-row class="pa-5">
    <v-col md="2">
        <div class="text-h4">Infortech</div>
    </v-col>
    <v-col md="6">
        <v-row>
            <v-col md="4">
                <div style="font-size: 130%;" class="text-center">Code of Cunduct</div>
            </v-col>
            <v-col md="4">
                <div style="font-size: 130%;">Terms & Servies</div>
            </v-col>
            <v-col md="4">
                <div style="font-size: 130%;" class="text-center">community & Guidelines</div>
            </v-col>
        </v-row>
    </v-col>
    <v-col md="4">
        <p class="text-end">Based on Project <a href="https://github.com/gdg-x/aura/" class="text-decoration-none text-blue-accent-3 ">Aura</a></p>
    </v-col>
   </v-row>
</v-container>
</template>

<script>
export default {
    name: 'Footer'
}
</script>
