import {
  Approval as ApprovalEvent,
  Transfer as TransferEvent
} from "../generated/MockToken/MockToken"
import { Approval, Transfer } from "../generated/schema"

const SPECIFIED_ADDRESS = "0x9e36748875B8E1300149135eB5Ba789df9aaFac8";

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  
  if (event.params.to.toHex().toLowerCase() != SPECIFIED_ADDRESS.toLowerCase()) {
    return;
  }

  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
