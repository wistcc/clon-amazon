<template>
    <div class="left-column">
        <div class="sidebar-img">
        <img
            v-for="(img, index) in images"
            :key="index"
            :src="img"
            :class="{ 'side-img': true, 'img-selected': index === selectedImageIndex }"
            @mouseenter="selectImage(index)" />
        </div>
        <img
        :src="selectedProductImg"
        class="img" />
    </div>
</template>

<script>
export default {
    name: 'left-column',
    props: {
        images: Array,
        selectedImageIndex: Number,
        selectedProductImg: String,
    },
    methods: {
        selectImage(index) {
            this.$emit('select-image', index)
        },
    }
}
</script>

<style>
.left-column {
    padding-right: 20px;
    display: flex;
}

.sidebar-img {
    display: flex;
    flex-direction: column;
    margin-right: 25px;
}

.side-img {
    height: 42px;
    width: 42px;
    margin-bottom: 10px;
    border: 1px solid #a2a6ac;
}

.img-selected {
    border: 1px solid rgb(231, 118, 0);
}
</style>
