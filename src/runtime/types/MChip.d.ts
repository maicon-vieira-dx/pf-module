export interface IMChip {
    activeClass?: string
    appendAvatar?: string
    appendIcon?: string | (string | [string, number])[] | (new () => any)
    baseColor?: string
    border?: string | number | boolean
    closable?: boolean
    closeIcon?: string | (string | [string, number])[] | (new () => any)
    closeLabel?: string
    color?: string
    density?: 'default' | 'comfortable' | 'compact'
    disabled?: boolean
    draggable?: boolean
    elevation?: string | number
    exact?: boolean
    filter?: boolean
    filterIcon?: string | (string | [string, number])[] | (new () => any)
    href?: string
    label?: boolean
    link?: boolean
    modelValue?: boolean
    pill?: boolean
    prependAvatar?: string
    prependIcon?: string | (string | [string, number])[] | (new () => any)
    replace?: boolean
    ripple?: boolean | { class: string; keys: string[] }
    rounded?: string | number | boolean
    selectedClass?: string
    size?: string | number
    tag?: string | (new () => any)
    text?: string | number | boolean
    theme?: string
    tile?: boolean
    to?: string;
    value?: any
    variant?: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain'
  }