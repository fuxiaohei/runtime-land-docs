<template>
    <div class="alert-message">
        <div class="container">
            <div class="warning custom-block">
                <p class="custom-block-title">Runtime.land is in ALPHA, and is to be considered unstable.</p>
                <p>We are working hard to make it better for a stable release. Please <a
                        href="https://github.com/fuxiaohei/runtime-land">report</a> any issues you find.</p>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.container {
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 64px;
    margin-bottom: 32px;
}

.custom-block-title {
    color: var(--vp-c-warning-1)
}
</style>