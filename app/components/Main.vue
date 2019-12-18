<template>
    <Page>
        <StackLayout>
            <TabView :selectedIndex="selectedIndex"
                @selectedIndexChange="indexChange">

                <!-- tab market start -->
                <TabViewItem title="market">
                    <StackLayout>
                        <label text="Market"
                            style="font-size: 35px; padding:68px 16px 7px 16px; background-color:"
                            fontWeight="bold" />
                        <SearchBar hint="input text here"
                            @clear="searchCancel" @submit="searchSubmit" />
                        <ListView for="item in market" @itemTap="onItemTap"
                            :key="marketRerenderKey" style="height:1250px">
                            <v-template>
                                <FlexboxLayout flexDirection="row">
                                    <!-- 각 리스트 안에서의 정렬 (html5 flex와 유사한 개념)-->
                                    <StackLayout orientation="horizontal">
                                        <Image :src="item.imageSrc"
                                            class="thumb img-circle" />
                                        <StackLayout>
                                            <Label :text="item.name" />
                                            <Label :text="item.date" />
                                            <Label :text="item.description" />
                                            <Label :text="item.imageSrc" />
                                            <Label :text="item.id" />
                                        </StackLayout>
                                    </StackLayout>
                                </FlexboxLayout>
                            </v-template>
                        </ListView>
                    </StackLayout>
                </TabViewItem>
                <!-- tab market end -->
                <!-- tab favorite start -->
                <TabViewItem title="favorite">
                    <StackLayout>
                        <label text="Favorite"
                            style="font-size: 35px; padding:68px 16px 7px 16px; background-color:"
                            fontWeight="bold" />
                        <ListView for="item in favorite" @itemTap="onItemTap"
                            style="height:1250px">
                            <v-template>
                                <FlexboxLayout flexDirection="row">
                                    <!-- 각 리스트 안에서의 정렬 (html5 flex와 유사한 개념)-->
                                    <StackLayout orientation="horizontal">
                                        <Image :src="item.imageSrc"
                                            class="thumb img-circle" />
                                        <StackLayout>
                                            <Label :text="item.name" />
                                            <Label :text="item.date" />
                                            <Label :text="item.description" />
                                            <Label :text="item.imageSrc" />
                                        </StackLayout>
                                    </StackLayout>
                                </FlexboxLayout>
                            </v-template>
                        </ListView>
                    </StackLayout>
                </TabViewItem>
                <!-- tab favorite end -->
                <!-- tab open market start -->
                <TabViewItem title="open">
                    <StackLayout>
                        <label text="Open"
                            style="font-size: 35px; padding:68px 16px 7px 16px;"
                            fontWeight="bold" />
                    </StackLayout>
                </TabViewItem>
                <!-- tab open market end -->
                <!-- tab more start -->
                <TabViewItem title="more">
                    <StackLayout>
                        <label text="more"
                            style="font-size: 35px; padding:68px 16px 7px 16px;"
                            fontWeight="bold" />
                        <ListView style="height:1250px">

                        </ListView>
                    </StackLayout>
                </TabViewItem>
            </TabView>
        </StackLayout>
    </Page>
</template>

<script>
    import OpenMarket from "./OpenMarket";
    import Market from "./Market";
    import OpenDate from "./OpenDate";

    const http = require("http");

    export default {
        methods: {
            onItemTap: function(args) {
                this.$navigateTo(Market, {
                    animate: true,
                    transition: {
                        name: "slideLeft",
                        duration: 250,
                        curve: "easeIn"
                    },
                    props: {
                        market: this.market[args.index]
                    }
                });
            },
            goOpenMarket: function() {
                if (this.check1 && this.check2) {
                    this.$navigateTo(OpenMarket, {
                        animate: true,
                        transition: {
                            name: "slideLeft",
                            duration: 250,
                            curve: "easeIn"
                        }
                    });
                } else {
                    alert("Accept need").then(() => {
                        console.log("Alert dialog closed.");
                    });
                }
            },
            indexChange: function(res) {
                if (res.value === 0) {
                    this.getMarket();
                    this.getFavorite();
                }
                if (res.value === 2) {
                    this.$navigateTo(OpenDate, {
                    });
                }
                            },
            async getMarket() {
                const res = await http.request({
                    url: "http://15.165.91.254:3000/market",
                    method: "GET"
                });
                this.market = JSON.parse(res.content);
            },
            async getFavorite() {
                const res = await http.request({
                    url: "http://15.165.91.254:3000/market/5",
                    method: "GET"
                });
                this.favorite = JSON.parse(res.content);
            }
        },
        created() {
          console.log("################");
          console.log("indexChage");
          console.log(this.$state.message);
},
        data() {
            return {
                check1: false,
                check2: false,
                marketRerenderKey: 0,
                market: [],
                favorite: []
            };
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>
