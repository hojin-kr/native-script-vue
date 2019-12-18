<template>
    <page>
        <StackLayout>
            <RadDataForm :source="market" />
            <Button text="Create market" @tap="createMarket"
                style="background-color:  #03A9F4;" />
        </StackLayout>
    </page>
</template>

<script>
    import Vue from "nativescript-vue";
    import RadDataForm from "nativescript-ui-dataform/vue";
    Vue.use(RadDataForm);
    const http = require("http");

    export default {
        data() {
            return {
                market: {
                    name: "dummy market",
                    date: "2019-12-12",
                    description: "dummy market description #f32 #fefw",
                    imageSrc: "https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5db91539a421cf5315545c65/9caa5c4e07656fbfeb9cb941ac151d27/image.png",
                    favorite: "0"
                }
            };
        },
        methods: {
            data() {
                return {
                    busy: false
                };
            },
            async createMarket() {
                
                const res = await http.request({
                    url: "http://15.165.91.254:3000/create",
                    method: "POST",
                    content: {
                        name: "dummy market",
                        date: "2019-12-12",
                        description: "dummy market description #f32 #fefw",
                        imageSrc: "https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5db91539a421cf5315545c65/9caa5c4e07656fbfeb9cb941ac151d27/image.png",
                        favorite: "fff"
                    }
                });

                console.dir(res);
            }
        }
    };
</script>

<style>
</style>