<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <div v-else>{{ data }}</div>
  </div>
</template>

<script setup lang="ts">
import {useGetPetById} from "~/utils/petsService";

const { data, error } = await useGetPetById(1);
</script>
