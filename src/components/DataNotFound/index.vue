<template>
    <div class="d-flex align-items-center justify-content-center content-not-found">
        <div class="text-center">
            <img src="../../assets/img/illustrations/nodata.svg" alt="" />
            <h4 class="col-black-2 heading-24 mt-4 mb-2">{{ title }}</h4>
            <p class="body-14 col-black-2" v-if="subtitle && subtitle !== ''">
                <span v-html="subtitle"></span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
        }
    },
    name: 'DataNotFound'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/DataNotFound/index.scss';
</style>