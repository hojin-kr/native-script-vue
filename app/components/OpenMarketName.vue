<template>
    <Page>
        <ActionBar title="Open">
            <ActionItem @tap="next" ios.systemIcon="0" ios.position="right" />
        </ActionBar>
        <StackLayout>
            <label text="Market name"
                style="font-size: 35px; padding:68px 16px 7px 16px;"
                fontWeight="bold" />
            <TextField v-model="textFieldValue" hint="Enter text..." />
        </StackLayout>
    </Page>
</template>

<script>
    import OpenMarketDescription from "./OpenMarketDescription";

    export default {
        data() {
            return {
                textFieldValue: ""
            };
        },
        methods: {
            next: function() {
                this.$navigateTo(OpenMarketDescription, {});
            }
        }
    };
</script>

<style>
</style>