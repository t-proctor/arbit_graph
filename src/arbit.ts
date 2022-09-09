import {
  CaseApproved as CaseApprovedEvent,
  CaseClosed as CaseClosedEvent,
  CaseEdited as CaseEditedEvent,
  CaseJudging as CaseJudgingEvent,
  CaseOpened as CaseOpenedEvent,
  CaseRejected as CaseRejectedEvent
} from "../generated/Arbit/Arbit"
import {
  CaseApproved,
  CaseClosed,
  CaseEdited,
  CaseJudging,
  CaseOpened,
  CaseRejected
} from "../generated/schema"

export function handleCaseApproved(event: CaseApprovedEvent): void {
  let entity = new CaseApproved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.caseId = event.params.caseId
  entity.approver = event.params.approver
  entity.nextApprover = event.params.nextApprover
  entity.save()
}

export function handleCaseClosed(event: CaseClosedEvent): void {
  let entity = new CaseClosed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.caseId = event.params.caseId
  entity.winner = event.params.winner
  entity.judge = event.params.judge
  entity.save()
}

export function handleCaseEdited(event: CaseEditedEvent): void {
  let entity = new CaseEdited(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.caseId = event.params.caseId
  entity.editor = event.params.editor
  entity.newJudge = event.params.newJudge
  entity.save()
}

export function handleCaseJudging(event: CaseJudgingEvent): void {
  let entity = new CaseJudging(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.caseId = event.params.caseId
  entity.judge = event.params.judge
  entity.save()
}

export function handleCaseOpened(event: CaseOpenedEvent): void {
  let entity = new CaseOpened(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.caseId = event.params.caseId
  entity.party1 = event.params.party1
  entity.party2 = event.params.party2
  entity.judge = event.params.judge
  entity.save()
}

export function handleCaseRejected(event: CaseRejectedEvent): void {
  let entity = new CaseRejected(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.caseId = event.params.caseId
  entity.rejecter = event.params.rejecter
  entity.save()
}
