import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { CaseApproved } from "../generated/schema"
import { CaseApproved as CaseApprovedEvent } from "../generated/Arbit/Arbit"
import { handleCaseApproved } from "../src/arbit"
import { createCaseApprovedEvent } from "./arbit-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let caseId = BigInt.fromI32(234)
    let approver = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let nextApprover = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newCaseApprovedEvent = createCaseApprovedEvent(
      caseId,
      approver,
      nextApprover
    )
    handleCaseApproved(newCaseApprovedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CaseApproved created and stored", () => {
    assert.entityCount("CaseApproved", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CaseApproved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "caseId",
      "234"
    )
    assert.fieldEquals(
      "CaseApproved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "approver",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CaseApproved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nextApprover",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
