
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1280px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                brand: {
                    gold: 'hsl(var(--brand-gold))',
                    navy: 'hsl(var(--brand-navy))',
                    blue: 'hsl(var(--brand-blue))',
                    cream: 'hsl(var(--brand-cream))',
                    charcoal: 'hsl(var(--brand-charcoal))',
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(8px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'fade-in-left': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-16px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                },
                'fade-in-right': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(16px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                },
                'scale-in': {
                    '0%': {
                        transform: 'scale(0.98)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'scale(1)',
                        opacity: '1'
                    }
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0)'
                    },
                    '50%': {
                        transform: 'translateY(-8px)'
                    }
                },
                'shimmer': {
                    '0%': {
                        backgroundPosition: '-500px 0'
                    },
                    '100%': {
                        backgroundPosition: '500px 0'
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.8s ease-out forwards',
                'fade-in-left': 'fade-in-left 0.8s ease-out forwards',
                'fade-in-right': 'fade-in-right 0.8s ease-out forwards',
                'scale-in': 'scale-in 0.6s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'shimmer': 'shimmer 2s infinite linear'
			},
            fontFamily: {
                'sans': ['Montserrat', 'sans-serif'],
                'serif': ['Playfair Display', 'serif'],
                'display': ['Playfair Display', 'serif'],
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, hsl(var(--brand-gold)) 0%, hsl(var(--brand-blue)) 100%)',
                'gradient-secondary': 'linear-gradient(to right, hsl(var(--brand-blue)) 0%, hsl(var(--brand-gold)) 100%)',
                'gradient-overlay': 'linear-gradient(180deg, rgba(33,43,54,0) 0%, rgba(33,43,54,0.8) 100%)'
            },
            boxShadow: {
                'elegant': '0px 8px 24px rgba(0, 0, 0, 0.04), 0px 2px 8px rgba(0, 0, 0, 0.02)',
                'hover': '0px 16px 48px rgba(0, 0, 0, 0.08), 0px 8px 24px rgba(0, 0, 0, 0.04)',
                'card': '0 4px 12px rgba(0, 0, 0, 0.03)'
            },
            maxWidth: {
                'content': '1280px'
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
