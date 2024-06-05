import { PlanID } from '@octohub/core'

export interface SubscribeFormProps {
  onSubscribe?: (planId: PlanID | undefined) => void
  planId: PlanID | undefined
}
