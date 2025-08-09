<script setup>
import ParticlesBackground from './components/ParticlesBackground.vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import TechStackSection from './components/TechStackSection.vue'
import MembersSection from './components/MembersSection.vue'
import AwardsSection from './components/AwardsSection.vue'
import GallerySection from './components/GallerySection.vue'
import JoinUsSection from './components/JoinUsSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div id="app" class="relative">
    <!-- Particles Background -->
    <ParticlesBackground />
    
    <!-- Header -->
    <AppHeader />
    
    <!-- Main Content -->
    <main class="relative z-10">
      <!-- Hero Section -->
      <HeroSection />
      
      <!-- About Section -->
      <AboutSection />
      
      <!-- Tech Stack Section -->
      <TechStackSection />
      
      <!-- Members Section -->
      <MembersSection />
      
      <!-- Awards Section -->
      <AwardsSection />
      
      <!-- Gallery Section -->
      <GallerySection />
      
      <!-- Join Us Section -->
      <JoinUsSection />
    </main>
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style>
/* 全局样式已在 style.css 中定义 */
</style>