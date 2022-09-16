import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Arbit,
  CaseApproved,
  CaseClosed,
  CaseEdited,
  CaseJudging,
  CaseOpened,
  CaseRejected
} from "../generated/Arbit/Arbit"
import { Case } from "../generated/schema"


export function handleCaseOpened(event: CaseOpened): void {
  let caseEx = new Case(event.params.caseId.toString().padStart(5, "0"));
  caseEx.party1 = event.params.party1;
  caseEx.party2 = event.params.party2;
  caseEx.judge = event.params.judge;
  caseEx.status = "opened";
  caseEx.decisionMaker = event.params.party1;
  caseEx.winner = new Address(0)
  caseEx.save();
}

export function handleCaseApproved(event: CaseApproved): void {

  let id = event.params.caseId.toString().padStart(5, "0");
  let caseEx = Case.load(id);
  if (caseEx == null) {
    return;
  }
  caseEx.decisionMaker = event.params.nextApprover;
  caseEx.save();

}

export function handleCaseClosed(event: CaseClosed): void {
  let id = event.params.caseId.toString().padStart(5, "0");
  let caseEx = Case.load(id);
  if (caseEx == null) {
    return;
  }
  caseEx.status = "closed";
  caseEx.winner = event.params.winner;
  caseEx.save();
}

export function handleCaseEdited(event: CaseEdited): void {
  let id = event.params.caseId.toString().padStart(5, "0");
  let caseEx = Case.load(id);
  if (caseEx == null) {
    return;
  }
  caseEx.judge = event.params.newJudge;
  if (event.params.editor == caseEx.party1) {
    caseEx.decisionMaker = caseEx.party2;
  }
  else {
    caseEx.decisionMaker = caseEx.party1;
  }
  caseEx.save();
}

export function handleCaseJudging(event: CaseJudging): void {
  let id = event.params.caseId.toString().padStart(5, "0");
  let caseEx = Case.load(id);
  if (caseEx == null) {
    return;
  }
  caseEx.status = "judging"
  caseEx.save();
}

export function handleCaseRejected(event: CaseRejected): void {
  let id = event.params.caseId.toString().padStart(5, "0");
  let caseEx = Case.load(id);
  if (caseEx == null) {
    return;
  }
  caseEx.status = "rejected"
  caseEx.save();

}