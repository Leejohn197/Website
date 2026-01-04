import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 网站部署的基础 URL（生产环境）
  site: 'https://jakarta-expo.com',

  // 输出模式：静态站点生成（SSG）
  output: 'static',

  // 构建配置
  build: {
    // 内联较小的样式表以减少请求
    inlineStylesheets: 'auto',
  },

  // 图像优化配置（Astro v5 内置）
  image: {
    // 支持的图片格式
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    // 响应式图片尺寸
    remotePatterns: [
      {
        protocol: 'https',
      },
    ],
  },

  // 国际化 (i18n) 路由配置
  i18n: {
    // 默认语言
    defaultLocale: 'en',

    // 支持的语言列表
    locales: ['en', 'id', 'zh'],

    // 路由策略
    routing: {
      // 前缀策略：所有语言都使用路径前缀（包括默认语言）
      prefixDefaultLocale: true,

      // 重定向到默认语言
      redirectToDefaultLocale: true,
    },
  },

  // 集成插件
  integrations: [
    // Tailwind CSS 集成
    tailwind({
      // 应用基础样式
      applyBaseStyles: false, // 我们在 global.css 中手动导入
    }),

    // Sitemap 生成插件
    sitemap({
      // 多语言站点地图
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          id: 'id-ID',
          zh: 'zh-CN',
        },
      },

      // 自定义过滤器（排除某些页面）
      filter: (page) => {
        // 排除草稿页面和测试页面
        return !page.includes('/draft/') && !page.includes('/test/');
      },

      // 自定义每个 URL 的配置
      serialize: (item) => {
        // 根据页面类型设置优先级
        if (item.url.includes('/events/')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/exhibitors/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/news/')) {
          item.priority = 0.7;
          item.changefreq = 'daily';
        } else if (item.url.endsWith('/')) {
          // 首页和主要页面
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }

        return item;
      },
    }),
  ],

  // Vite 配置（高级优化）
  vite: {
    // 开发服务器配置
    server: {
      port: 3000,
      host: true, // 允许局域网访问（移动端测试）
    },
  },

  // Markdown 配置
  markdown: {
    // 语法高亮主题
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});