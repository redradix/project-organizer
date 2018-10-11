import { hget } from 'reduken/hash'

export const isLoading = domain => state => hget(domain, 'loading', state)
