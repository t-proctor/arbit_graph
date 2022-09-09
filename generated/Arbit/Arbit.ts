// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CaseApproved extends ethereum.Event {
  get params(): CaseApproved__Params {
    return new CaseApproved__Params(this);
  }
}

export class CaseApproved__Params {
  _event: CaseApproved;

  constructor(event: CaseApproved) {
    this._event = event;
  }

  get caseId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get approver(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get nextApprover(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class CaseClosed extends ethereum.Event {
  get params(): CaseClosed__Params {
    return new CaseClosed__Params(this);
  }
}

export class CaseClosed__Params {
  _event: CaseClosed;

  constructor(event: CaseClosed) {
    this._event = event;
  }

  get caseId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get winner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get judge(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class CaseEdited extends ethereum.Event {
  get params(): CaseEdited__Params {
    return new CaseEdited__Params(this);
  }
}

export class CaseEdited__Params {
  _event: CaseEdited;

  constructor(event: CaseEdited) {
    this._event = event;
  }

  get caseId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get editor(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get newJudge(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class CaseJudging extends ethereum.Event {
  get params(): CaseJudging__Params {
    return new CaseJudging__Params(this);
  }
}

export class CaseJudging__Params {
  _event: CaseJudging;

  constructor(event: CaseJudging) {
    this._event = event;
  }

  get caseId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get judge(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class CaseOpened extends ethereum.Event {
  get params(): CaseOpened__Params {
    return new CaseOpened__Params(this);
  }
}

export class CaseOpened__Params {
  _event: CaseOpened;

  constructor(event: CaseOpened) {
    this._event = event;
  }

  get caseId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get party1(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get party2(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get judge(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class CaseRejected extends ethereum.Event {
  get params(): CaseRejected__Params {
    return new CaseRejected__Params(this);
  }
}

export class CaseRejected__Params {
  _event: CaseRejected;

  constructor(event: CaseRejected) {
    this._event = event;
  }

  get caseId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get rejecter(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Arbit__getCaseInfoResult {
  value0: Address;
  value1: Address;
  value2: Address;
  value3: Address;
  value4: i32;
  value5: i32;
  value6: boolean;
  value7: boolean;
  value8: boolean;

  constructor(
    value0: Address,
    value1: Address,
    value2: Address,
    value3: Address,
    value4: i32,
    value5: i32,
    value6: boolean,
    value7: boolean,
    value8: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set(
      "value4",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value4))
    );
    map.set(
      "value5",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value5))
    );
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    map.set("value7", ethereum.Value.fromBoolean(this.value7));
    map.set("value8", ethereum.Value.fromBoolean(this.value8));
    return map;
  }

  getParty1(): Address {
    return this.value0;
  }

  getParty2(): Address {
    return this.value1;
  }

  getJudge(): Address {
    return this.value2;
  }

  getWinner(): Address {
    return this.value3;
  }

  getValue4(): i32 {
    return this.value4;
  }

  getValue5(): i32 {
    return this.value5;
  }

  getApprovedByParty1(): boolean {
    return this.value6;
  }

  getApprovedByParty2(): boolean {
    return this.value7;
  }

  getApprovedByJudge(): boolean {
    return this.value8;
  }
}

export class Arbit extends ethereum.SmartContract {
  static bind(address: Address): Arbit {
    return new Arbit("Arbit", address);
  }

  getCaseInfo(caseId: BigInt): Arbit__getCaseInfoResult {
    let result = super.call(
      "getCaseInfo",
      "getCaseInfo(uint256):(address,address,address,address,uint8,uint8,bool,bool,bool)",
      [ethereum.Value.fromUnsignedBigInt(caseId)]
    );

    return new Arbit__getCaseInfoResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toI32(),
      result[5].toI32(),
      result[6].toBoolean(),
      result[7].toBoolean(),
      result[8].toBoolean()
    );
  }

  try_getCaseInfo(
    caseId: BigInt
  ): ethereum.CallResult<Arbit__getCaseInfoResult> {
    let result = super.tryCall(
      "getCaseInfo",
      "getCaseInfo(uint256):(address,address,address,address,uint8,uint8,bool,bool,bool)",
      [ethereum.Value.fromUnsignedBigInt(caseId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Arbit__getCaseInfoResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toI32(),
        value[5].toI32(),
        value[6].toBoolean(),
        value[7].toBoolean(),
        value[8].toBoolean()
      )
    );
  }

  openCase(party2: Address, judge: Address): BigInt {
    let result = super.call("openCase", "openCase(address,address):(uint256)", [
      ethereum.Value.fromAddress(party2),
      ethereum.Value.fromAddress(judge)
    ]);

    return result[0].toBigInt();
  }

  try_openCase(party2: Address, judge: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "openCase",
      "openCase(address,address):(uint256)",
      [ethereum.Value.fromAddress(party2), ethereum.Value.fromAddress(judge)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ApproveCaseCall extends ethereum.Call {
  get inputs(): ApproveCaseCall__Inputs {
    return new ApproveCaseCall__Inputs(this);
  }

  get outputs(): ApproveCaseCall__Outputs {
    return new ApproveCaseCall__Outputs(this);
  }
}

export class ApproveCaseCall__Inputs {
  _call: ApproveCaseCall;

  constructor(call: ApproveCaseCall) {
    this._call = call;
  }

  get caseId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ApproveCaseCall__Outputs {
  _call: ApproveCaseCall;

  constructor(call: ApproveCaseCall) {
    this._call = call;
  }
}

export class CloseCaseCall extends ethereum.Call {
  get inputs(): CloseCaseCall__Inputs {
    return new CloseCaseCall__Inputs(this);
  }

  get outputs(): CloseCaseCall__Outputs {
    return new CloseCaseCall__Outputs(this);
  }
}

export class CloseCaseCall__Inputs {
  _call: CloseCaseCall;

  constructor(call: CloseCaseCall) {
    this._call = call;
  }

  get caseId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get caseWinner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CloseCaseCall__Outputs {
  _call: CloseCaseCall;

  constructor(call: CloseCaseCall) {
    this._call = call;
  }
}

export class EditCaseCall extends ethereum.Call {
  get inputs(): EditCaseCall__Inputs {
    return new EditCaseCall__Inputs(this);
  }

  get outputs(): EditCaseCall__Outputs {
    return new EditCaseCall__Outputs(this);
  }
}

export class EditCaseCall__Inputs {
  _call: EditCaseCall;

  constructor(call: EditCaseCall) {
    this._call = call;
  }

  get caseId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newJudge(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class EditCaseCall__Outputs {
  _call: EditCaseCall;

  constructor(call: EditCaseCall) {
    this._call = call;
  }
}

export class JudgeCaseCall extends ethereum.Call {
  get inputs(): JudgeCaseCall__Inputs {
    return new JudgeCaseCall__Inputs(this);
  }

  get outputs(): JudgeCaseCall__Outputs {
    return new JudgeCaseCall__Outputs(this);
  }
}

export class JudgeCaseCall__Inputs {
  _call: JudgeCaseCall;

  constructor(call: JudgeCaseCall) {
    this._call = call;
  }

  get caseId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class JudgeCaseCall__Outputs {
  _call: JudgeCaseCall;

  constructor(call: JudgeCaseCall) {
    this._call = call;
  }
}

export class OpenCaseCall extends ethereum.Call {
  get inputs(): OpenCaseCall__Inputs {
    return new OpenCaseCall__Inputs(this);
  }

  get outputs(): OpenCaseCall__Outputs {
    return new OpenCaseCall__Outputs(this);
  }
}

export class OpenCaseCall__Inputs {
  _call: OpenCaseCall;

  constructor(call: OpenCaseCall) {
    this._call = call;
  }

  get party2(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get judge(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class OpenCaseCall__Outputs {
  _call: OpenCaseCall;

  constructor(call: OpenCaseCall) {
    this._call = call;
  }

  get caseId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RejectCaseCall extends ethereum.Call {
  get inputs(): RejectCaseCall__Inputs {
    return new RejectCaseCall__Inputs(this);
  }

  get outputs(): RejectCaseCall__Outputs {
    return new RejectCaseCall__Outputs(this);
  }
}

export class RejectCaseCall__Inputs {
  _call: RejectCaseCall;

  constructor(call: RejectCaseCall) {
    this._call = call;
  }

  get caseId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RejectCaseCall__Outputs {
  _call: RejectCaseCall;

  constructor(call: RejectCaseCall) {
    this._call = call;
  }
}
