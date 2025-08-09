import { ref, computed } from 'vue'
import { teamData } from '../data/teamData.js'

export function useTeamData() {
    const data = ref(teamData)

    // 统计数据
    const stats = computed(() => data.value.stats)

    // 技术栈分类
    const techCategories = computed(() => Object.keys(data.value.techStack))

    // 按技能分组的成员
    const membersBySkills = computed(() => {
        const groups = {}
        data.value.members.forEach(member => {
            member.skills.forEach(skill => {
                if (!groups[skill]) groups[skill] = []
                groups[skill].push(member)
            })
        })
        return groups
    })

    // 按类别分组的画廊图片
    const galleryByCategory = computed(() => {
        const groups = { all: data.value.gallery }
        data.value.gallery.forEach(item => {
            if (!groups[item.category]) groups[item.category] = []
            groups[item.category].push(item)
        })
        return groups
    })

    return {
        data: data.value,
        stats,
        techCategories,
        membersBySkills,
        galleryByCategory
    }
}
