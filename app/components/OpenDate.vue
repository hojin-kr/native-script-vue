<template>
    <Page>
        <ActionBar title="Open">
            <ActionItem @tap="next" ios.systemIcon="0" ios.position="right" />
        </ActionBar>
        <ScrollView>
        <StackLayout>
            <label text="Date"
                style="font-size: 35px; padding:68px 16px 7px 16px;"
                fontWeight="bold" />
            <DatePicker :year="currentYear" :month="currentMonth"
                :day="currentDay" minDate="1970-01-01" maxDate="2100-12-31"
                style="margin:0 10%" />
            <label text="To"
                style="font-size: 35px; padding:68px 16px 7px 16px;"
                fontWeight="bold" />
            <DatePicker :year="currentYear" :month="currentMonth"
                :day="currentDay" minDate="1970-01-01" maxDate="2100-12-31"
                style="margin:0 10%" />
        </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import OpenMarketName from "./OpenMarketName";

    export default {
        data() {
            return {
                currentDay: new Date().getUTCDate(),
                currentMonth: new Date().getUTCMonth() + 1,
                currentYear: new Date().getUTCFullYear()
            };
        },
        methods: {
            next: function() {
                this.$navigateTo(OpenMarketName, {});
            }
        }
    };
</script>

<style>
</style>