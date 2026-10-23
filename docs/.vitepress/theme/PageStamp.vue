<script setup lang="ts">
// The line at the top of every page saying how current it is. Hand-written
// pages show their `reviewed:` date (checked nightly against the code by
// scripts/check-drift.mjs); generated pages show the code commit they were
// built from. "History" lists every change to the page on GitHub.
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter, page } = useData()

const fmt = (d: string | Date) =>
  new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Singapore' })

const historyUrl = computed(() =>
  `https://github.com/krischan-acn/acn-docs/commits/main/docs/${page.value.relativePath}`)
</script>

<template>
  <div v-if="frontmatter.generated || frontmatter.reviewed" class="acn-stamp">
    <template v-if="frontmatter.generated">
      <span class="acn-stamp-label">Generated</span>
      from <code>{{ frontmatter.source }}</code>, committed {{ fmt(frontmatter.generated) }}
    </template>
    <template v-else>
      <span class="acn-stamp-label">Reviewed</span>
      {{ fmt(frontmatter.reviewed) }}
    </template>
    <span class="acn-stamp-sep">·</span>
    <a :href="historyUrl" target="_blank" rel="noopener">History</a>
  </div>
</template>
