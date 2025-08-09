<template>
  <div 
    ref="particlesContainer"
    id="particles-js" 
    class="fixed inset-0 z-0 bg-gradient-dark"
  >
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const particlesContainer = ref(null)
const canvasRef = ref(null)

let animationFrame = null
let particles = []
let mouse = { x: 0, y: 0 }
let canvas = null
let ctx = null

// 粒子类
class Particle {
  constructor(x, y) {
    this.x = x || Math.random() * canvas.width
    this.y = y || Math.random() * canvas.height
    this.vx = (Math.random() - 0.5) * 2
    this.vy = (Math.random() - 0.5) * 2
    this.size = Math.random() * 3 + 1
    this.opacity = Math.random() * 0.5 + 0.2
    this.life = 1
  }

  update() {
    this.x += this.vx
    this.y += this.vy

    // 边界检测
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1

    // 鼠标交互
    const dx = mouse.x - this.x
    const dy = mouse.y - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    if (distance < 100) {
      const force = (100 - distance) / 100
      this.vx += dx * force * 0.001
      this.vy += dy * force * 0.001
    }
  }

  draw() {
    ctx.save()
    ctx.globalAlpha = this.opacity
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }
}

// 初始化粒子系统
const initParticles = () => {
  if (!canvasRef.value) return

  canvas = canvasRef.value
  ctx = canvas.getContext('2d')
  
  // 设置canvas尺寸
  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  // 创建粒子
  particles = []
  const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000))
  
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }

  // 鼠标移动事件
  const handleMouseMove = (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }

  canvas.addEventListener('mousemove', handleMouseMove)
  
  // 动画循环
  const animate = () => {
    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 更新和绘制粒子
    particles.forEach(particle => {
      particle.update()
      particle.draw()
    })

    // 绘制连接线
    drawConnections()

    animationFrame = requestAnimationFrame(animate)
  }

  console.log('✅ 自定义粒子系统初始化成功')
  animate()
}

// 绘制粒子间的连接线
const drawConnections = () => {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 150) {
        const opacity = (150 - distance) / 150 * 0.3
        ctx.save()
        ctx.globalAlpha = opacity
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
        ctx.restore()
      }
    }
  }
}

onMounted(() => {
  setTimeout(initParticles, 100)
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
  window.removeEventListener('resize', () => {})
})
</script>

<style scoped>
#particles-js {
  background: radial-gradient(ellipse at center, #1a1a2e 0%, #0a0e27 100%);
}

canvas {
  pointer-events: none;
}
</style>