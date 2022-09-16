import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CaseApproved,
  CaseClosed,
  CaseEdited,
  CaseJudging,
  CaseOpened,
  CaseRejected
} from "../generated/Arbit/Arbit"

export function createCaseApprovedEvent(
  caseId: BigInt,
  approver: Address,
  nextApprover: Address
): CaseApproved {
  let caseApprovedEvent = changetype<CaseApproved>(newMockEvent())

  caseApprovedEvent.parameters = new Array()

  caseApprovedEvent.parameters.push(
    new ethereum.EventParam("caseId", ethereum.Value.fromUnsignedBigInt(caseId))
  )
  caseApprovedEvent.parameters.push(
    new ethereum.EventParam("approver", ethereum.Value.fromAddress(approver))
  )
  caseApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "nextApprover",
      ethereum.Value.fromAddress(nextApprover)
    )
  )

  return caseApprovedEvent
}

export function createCaseClosedEvent(
  caseId: BigInt,
  winner: Address,
  caseRuling: string
): CaseClosed {
  let caseClosedEvent = changetype<CaseClosed>(newMockEvent())

  caseClosedEvent.parameters = new Array()

  caseClosedEvent.parameters.push(
    new ethereum.EventParam("caseId", ethereum.Value.fromUnsignedBigInt(caseId))
  )
  caseClosedEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  caseClosedEvent.parameters.push(
    new ethereum.EventParam("caseRuling", ethereum.Value.fromString(caseRuling))
  )

  return caseClosedEvent
}

export function createCaseEditedEvent(
  caseId: BigInt,
  editor: Address,
  newJudge: Address,
  description: string,
  tags: Array<string>
): CaseEdited {
  let caseEditedEvent = changetype<CaseEdited>(newMockEvent())

  caseEditedEvent.parameters = new Array()

  caseEditedEvent.parameters.push(
    new ethereum.EventParam("caseId", ethereum.Value.fromUnsignedBigInt(caseId))
  )
  caseEditedEvent.parameters.push(
    new ethereum.EventParam("editor", ethereum.Value.fromAddress(editor))
  )
  caseEditedEvent.parameters.push(
    new ethereum.EventParam("newJudge", ethereum.Value.fromAddress(newJudge))
  )
  caseEditedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  caseEditedEvent.parameters.push(
    new ethereum.EventParam("tags", ethereum.Value.fromStringArray(tags))
  )

  return caseEditedEvent
}

export function createCaseJudgingEvent(
  caseId: BigInt,
  judge: Address
): CaseJudging {
  let caseJudgingEvent = changetype<CaseJudging>(newMockEvent())

  caseJudgingEvent.parameters = new Array()

  caseJudgingEvent.parameters.push(
    new ethereum.EventParam("caseId", ethereum.Value.fromUnsignedBigInt(caseId))
  )
  caseJudgingEvent.parameters.push(
    new ethereum.EventParam("judge", ethereum.Value.fromAddress(judge))
  )

  return caseJudgingEvent
}

export function createCaseOpenedEvent(
  caseId: BigInt,
  party1: Address,
  party2: Address,
  judge: Address,
  description: string,
  tags: Array<string>
): CaseOpened {
  let caseOpenedEvent = changetype<CaseOpened>(newMockEvent())

  caseOpenedEvent.parameters = new Array()

  caseOpenedEvent.parameters.push(
    new ethereum.EventParam("caseId", ethereum.Value.fromUnsignedBigInt(caseId))
  )
  caseOpenedEvent.parameters.push(
    new ethereum.EventParam("party1", ethereum.Value.fromAddress(party1))
  )
  caseOpenedEvent.parameters.push(
    new ethereum.EventParam("party2", ethereum.Value.fromAddress(party2))
  )
  caseOpenedEvent.parameters.push(
    new ethereum.EventParam("judge", ethereum.Value.fromAddress(judge))
  )
  caseOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  caseOpenedEvent.parameters.push(
    new ethereum.EventParam("tags", ethereum.Value.fromStringArray(tags))
  )

  return caseOpenedEvent
}

export function createCaseRejectedEvent(
  caseId: BigInt,
  rejecter: Address
): CaseRejected {
  let caseRejectedEvent = changetype<CaseRejected>(newMockEvent())

  caseRejectedEvent.parameters = new Array()

  caseRejectedEvent.parameters.push(
    new ethereum.EventParam("caseId", ethereum.Value.fromUnsignedBigInt(caseId))
  )
  caseRejectedEvent.parameters.push(
    new ethereum.EventParam("rejecter", ethereum.Value.fromAddress(rejecter))
  )

  return caseRejectedEvent
}
