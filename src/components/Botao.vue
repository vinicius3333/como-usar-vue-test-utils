<template>
    <button :disabled="desativado" @click="acaoClique">
        <slot>
            {{ texto }}
        </slot>
    </button>
</template>

<script>
export default {
    props: {
        texto: {
            type: String
        },
        desativado: {
            type: Boolean
        }
    },
    methods: {
        acaoClique() {
            this.$emit('click');
        }
    }
}
</script>