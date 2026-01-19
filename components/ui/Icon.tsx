'use client'

import {
  Heart,
  CheckCircle2,
  Droplets,
  Thermometer,
  Wind,
  Pill,
  UtensilsCrossed,
  Smile,
  Shield,
  Activity,
  Brain,
  AirVent,
  Cloud,
  AlertTriangle,
  TrendingUp,
  BookOpen,
  ArrowRight,
  Stethoscope,
  Info,
  FlaskConical,
  Verified,
  Mail,
  Rocket,
  Flag,
  HelpCircle,
  Sparkles,
  Fingerprint,
  HeartPulse,
  ClipboardCheck,
  Radio,
  PlayCircle,
  Menu,
  X,
  Search,
  BarChart3,
  Settings,
  Moon,
  Waves,
  Bell,
  CloudSun,
  Droplet,
  LayoutGrid,
  Clock,
  Flower,
  Lightbulb,
} from 'lucide-react'

interface IconProps {
  name: string
  size?: number | string
  className?: string
  style?: React.CSSProperties
}

const iconMap: Record<string, React.ComponentType<any>> = {
  // Health & Medical
  'ecg_heart': Heart,
  'check_circle': CheckCircle2,
  'opacity': Droplets,
  'device_thermostat': Thermometer,
  'air': Wind,
  'medication': Pill,
  'restaurant': UtensilsCrossed,
  'sentiment_satisfied': Smile,
  'security': Shield,
  'vital_signs': Activity,
  'psychology': Brain,
  'pulmonology': Activity,
  'lungs': Activity,
  'medical_services': Stethoscope,
  'assignment_turned_in': ClipboardCheck,
  'graphic_eq': Radio,
  'trending_up': TrendingUp,
  'favorite': Heart,
  'monitor_heart': HeartPulse,
  
  // UI & Actions
  'arrow_forward': ArrowRight,
  'play_circle': PlayCircle,
  'menu': Menu,
  'close': X,
  'help': HelpCircle,
  'library_books': BookOpen,
  'cloud': Cloud,
  'warning': AlertTriangle,
  'auto_awesome': Sparkles,
  'fingerprint': Fingerprint,
  'cardiology': HeartPulse,
  'info': Info,
  'science': FlaskConical,
  'verified_user': Verified,
  'mark_email_unread': Mail,
  'rocket_launch': Rocket,
  'flag': Flag,
  'bedtime': Moon,
  'waves': Waves,
  'notifications_active': Bell,
  'query_stats': BarChart3,
  'medication_liquid': Pill,
  'track_changes': Settings,
  'spa': Sparkles,
  'monitoring': TrendingUp,
  'scatter_plot': BarChart3,
  'devices_other': Settings,
  'format_quote': HelpCircle,
  'link_off': Activity,
  'unlink': Activity,
  'disconnected': Activity,
  'layout_grid': LayoutGrid,
  'grid': LayoutGrid,
  'apps': LayoutGrid,
  'clock': Clock,
  'timer': Clock,
  'reactive': Clock,
  'keyboard_arrow_down': ArrowRight,
  'hub': Settings,
  'check': CheckCircle2,
  'partly_cloudy_day': CloudSun,
  'directions_run': Activity,
  'water_drop': Droplet,
  'pill': Pill,
  'flower': Flower,
  'pollen': Flower,
  'lightbulb': Lightbulb,
  'insight': Lightbulb,
}

export default function Icon({ name, size = 24, className = '', style = {} }: IconProps) {
  const IconComponent = iconMap[name] || HelpCircle
  const sizeValue = typeof size === 'number' ? size : parseInt(size.toString().replace('px', '')) || 24
  
  return (
    <IconComponent
      size={sizeValue}
      className={className}
      style={style}
      strokeWidth={2}
    />
  )
}

