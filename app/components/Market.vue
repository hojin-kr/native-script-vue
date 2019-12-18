<template>
    <page>
        <StackLayout>
            <RadDataForm :source="market" />
            <Button text="update" @tap="updateMarket"
                style="background-color:  #03A9F4;" />
        </StackLayout>


    </page>

</template>

<script>
    import Vue from "nativescript-vue";
    import RadDataForm from "nativescript-ui-dataform/vue";
    Vue.use(RadDataForm);

    export default {
        props: ["market"],
        data() {
            return {};
        }
    };
</script>

<style>
</style>