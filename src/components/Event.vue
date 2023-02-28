<template>
<div>
    <div class="bg-grey-lighten-4 pa-8">
        <v-container>
            <div class="pa-5 pt-0">
                <div class="text-h4 font-weight-medium" style="font-size: 130%;">Our <span class="text-blue-accent-3"> Events</span></div>
                <p>Questions? Please contact <a href="mailto:connectwithaurapp@gmail.com" style="color: rgb(21, 101, 192); text-decoration: none;">connectwithaurapp@gmail.com</a></p>
            </div>
            <div class="pa-5">
                <h2 style="font-size: 180%;">Our <span class="text-blue-accent-3">Feature Event</span> & <span class="text-blue-accent-3"> Meetup</span></h2>
                <p>Events are listed in reverse chronological order by date.</p>
            </div>
            <v-row>
                <v-col md="3">
                    <v-card elevation="11" class="pa-4 rounded-lg"  @click="model = true">
                        <v-card-subtitle>Dec 20, 2021</v-card-subtitle>
                        <v-card-title class="py-0">Aura22</v-card-title>
                        <v-card-subtitle>Online</v-card-subtitle>
                        <p class="text-blue-accent-3 px-4">See More</p>
                    </v-card>
                </v-col>
                <v-col md="3">
                    <v-card elevation="11" class="pa-4 rounded-lg"  @click="model1 = true">
                        <v-card-subtitle>Dec 19, 2021</v-card-subtitle>
                        <v-card-title class="py-0">asdasda</v-card-title>
                        <v-card-subtitle>Online</v-card-subtitle>
                        <p class="text-blue-accent-3 px-4">See More</p>
                    </v-card>
                </v-col>
                <v-col md="3">
                    <v-card elevation="11" class="pa-4 rounded-lg"  @click="model2 = true">
                        <v-card-subtitle>Oct 23, 2021</v-card-subtitle>
                        <v-card-title class="py-0">DevFest 2021</v-card-title>
                        <v-card-subtitle>ssdfs</v-card-subtitle>
                        <p class="text-blue-accent-3 px-4">See More</p>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <!-- v-dailog -->
        <v-dialog v-model="model" width="800px">
            <v-card class="">
                <v-card-title>Aura22</v-card-title>
                <v-card-subtitle>2021-12-20</v-card-subtitle>
                <v-card-subtitle>online</v-card-subtitle>
                <v-card-subtitle>10:15 - 16:00</v-card-subtitle>
                <v-card-text class="px-4">Description</v-card-text>
                <v-card-text class="pt-0 px-4">
                    This is test event to describe nothing.
                </v-card-text>
                <div class="pa-4">
                    <v-btn color="primary" class="mx-3">Event Page</v-btn>
                    <v-btn color="blue-accent-3">Ragistestion Link</v-btn>
                    <v-btn color="red" class="mx-3">YouTube Live </v-btn>
                </div>
                <v-card-actions class="bg-grey-lighten-3 ">
                    <v-btn color="blue-accent-3 ms-auto" @click="model = false">Close </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="model1" width="800px">
            <v-card class="">
                <v-card-title>asdasda</v-card-title>
                <v-card-subtitle>2021-12-19</v-card-subtitle>
                <v-card-subtitle>09:19 - 21:16</v-card-subtitle>
                <v-card-text class="px-4">Description</v-card-text>

                <div class="pa-4">
                    <v-btn color="primary" class="mx-3">Event Page</v-btn>

                </div>
                <v-card-actions class="bg-grey-lighten-3 ">
                    <v-btn color="blue-accent-3 ms-auto" @click="model1 = false">Close </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="model2" width="800px">
            <v-card class="">
                <v-card-title>DevFest 2021</v-card-title>
                <v-card-subtitle>2021-10-23</v-card-subtitle>
                <v-card-subtitle>ssdfs</v-card-subtitle>
                <v-card-subtitle>00:30 - 14:30</v-card-subtitle>
                <v-card-text class="px-4">Description</v-card-text>
                <v-card-text class="pt-0 px-4">
                    Much of the web ecosystem focusing on fundamentals and innovating quickly to meet the ever-changing needs of users. To help our community build powerful and useful sites, we want to invite you to web.dev LIVE India, a four-day digital event to learn modern web techniques and to connect with other developers. While we are open to welcome everyone and a digital event means anyone can join, the content will be tailored to India/APAC region audience.
                </v-card-text>
                <div class="pa-4">
                    <v-btn color="primary" class="mx-3">Event Page</v-btn>
                    <v-btn color="blue-accent-3 mx-3">Ragistestion Link</v-btn>
                    <v-btn color="pink-accent-3">Meetup Page</v-btn>
                    <v-btn color="red" class="mx-3">YouTube Live </v-btn>
                </div>
                <v-card-actions class="bg-grey-lighten-3 ">
                    <v-btn color="blue-accent-3 ms-auto" @click="model2 = false">Close </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
    <v-container>

    </v-container>
</div>
</template>

<script>
export default {
    name: 'Event',
    data: () => ({
        model: false,
        model1: false,
        model2: false
    }),
    
    methods: {
        
    },
}
</script>
