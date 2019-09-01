<template>
    <div class="center-column">
        <div class="details">
            <h1>{{ product.name }}</h1>
        <hr/>

        <span
            v-if="selectedProduct.quantity > 50"
            class="stock in-stock">
            In Stock.
        </span>
        <span
            v-else-if="selectedProduct.quantity > 0 && selectedProduct.quantity < 50"
            class="stock low-stock">
            Hurry! Almost over.
        </span>
        <span
            v-else
            class="stock out-of-stock">
            Out of Stock.
        </span>

        <span>Model: <b>{{ selectedProduct.name }}</b></span>
        <div class="colors">
            <span
            v-for="model in product.models"
            :key="model.id"
            :title="model.name"
            :style="{ backgroundColor: model.color }"
            :class="{ 'color-box': true, 'color-selected': selectedProduct.id === model.id }"
            @click="selectProduct(model.id)"
            @mouseenter="setPreviewModel(model.id)"
            @mouseleave="clearPreviewModel">
            </span>
        </div>

        <ul class="details">
            <li
                v-for="(detail, index) in selectedProduct.details"
                :key="index">
            {{ detail }}
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'center-column',
    props: {
        product: Object,
        selectedProduct: Object,
    },
    methods: {
        selectProduct(modelId) {
            this.$emit('select-product', modelId)
        },
        setPreviewModel(modelId) {
            this.$emit('set-preview-model', modelId)
        },
        clearPreviewModel() {
            this.$emit('clear-preview-model')
        },
    },
}
</script>

<style>
.center-column {
    width: 760px;
    display: flex;
    flex-direction: column;
}

.stock {
    font-size: 25px;
    padding-bottom: 20px;
}

.in-stock {
    color: #007600;
}

.low-stock {
    color: #e77600;
}

.out-of-stock {
    color: #B12704;
}

.colors {
    display: flex
}

.color-box {
    margin: 10px 10px 0 0;
    border-radius: 3px;
    height: 36px;
    width: 36px;
}

.color-selected {
    height: 34px;
    width: 34px;
    border: 2px solid rgb(231, 118, 0);
}

.details {
    display: flex;
    flex-direction: column;
    padding-left: 15px;
}
</style>
