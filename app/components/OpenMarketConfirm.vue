<template>
    <Page>
        <ActionBar title="Open">
            <ActionItem @tap="next" ios.systemIcon="0" ios.position="right" />
        </ActionBar>
        <StackLayout>
            <label text="Confirm"
                style="font-size: 35px; padding:68px 16px 7px 16px;"
                fontWeight="bold" />
            <RadDataForm :source="market" />
        </StackLayout>
    </Page>
</template>

<script>
    import Vue from "nativescript-vue";
    import RadDataForm from "nativescript-ui-dataform/vue";
    Vue.use(RadDataForm);

    import Main from "./Main";

    export default {
        data() {
            return {
                market: {
                    date: "Ed Sheeran",
                    marketName: "X",
                    marketDescription: "2017",
                    marketOption: true
                }
            };
        },
        methods: {
            next: function() {
                this.$navigateTo(Main, {});
            }
        }
    };
</script>

<style>
</style>