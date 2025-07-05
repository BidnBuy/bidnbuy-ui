export type EscrowItemsReceivedProps = {
  orderId: string
  steps: any[]
  isConfirming: boolean
  isReporting: boolean
  onConfirmSatisfaction: () => void
  onReportProblem: () => void
}