<template>
    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UButton  class="dark:bg-neutral-900 dark:hover:bg-neutral-800" color="white" label="Options" trailing-icon="i-heroicons-chevron-down-20-solid" />
    </UDropdown>
</template>

<script setup>
const items = [
    [{
        label: 'Account',
        avatar: {
            src: 'https://avatars.githubusercontent.com/u/739984?v=4'
        }
    }], [{
        label: 'Edit',
        icon: 'i-heroicons-pencil-square-20-solid',
        shortcuts: ['E'],
        click: () => {
            console.log('Edit')
        }
    }, {
        label: 'Make a copy',
        icon: 'i-heroicons-document-duplicate-20-solid',
        shortcuts: ['D'],
        disabled: true
    }], [{
        label: 'Archive',
        icon: 'i-heroicons-archive-box-20-solid'
    }, {
        label: 'Move',
        icon: 'i-heroicons-arrow-right-circle-20-solid'
    }], [{
        label: 'Delete',
        icon: 'i-heroicons-trash-20-solid',
        shortcuts: ['⌘', 'D']
    }]
]
</script>


