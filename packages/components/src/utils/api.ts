import { constants, OctoHubHeaders } from '@octohub/core'
import { Platform } from '../libs/platform'

export function getDefaultOctoHubHeaders({
  appToken,
}: {
  appToken: string | undefined
}): OctoHubHeaders {
  const headers: OctoHubHeaders = {
    Authorization: appToken ? `bearer ${appToken}` : '',
    OCTOHUB_HOSTNAME: constants.HOSTNAME!,
    OCTOHUB_IS_BETA: constants.IS_BETA,
    OCTOHUB_IS_DEV: __DEV__,
    OCTOHUB_IS_LANDING: false,
    OCTOHUB_PLATFORM_IS_ELECTRON: Platform.isElectron,
    OCTOHUB_PLATFORM_OS: Platform.OS,
    OCTOHUB_PLATFORM_REAL_OS: Platform.realOS,
    OCTOHUB_VERSION: constants.APP_VERSION,
  }

  return headers
}
