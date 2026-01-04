import { defineCollection, z } from 'astro:content';

/**
 * 展览活动集合
 * 用于管理所有展览、会议、研讨会等活动信息
 */
const eventsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        // 基础信息
        title: z.string(),
        description: z.string(),
        excerpt: z.string().optional(), // 简短摘要（用于卡片展示）

        // 时间信息
        startDate: z.coerce.date(),
        endDate: z.coerce.date(),
        registrationDeadline: z.coerce.date().optional(),

        // 地点信息
        venue: z.string(),
        venueAddress: z.string().optional(),
        hall: z.string().optional(), // 展厅号
        booth: z.string().optional(), // 展位号

        // 分类和标签
        category: z.enum([
            'trade-show',      // 贸易展览
            'conference',      // 会议
            'workshop',        // 研讨会
            'seminar',         // 讲座
            'networking',      // 社交活动
            'product-launch',  // 产品发布
        ]),
        industry: z.array(z.string()), // 行业标签
        tags: z.array(z.string()),

        // 展示控制
        featured: z.boolean().default(false), // 是否为精选活动
        published: z.boolean().default(true), // 是否发布

        // 媒体资源
        image: image(),
        gallery: z.array(image()).optional(), // 图片画廊
        video: z.string().url().optional(),   // 视频链接

        // 参与信息
        capacity: z.number().optional(),      // 容纳人数
        registrationUrl: z.string().url().optional(),
        ticketPrice: z.object({
            currency: z.string().default('IDR'),
            amount: z.number(),
            earlyBird: z.number().optional(),
        }).optional(),

        // 组织者信息
        organizer: z.object({
            name: z.string(),
            logo: z.string().optional(),
            website: z.string().url().optional(),
            contact: z.string().email().optional(),
        }),

        // SEO
        seo: z.object({
            metaTitle: z.string().optional(),
            metaDescription: z.string().optional(),
            keywords: z.array(z.string()).optional(),
        }).optional(),
    }),
});

/**
 * 展商集合
 * 管理参展商信息
 */
const exhibitorsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        // 基础信息
        name: z.string(),
        description: z.string(),
        shortDescription: z.string().optional(),

        // 公司信息
        logo: image(),
        website: z.string().url(),
        email: z.string().email().optional(),
        phone: z.string().optional(),

        // 分类
        category: z.string(), // 行业分类
        subcategory: z.array(z.string()).optional(),
        country: z.string(),

        // 展位信息
        booth: z.string().optional(),
        hall: z.string().optional(),

        // 产品和服务
        products: z.array(z.string()).optional(),
        services: z.array(z.string()).optional(),

        // 媒体资源
        images: z.array(image()).optional(),
        brochure: z.string().url().optional(),

        // 社交媒体
        social: z.object({
            linkedin: z.string().url().optional(),
            facebook: z.string().url().optional(),
            instagram: z.string().url().optional(),
            twitter: z.string().url().optional(),
        }).optional(),

        // 展示控制
        featured: z.boolean().default(false),
        verified: z.boolean().default(false), // 认证展商

        // 参展活动
        events: z.array(z.string()).optional(), // 关联的活动 ID
    }),
});

/**
 * 新闻集合
 * 管理新闻文章和公告
 */
const newsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        // 基础信息
        title: z.string(),
        description: z.string(),
        excerpt: z.string(),

        // 发布信息
        publishDate: z.coerce.date(),
        updateDate: z.coerce.date().optional(),
        author: z.object({
            name: z.string(),
            avatar: z.string().optional(),
            bio: z.string().optional(),
        }),

        // 分类
        category: z.enum([
            'announcement',    // 公告
            'press-release',   // 新闻稿
            'industry-news',   // 行业新闻
            'event-recap',     // 活动回顾
            'interview',       // 访谈
            'guide',           // 指南
        ]),
        tags: z.array(z.string()),

        // 媒体
        featuredImage: image(),
        images: z.array(image()).optional(),

        // 展示控制
        featured: z.boolean().default(false),
        published: z.boolean().default(true),

        // 阅读时间（分钟）
        readingTime: z.number().optional(),

        // 相关内容
        relatedEvents: z.array(z.string()).optional(),
        relatedExhibitors: z.array(z.string()).optional(),
    }),
});

/**
 * 场馆信息集合
 * 管理展览场馆和雅加达旅游指南
 */
const venueCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        // 基础信息
        name: z.string(),
        description: z.string(),

        // 类型
        type: z.enum([
            'convention-center', // 会展中心
            'hotel',            // 酒店
            'restaurant',       // 餐厅
            'attraction',       // 景点
            'transportation',   // 交通
            'shopping',         // 购物
        ]),

        // 地址信息
        address: z.string(),
        district: z.string().optional(), // 区域
        coordinates: z.object({
            lat: z.number(),
            lng: z.number(),
        }),

        // 联系方式
        phone: z.string().optional(),
        email: z.string().email().optional(),
        website: z.string().url().optional(),

        // 媒体
        image: image(),
        gallery: z.array(image()).optional(),
        floorPlan: z.string().optional(), // 平面图 URL

        // 设施信息
        facilities: z.array(z.string()).optional(),
        capacity: z.number().optional(),

        // 营业时间
        openingHours: z.object({
            monday: z.string().optional(),
            tuesday: z.string().optional(),
            wednesday: z.string().optional(),
            thursday: z.string().optional(),
            friday: z.string().optional(),
            saturday: z.string().optional(),
            sunday: z.string().optional(),
        }).optional(),

        // 交通信息
        transportation: z.object({
            metro: z.string().optional(),
            bus: z.string().optional(),
            parking: z.boolean().optional(),
        }).optional(),

        // 推荐等级（1-5星）
        rating: z.number().min(1).max(5).optional(),

        // 展示控制
        featured: z.boolean().default(false),
    }),
});

/**
 * 导出所有集合
 */
export const collections = {
    'events': eventsCollection,
    'exhibitors': exhibitorsCollection,
    'news': newsCollection,
    'venue': venueCollection,
};
