<template>
  <section id="gallery" ref="sectionRef" class="section-padding relative z-10">
    <div class="container-custom">
      <!-- Section Header -->
      <div ref="headerRef" class="text-center mb-16">
        <span class="inline-block px-4 py-2 bg-accent-500/20 text-accent-300 rounded-full text-sm font-medium mb-4">
          Gallery
        </span>
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          工作室风采
        </h2>
        <p class="text-lg text-white/70 max-w-2xl mx-auto">
          记录我们的美好时光
        </p>
      </div>
      
      <!-- Filter Buttons -->
      <div ref="filtersRef" class="flex justify-center mb-12">
        <div class="inline-flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1">
          <button 
            v-for="filter in filters" 
            :key="filter.key"
            @click="setActiveFilter(filter.key)"
            :class="[
              'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
              activeFilter === filter.key 
                ? 'bg-primary-500 text-white shadow-glow' 
                : 'text-white/70 hover:text-white hover:bg-white/10'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
      
      <!-- Gallery Grid -->
      <div ref="galleryGridRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(item, index) in filteredGallery" 
          :key="`${item.src}-${index}`"
          :data-category="item.category"
          class="gallery-item group cursor-pointer overflow-hidden rounded-2xl glass-card hover:shadow-glow transition-all duration-300"
          @click="openLightbox(index)"
        >
          <!-- Image Container -->
          <div class="relative aspect-video overflow-hidden">
            <!-- Image -->
            <img 
              :src="item.src" 
              :alt="item.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            >
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <!-- Zoom Icon -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                </div>
              </div>
              
              <!-- Info -->
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <h3 class="text-white font-medium mb-1">{{ item.title }}</h3>
                <p class="text-white/80 text-sm">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Empty State -->
      <div v-if="filteredGallery.length === 0" class="text-center py-16">
        <div class="text-6xl mb-4">📷</div>
        <p class="text-white/60 text-lg">暂无相关图片</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { useTeamData } from '../composables/useTeamData.js'
import { useAnimations } from '../composables/useAnimations.js'

const sectionRef = ref(null)
const headerRef = ref(null)
const filtersRef = ref(null)
const galleryGridRef = ref(null)

const { data } = useTeamData()
const { fadeInUp, scaleIn } = useAnimations()

const activeFilter = ref('all')
let lightboxInstance = null

const filters = [
  { key: 'all', label: '全部' },
  { key: 'workspace', label: '工作环境' },
  { key: 'team', label: '团队活动' }
]

const filteredGallery = computed(() => {
  if (activeFilter.value === 'all') {
    return data.gallery
  }
  return data.gallery.filter(item => item.category === activeFilter.value)
})

const setActiveFilter = async (filter) => {
  if (filter === activeFilter.value) return
  
  // 先隐藏当前图片
  const items = galleryGridRef.value?.querySelectorAll('.gallery-item')
  if (items) {
    const { gsap } = await import('gsap')
    gsap.to(items, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.05,
      onComplete: () => {
        // 更新过滤器
        activeFilter.value = filter
        
        // 重新初始化lightbox
        nextTick(() => {
          initLightbox()
          
          // 显示新图片
          const newItems = galleryGridRef.value?.querySelectorAll('.gallery-item')
          if (newItems) {
            gsap.fromTo(newItems, 
              { opacity: 0, y: 20 },
              { 
                opacity: 1, 
                y: 0, 
                duration: 0.5, 
                stagger: 0.1,
                ease: 'power2.out'
              }
            )
          }
        })
      }
    })
  } else {
    activeFilter.value = filter
    nextTick(() => {
      initLightbox()
    })
  }
}

const openLightbox = (index) => {
  console.log('打开lightbox，索引:', index)
  if (lightboxInstance) {
    lightboxInstance.openAt(index)
  } else {
    console.warn('Lightbox实例未初始化')
    // 降级方案：直接在新窗口打开图片
    const item = filteredGallery.value[index]
    if (item && item.src) {
      window.open(item.src, '_blank')
    }
  }
}

const initLightbox = async () => {
  try {
    // 销毁现有实例
    if (lightboxInstance) {
      lightboxInstance.destroy()
      lightboxInstance = null
    }
    
    // 动态导入GLightbox
    const { default: GLightbox } = await import('glightbox')
    
    // 创建画廊元素数组
    const elements = filteredGallery.value.map(item => ({
      href: item.src,
      type: 'image',
      title: item.title,
      description: item.description
    }))
    
    console.log('GLightbox 元素数组:', elements)
    
    // 初始化新的lightbox实例
    lightboxInstance = GLightbox({
      elements: elements,
      touchNavigation: true,
      loop: true,
      zoomable: true,
      draggable: true,
      openEffect: 'zoom',
      closeEffect: 'fade',
      slideEffect: 'slide',
      selector: null, // 我们不使用选择器，而是手动管理元素
      skin: 'clean',
      moreText: '查看更多',
      moreLength: 60,
      closeButton: true,
      touchFollowAxis: true,
      keyboardNavigation: true
    })
    
    console.log('✅ GLightbox 初始化成功，实例:', lightboxInstance)
  } catch (error) {
    console.error('❌ GLightbox 初始化失败:', error)
    lightboxInstance = null
  }
}

const initAnimations = () => {
  // 标题动画
  fadeInUp(headerRef.value, { duration: 1 })
  
  // 过滤器动画
  fadeInUp(filtersRef.value, { delay: 0.3 })
  
  // 画廊网格动画
  scaleIn(galleryGridRef.value.children, { 
    delay: 0.6, 
    stagger: 0.1,
    ease: 'power2.out'
  })
}

onMounted(async () => {
  setTimeout(initAnimations, 100)
  
  // 初始化lightbox
  await nextTick()
  initLightbox()
})
</script>

<style scoped>
.gallery-item {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.gallery-item:hover {
  border-color: rgba(255, 107, 107, 0.3);
  transform: translateY(-5px);
}

/* GLightbox 样式覆盖 */
:global(.glightbox-clean .gslide-description) {
  background: rgba(10, 14, 39, 0.9) !important;
  backdrop-filter: blur(20px) !important;
}

:global(.glightbox-clean .gdesc-inner) {
  color: white !important;
}

:global(.glightbox-clean .gslide-title) {
  color: #00A9FF !important;
  font-weight: 600 !important;
}
</style>
