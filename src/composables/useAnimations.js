import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useAnimations() {
    const isLoaded = ref(false)

    onMounted(() => {
        gsap.registerPlugin(ScrollTrigger)
        isLoaded.value = true
    })

    onUnmounted(() => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    })

    // 淡入动画
    const fadeInUp = (elements, options = {}) => {
        if (!isLoaded.value) return

        const defaults = {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            stagger: 0.2
        }

        const config = { ...defaults, ...options }

        gsap.fromTo(elements,
            { y: config.y, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: config.duration,
                stagger: config.stagger,
                ease: config.ease,
                scrollTrigger: {
                    trigger: elements,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        )
    }

    // 缩放动画
    const scaleIn = (elements, options = {}) => {
        if (!isLoaded.value) return

        const defaults = {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
            stagger: 0.2
        }

        const config = { ...defaults, ...options }

        gsap.fromTo(elements,
            { scale: config.scale, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: config.duration,
                stagger: config.stagger,
                ease: config.ease,
                scrollTrigger: {
                    trigger: elements,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        )
    }

    // 数字计数动画
    const animateCounter = (element, target, options = {}) => {
        if (!isLoaded.value) return

        const defaults = {
            duration: 2,
            ease: 'power2.out'
        }

        const config = { ...defaults, ...options }
        const counter = { value: 0 }

        gsap.to(counter, {
            duration: config.duration,
            value: target,
            roundProps: 'value',
            ease: config.ease,
            onUpdate: () => {
                element.textContent = counter.value
            },
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none',
                once: true
            }
        })
    }

    // 悬停效果
    const addHoverEffect = (element, options = {}) => {
        if (!isLoaded.value) return

        const defaults = {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        }

        const config = { ...defaults, ...options }

        element.addEventListener('mouseenter', () => {
            gsap.to(element, {
                scale: config.scale,
                duration: config.duration,
                ease: config.ease
            })
        })

        element.addEventListener('mouseleave', () => {
            gsap.to(element, {
                scale: 1,
                duration: config.duration,
                ease: config.ease
            })
        })
    }

    // 浮动动画
    const floatingAnimation = (elements, options = {}) => {
        if (!isLoaded.value) return

        const defaults = {
            y: -20,
            duration: 2,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1,
            stagger: 0.3
        }

        const config = { ...defaults, ...options }

        gsap.to(elements, config)
    }

    return {
        isLoaded,
        fadeInUp,
        scaleIn,
        animateCounter,
        addHoverEffect,
        floatingAnimation
    }
}
