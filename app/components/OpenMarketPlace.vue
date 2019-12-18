<template>
    <Page>
        <ActionBar title="Open">
            <ActionItem @tap="next" ios.systemIcon="0" ios.position="right" />
        </ActionBar>
        <StackLayout>
            <label text="Place"
                style="font-size: 35px; padding:68px 16px 7px 16px;"
                fontWeight="bold" />
            <TextField v-model="textFieldValue" hint="Enter text..." />

            <StackLayout>
                <Button text="Show location" @tap="enableLocationServices"
                    :visibility="currentGeoLocation.latitude ? 'collapsed' : 'visible'" />
                <StackLayout
                    :visibility="currentGeoLocation.latitude ? 'visible' : 'collapsed'">
                    <Label
                        :text="'Latitude: ' + currentGeoLocation.latitude" />
                    <Label
                        :text="'Longitude: ' + currentGeoLocation.longitude" />
                    <Label
                        :text="'Altitude: ' + currentGeoLocation.altitude" />
                    <Label
                        :text="'Direction: ' + currentGeoLocation.direction" />
                </StackLayout>
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
    const geoLocation = require("nativescript-geolocation");

    import OpenMarketSeller from "./OpenMarketSeller";

    export default {
        data() {
            return {
                currentGeoLocation: {
                    latitude: null,
                    longitude: null,
                    altitude: null,
                    direction: null
                },

                textFieldValue: ""
            };
        },
        methods: {
            enableLocationServices: function() {
                geoLocation.isEnabled().then(enabled => {
                    if (!enabled) {
                        geoLocation
                            .enableLocationRequest()
                            .then(() => this.showLocation());
                    } else {
                        this.showLocation();
                    }
                });
            },
            showLocation: function() {
                geoLocation.watchLocation(
                    location => {
                        this.currentGeoLocation = location;
                    },
                    error => {
                        alert(error);
                    }, {
                        desiredAccuracy: 3,
                        updateDistance: 10,
                        minimumUpdateTime: 1000 * 1
                    }
                );
            },

            next: function() {
                this.$navigateTo(OpenMarketSeller, {});
            }
        }
    };
</script>

<style>
</style>