// 团队数据管理
export const teamData = {
    introduction: "大家好，我们是来自大连理工大学开发区校区创中的腾讯组（腾讯高校创新俱乐部），我们主要专心于软件开发领域，参加过多个大学生开发竞赛，产出过一批优秀的作品，定期在大连理工大学开发区校区开展例会等等活动。我们致力于服务每一个有意向接触开发领域的同学，致力于营造大连理工大学的创新氛围，不管你是来自校内还是校外的朋友，欢迎浏览我们的工作，为我们提出宝贵的建议。",

    stats: {
        members: 11,
        awards: 6,
        techFields: 4
    },

    techStack: {
        "后端": ["Go", "Java", "C++", "Python"],
        "前端": ["Vue.js", "React"],
        "客户端": ["Flutter", "Swift", "React Native"],
        "大模型": ["大模型", "Agent"]
    },

    members: [
        {
            name: "吴政阳",
            nickname: "simonzywu",
            avatar: "/person/simon.png",
            github: "https://github.com/SimonWuZY",
            intro: "前端工程师，文档表格专精",
            skills: ["JavaScript", "React", "Flutter"]
        },
        {
            name: "张文洋",
            nickname: "Zhenqiiii",
            avatar: "/person/zhenqiiii.png",
            github: "https://github.com/zhenqiiii",
            intro: "阿巴阿巴阿巴",
            skills: ["Go", "Gin", "badminton", "vibe coding master"]
        },
        {
            name: "saber",
            nickname: "saber",
            avatar: "/person/saber.png",
            github: "https://github.com/Emisaber",
            intro: "AI劝退大师",
            skills: ["DL", "LLM", "MLLM", "Diffusion"]
        },
        {
            name: "OOO",
            nickname: "OOO",
            avatar: "/person/ooo.png",
            github: "https://github.com/lyydsheep",
            intro: "(O_v_O)",
            skills: ["Go", "Vue3", "Kubernetes", "LangChain"]
        },
        {
            name: "丁励治",
            nickname: "dinglz",
            avatar: "/person/dinglz.png",
            github: "https://github.com/dingdinglz",
            intro: "全栈工程师，vibe coding狂热布道",
            skills: ["Go", "Python", "Vue", "Swift", "全国到处飞(bushi)"]
        },
        {
            name: "许思琦",
            nickname: "seven",
            avatar: "/person/seven.png",
            github: "https://github.com/qqiiseven",
            intro: "计算机视觉科研低手",
            skills: ["ai", "cv"]
        },
        {
            name: "肖文涛",
            nickname: "℡傲雪&星火ぴ",
            avatar: "/person/xiao.jpg",
            github: "https://github.com/aoxuexinghuo",
            intro: "其实只会做宝可梦。",
            skills: ["vue", "python", "408"]
        },
        {
            name: "limpid",
            nickname: "limpid",
            avatar: "/person/limpid.png",
            github: "https://github.com/Limpid-8818",
            intro: "飞舞后端选手，LLM萌新",
            skills: ["Python", "FastAPI/Flask", "Kotlin"]
        },
        {
            name: "车沭遥",
            nickname: "Naloam",
            avatar: "/person/naloam.png",
            github: "https://github.com/Naloam",
            intro: "正在努力成为全栈",
            skills: ["vue", "C/C++", "Python"]
        },
        {
            name: "霍方淳",
            nickname: "pyke",
            avatar: "/person/pyke.png",
            github: "https://github.com/pykelysia",
            intro: "后端能工智人",
            skills: ["go", "gin", "python", "c++"]
        },
        {
            name: "刘睿琪",
            nickname: "AimMetal",
            avatar: "/person/aimmetal.png",
            github: "https://github.com/aimmetal-tech",
            intro: "喜欢和AI吵架Bot",
            skills: ["Python", "Flutter", "Go"]
        }
    ],

    awards: [
        "2024-2025年度杰出俱乐部",
        "2024-2025年度优秀俱乐部",
        "2023-2024年度优秀俱乐部、最佳技术氛围奖",
        "2025年大学生软件创新大赛国奖",
        "2025年中国高校计算机大赛-AIGC创新赛国奖",
        "2025年中国高校计算机大赛-智能交互创新赛省奖"
    ],

    gallery: [
        { src: '/env/qq.jpg', category: 'team', title: '团队合影', description: '腾讯组成员集体照' },
        { src: '/env/qq2.jpg', category: 'team', title: '团队活动', description: '团队日常活动时光' },
        { src: '/env/1.png', category: 'workspace', title: '工作环境', description: '现代化的开发工作空间' },
        { src: '/env/2.jpeg', category: 'workspace', title: '办公区域', description: '舒适的编程环境' },
        { src: '/env/3.jpg', category: 'workspace', title: '讨论区', description: '团队讨论和协作区域' },
        { src: '/env/4.jpg', category: 'workspace', title: '学习空间', description: '专注学习的安静环境' },
        { src: '/env/5.jpeg', category: 'team', title: '项目展示', description: '团队项目成果展示' },
        { src: '/env/6.jpeg', category: 'team', title: '技术分享', description: '内部技术交流分享会' },
        { src: '/env/7.jpg', category: 'workspace', title: '创新实验室', description: '前沿技术研发实验室' }
    ],

    joinUs: {
        title: "扫码加入2025年招新QQ群",
        qrCode: "/qq.png",
        benefits: [
            { icon: "💡", text: "参与前沿技术项目开发" },
            { icon: "🤝", text: "与优秀同伴共同成长" },
            { icon: "🏆", text: "获得大赛指导和参赛机会" },
            { icon: "🎯", text: "个人技能快速提升" }
        ]
    }
};
