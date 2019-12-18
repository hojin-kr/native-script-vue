<template>
    <Page>
        <ActionBar title="Open">
            <ActionItem @tap="next" ios.systemIcon="0" ios.position="right" />
        </ActionBar>
        <ScrollView>
            <StackLayout>
                <label text="Seller"
                    style="font-size: 35px; padding:68px 16px 7px 16px;"
                    fontWeight="bold" />
                <label text="Q1"
                    style="font-size: 30px; padding:68px 16px 7px 16px;"
                    fontWeight="bold" />
                <ListPicker :items="listPickerCountries"
                    v-model="selectedListPickerIndex" style="margin:0 10%" />
                <label text="Q2"
                    style="font-size: 30px; padding:68px 16px 7px 16px;"
                    fontWeight="bold" />
                <ListPicker :items="listPickerCountries"
                    v-model="selectedListPickerIndex" style="margin:0 10%" />
                <label text="Qn"
                    style="font-size: 30px; padding:68px 16px 7px 16px;"
                    fontWeight="bold" />
                <ListPicker :items="listPickerCountries"
                    v-model="selectedListPickerIndex" style="margin:0 10%" />
                <label text="Qn"
                    style="font-size: 30px; padding:68px 16px 7px 16px;"
                    fontWeight="bold" />
                <ListPicker :items="listPickerCountries"
                    v-model="selectedListPickerIndex" style="margin:0 10%" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import OpenMarketOption from "./OpenMarketOption";

    export default {
        data() {
            return {
                listPickerCountries: [
                    "Australia",
                    "Belgium",
                    "Bulgaria",
                    "Canada",
                    "Switzerland",
                    "China",
                    "Czech Republic",
                    "Germany",
                    "Spain",
                    "Ethiopia",
                    "Croatia",
                    "Hungary",
                    "Italy",
                    "Jamaica",
                    "Romania",
                    "Russia",
                    "United States"
                ],
                selectedListPickerIndex: 0
            };
        },
        methods: {
            next: function() {
                this.$navigateTo(OpenMarketOption, {});
            }
        }
    };
</script>

<style>
</style>