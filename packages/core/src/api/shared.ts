import { OS, Platform } from '../types'

export interface OctoHubHeaders {
  Authorization: string
  OCTOHUB_HOSTNAME: string
  OCTOHUB_IS_BETA: boolean
  OCTOHUB_IS_DEV: boolean
  OCTOHUB_IS_LANDING: boolean
  OCTOHUB_PLATFORM_IS_ELECTRON: boolean
  OCTOHUB_PLATFORM_OS: Platform
  OCTOHUB_PLATFORM_REAL_OS: OS
  OCTOHUB_VERSION: string
}
