/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

	// 暗色模式策略
	darkMode: 'class',

	theme: {
		extend: {
			// 自定义颜色 - 雅加达商业中心主题
			colors: {
				// 主色调 - 深海蓝（体现东南亚商业中心的专业与信任）
				primary: {
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#0c4a6e',  // 主色 - 深海蓝
					600: '#0a3d5c',
					700: '#083149',
					800: '#062537',
					900: '#041924',
					950: '#020d12',
				},

				// 辅助色 - 商务金（代表繁荣与机遇）
				secondary: {
					50: '#fefce8',
					100: '#fef9c3',
					200: '#fef08a',
					300: '#fde047',
					400: '#facc15',
					500: '#d4a574',  // 商务金
					600: '#b8935f',
					700: '#9c7d4f',
					800: '#80673f',
					900: '#64512f',
					950: '#483b1f',
				},

				// 点缀色 - 印尼蜡染红褐色/赤陶色（Batik 文化元素）
				accent: {
					50: '#fef2f2',
					100: '#fee2e2',
					200: '#fecaca',
					300: '#fca5a5',
					400: '#f87171',
					500: '#a0522d',  // 赤陶色 (Sienna)
					600: '#8b4513',  // 马鞍棕 (Saddle Brown)
					700: '#6b3410',
					800: '#4a240b',
					900: '#2a1407',
					950: '#1a0c04',
				},

				// 中性色 - 温暖灰色系
				neutral: {
					50: '#fafaf9',
					100: '#f5f5f4',
					200: '#e7e5e4',
					300: '#d6d3d1',
					400: '#a8a29e',
					500: '#78716c',
					600: '#57534e',
					700: '#44403c',
					800: '#292524',
					900: '#1c1917',
					950: '#0c0a09',
				},

				// 功能色
				success: '#10b981',
				warning: '#f59e0b',
				error: '#ef4444',
				info: '#3b82f6',
			},

			// 字体家族
			fontFamily: {
				// 标题字体 - Montserrat（现代、专业、几何感强）
				heading: [
					'Montserrat',
					'Inter',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'sans-serif',
				],

				// 正文字体 - Inter/Lato（易读、清晰）
				sans: [
					'Inter',
					'Lato',
					'Noto Sans',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'sans-serif',
				],

				serif: ['Merriweather', 'Georgia', 'serif'],
				mono: ['JetBrains Mono', 'Fira Code', 'monospace'],

				// 印尼语和中文字体支持
				indonesian: ['Noto Sans', 'sans-serif'],
				chinese: ['Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
			},

			// 字体大小（移动端优先）
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1' }],
				'6xl': ['3.75rem', { lineHeight: '1' }],
				'7xl': ['4.5rem', { lineHeight: '1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }],
			},

			// 间距系统
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},

			// 容器最大宽度
			maxWidth: {
				'8xl': '88rem',
				'9xl': '96rem',
			},

			// 动画
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-out',
				'slide-down': 'slideDown 0.5s ease-out',
				'scale-in': 'scaleIn 0.3s ease-out',
				'bounce-slow': 'bounce 3s infinite',
			},

			// 关键帧
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				slideDown: {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				scaleIn: {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
			},

			// 阴影
			boxShadow: {
				'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
				'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			},

			// 边框半径
			borderRadius: {
				'4xl': '2rem',
			},

			// 背景图片
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'hero-pattern': "url('/images/hero-pattern.svg')",
			},

			// 屏幕断点（针对雅加达市场常见设备）
			screens: {
				'xs': '475px',
				'2xl': '1536px',
				'3xl': '1920px',
			},

			// 纵横比
			aspectRatio: {
				'4/3': '4 / 3',
				'21/9': '21 / 9',
			},

			// 过渡时间
			transitionDuration: {
				'400': '400ms',
				'600': '600ms',
			},

			// Z-index 层级
			zIndex: {
				'60': '60',
				'70': '70',
				'80': '80',
				'90': '90',
				'100': '100',
			},
		},
	},

	plugins: [
		// 自定义工具类插件
		function ({ addUtilities, addComponents, theme }) {
			// 自定义工具类
			const newUtilities = {
				'.text-shadow': {
					textShadow: '0 2px 4px rgba(0,0,0,0.10)',
				},
				'.text-shadow-lg': {
					textShadow: '0 15px 30px rgba(0,0,0,0.15)',
				},
				'.safe-top': {
					paddingTop: 'env(safe-area-inset-top)',
				},
				'.safe-bottom': {
					paddingBottom: 'env(safe-area-inset-bottom)',
				},

				// 印尼蜡染 (Batik) 纹理背景 - 标准版
				'.bg-batik': {
					backgroundImage: `
						linear-gradient(45deg, rgba(160, 82, 45, 0.03) 25%, transparent 25%),
						linear-gradient(-45deg, rgba(160, 82, 45, 0.03) 25%, transparent 25%),
						linear-gradient(45deg, transparent 75%, rgba(160, 82, 45, 0.03) 75%),
						linear-gradient(-45deg, transparent 75%, rgba(160, 82, 45, 0.03) 75%),
						radial-gradient(circle at 50% 50%, rgba(212, 165, 116, 0.02) 2px, transparent 2px),
						radial-gradient(circle at 25% 75%, rgba(12, 74, 110, 0.02) 1px, transparent 1px)
					`,
					backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px, 20px 20px, 30px 30px',
					backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px, 0 0, 0 0',
				},

				// 印尼蜡染 (Batik) 纹理背景 - 超淡版（更适合文字阅读）
				'.bg-batik-subtle': {
					backgroundImage: `
						linear-gradient(30deg, rgba(160, 82, 45, 0.015) 12%, transparent 12.5%, transparent 87%, rgba(160, 82, 45, 0.015) 87.5%, rgba(160, 82, 45, 0.015)),
						linear-gradient(150deg, rgba(160, 82, 45, 0.015) 12%, transparent 12.5%, transparent 87%, rgba(160, 82, 45, 0.015) 87.5%, rgba(160, 82, 45, 0.015)),
						linear-gradient(30deg, rgba(160, 82, 45, 0.015) 12%, transparent 12.5%, transparent 87%, rgba(160, 82, 45, 0.015) 87.5%, rgba(160, 82, 45, 0.015)),
						linear-gradient(150deg, rgba(160, 82, 45, 0.015) 12%, transparent 12.5%, transparent 87%, rgba(160, 82, 45, 0.015) 87.5%, rgba(160, 82, 45, 0.015)),
						radial-gradient(circle at 50% 50%, rgba(212, 165, 116, 0.01) 1px, transparent 1px),
						linear-gradient(90deg, rgba(12, 74, 110, 0.008) 1px, transparent 1px),
						linear-gradient(rgba(12, 74, 110, 0.008) 1px, transparent 1px)
					`,
					backgroundSize: '80px 140px, 80px 140px, 80px 140px, 80px 140px, 40px 40px, 60px 60px, 60px 60px',
					backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 0 0, 0 0',
				},

				// Batik 装饰线条（用于分隔区域）
				'.border-batik': {
					borderImage: `
						repeating-linear-gradient(
							45deg,
							rgba(160, 82, 45, 0.3),
							rgba(160, 82, 45, 0.3) 10px,
							rgba(212, 165, 116, 0.3) 10px,
							rgba(212, 165, 116, 0.3) 20px
						) 1
					`,
				},
			};

			// 自定义组件类
			const newComponents = {
				'.btn': {
					padding: theme('spacing.3') + ' ' + theme('spacing.6'),
					borderRadius: theme('borderRadius.lg'),
					fontWeight: theme('fontWeight.semibold'),
					transition: 'all 0.3s ease',
					'&:hover': {
						transform: 'translateY(-2px)',
						boxShadow: theme('boxShadow.lg'),
					},
				},
				'.btn-primary': {
					backgroundColor: theme('colors.primary.500'),
					color: theme('colors.white'),
					'&:hover': {
						backgroundColor: theme('colors.primary.600'),
					},
				},
				'.btn-secondary': {
					backgroundColor: theme('colors.secondary.500'),
					color: theme('colors.neutral.900'),
					'&:hover': {
						backgroundColor: theme('colors.secondary.600'),
					},
				},
				'.card': {
					backgroundColor: theme('colors.white'),
					borderRadius: theme('borderRadius.xl'),
					boxShadow: theme('boxShadow.card'),
					padding: theme('spacing.6'),
					transition: 'all 0.3s ease',
					'&:hover': {
						boxShadow: theme('boxShadow.card-hover'),
					},
				},
				'.container-custom': {
					maxWidth: '1280px',
					marginLeft: 'auto',
					marginRight: 'auto',
					paddingLeft: theme('spacing.4'),
					paddingRight: theme('spacing.4'),
					'@screen md': {
						paddingLeft: theme('spacing.6'),
						paddingRight: theme('spacing.6'),
					},
					'@screen lg': {
						paddingLeft: theme('spacing.8'),
						paddingRight: theme('spacing.8'),
					},
				},
			};

			addUtilities(newUtilities);
			addComponents(newComponents);
		},
	],
};