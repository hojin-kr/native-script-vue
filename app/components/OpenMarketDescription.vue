<template>
    <Page>
        <ActionBar title="Open">
            <ActionItem @tap="next" ios.systemIcon="0" ios.position="right" />
        </ActionBar>
        <StackLayout>
            <label text="Description"
                style="font-size: 35px; padding:68px 16px 7px 16px;"
                fontWeight="bold" />
            <TextField v-model="textFieldValue" hint="Enter text..." />
        </StackLayout>
    </Page>
</template>

<script>
    import OpenMarketPlace from "./OpenMarketPlace";

    export default {
        data() {
            return {
                textFieldValue: ""
            };
        },
        methods: {
            next: function() {
                this.$navigateTo(OpenMarketPlace, {});
            }
        }
    };
</script>

<style>
</style>