import { TextDecoder, TextEncoder } from 'util'

global.TextEncoder = TextEncoder as never
global.TextDecoder = TextDecoder as never
