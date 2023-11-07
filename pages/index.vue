<template>
    <div class="flex justify-center items-center min-h-screen">
      <div class="text-center">
        <client-only>
          <DropdownMenu />
          <DarkModeToggle />
        </client-only>
      </div>
    </div>
</template>

<script setup>
import DropdownMenu from '@/components/DropdownMenu.vue';
import DarkModeToggle from '@/components/DarkModeToggle.vue';
</script>