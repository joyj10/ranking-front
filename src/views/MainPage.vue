<template>
    <div>
        <main-header></main-header>
        <banner-text></banner-text>
        <item-list></item-list>
        <main-text></main-text>
    </div>
</template>

<script>
    import mainHeader from "../components/MainHeader";
    import mainText from "../components/MainText";
    import bannerText from "../components/BannerText";
    import itemList from "../components/itemList";
    export default {
        name: "MainPage",
        components:  {itemList, mainHeader,bannerText, mainText}
    }
</script>

<style scoped>

</style>