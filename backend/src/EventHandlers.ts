/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Mirav1core,
  Mirav1core_TotalSupplyEvent,
  Mirav1core_AccessError,
  Mirav1core_SetSymbolEvent,
  Mirav1core_SetDecimalsEvent,
  Mirav1core_MintEvent,
  Mirav1core_OwnershipTransferred,
  Mirav1core_BurnEvent,
  Mirav1core_AmmError,
  Mirav1core_CreatePoolEvent,
  Mirav1core_SwapEvent,
  Mirav1core_InitializationError,
  Mirav1core_SetNameEvent,
  Mirav1core_ReentrancyError,
  Mirav1core_InputError,
  Mirav1core_OwnershipSet,
  Mirav1core_Transfer,
  Mirav1core_Mint,
  Mirav1core_Burn,
  Mirav1core_Call,
} from "generated";

Mirav1core.TotalSupplyEvent.handler(async ({ event, context }) => {
  const entity: Mirav1core_TotalSupplyEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.Mirav1core_TotalSupplyEvent.set(entity);
}, { wildcard: true });

Mirav1core.AccessError.handler(async ({ event, context }) => {
  const entity: Mirav1core_AccessError = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.Mirav1core_AccessError.set(entity);
}, { wildcard: true });

Mirav1core.SetSymbolEvent.handler(async ({ event, context }) => {
  const entity: Mirav1core_SetSymbolEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.Mirav1core_SetSymbolEvent.set(entity);
}, { wildcard: true });

Mirav1core.SetDecimalsEvent.handler(async ({ event, context }) => {
  const entity: Mirav1core_SetDecimalsEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.Mirav1core_SetDecimalsEvent.set(entity);
}, { wildcard: true });

Mirav1core.MintEvent.handler(async ({ event, context }) => {
  const entity: Mirav1core_MintEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.Mirav1core_MintEvent.set(entity);
}, { wildcard: true });

Mirav1core.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: Mirav1core_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.Mirav1core_OwnershipTransferred.set(entity);
}, { wildcard: true });

Mirav1core.BurnEvent.handler(async ({ event, context }) => {
  const entity: Mirav1core_BurnEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.Mirav1core_BurnEvent.set(entity);
}, { wildcard: true });

Mirav1core.AmmError.handler(async ({ event, context }) => {
  const entity: Mirav1core_AmmError = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.Mirav1core_AmmError.set(entity);
}, { wildcard: true });

Mirav1core.CreatePoolEvent.handler(async ({ event, context }) => {
  const entity: Mirav1core_CreatePoolEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.Mirav1core_CreatePoolEvent.set(entity);
}, { wildcard: true });

Mirav1core.SwapEvent.handler(async ({ event, context }) => {
  const is_buy = event.params.asset_1_in > 0;
  const is_sell = event.params.asset_1_out > 0

  let exchange_rate = BigInt(0)

  try {
    if (is_buy) {
      exchange_rate = (BigInt(event.params.asset_1_in) * BigInt(10n ** 18n)) / BigInt(event.params.asset_0_out)
    } else {
      exchange_rate = (BigInt(event.params.asset_1_out) * BigInt(10n ** 18n)) / BigInt(event.params.asset_0_in)
    }
  } catch (error) {
    console.log("error calculating exchange rate", error);
  }

  const entity: Mirav1core_SwapEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
    time: event.block.time,
    block_height: event.block.height,
    transaction_id: event.transaction.id,
    pool_id: `${event.params.pool_id[0].bits}_${event.params.pool_id[1].bits}_${event.params.pool_id[2]}`,
    recipient: event.params.recipient.payload.bits,
    asset_0_in: event.params.asset_0_in,
    asset_1_in: event.params.asset_1_in,
    asset_0_out: event.params.asset_0_out,
    asset_1_out: event.params.asset_1_out,
    exchange_rate: exchange_rate,
    is_buy: is_buy,
    is_sell: is_sell
  };

  context.Mirav1core_SwapEvent.set(entity);
}, { wildcard: true });

Mirav1core.InitializationError.handler(async ({ event, context }) => {
  const entity: Mirav1core_InitializationError = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.Mirav1core_InitializationError.set(entity);
}, { wildcard: true });

Mirav1core.SetNameEvent.handler(async ({ event, context }) => {
  const entity: Mirav1core_SetNameEvent = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.Mirav1core_SetNameEvent.set(entity);
}, { wildcard: true });

Mirav1core.ReentrancyError.handler(async ({ event, context }) => {
  const entity: Mirav1core_ReentrancyError = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.Mirav1core_ReentrancyError.set(entity);
}, { wildcard: true });

Mirav1core.InputError.handler(async ({ event, context }) => {
  const entity: Mirav1core_InputError = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.Mirav1core_InputError.set(entity);
}, { wildcard: true });

Mirav1core.OwnershipSet.handler(async ({ event, context }) => {
  const entity: Mirav1core_OwnershipSet = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.Mirav1core_OwnershipSet.set(entity);
}, { wildcard: true });

Mirav1core.Transfer.handler(async ({ event, context }) => {
  const entity: Mirav1core_Transfer = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.Mirav1core_Transfer.set(entity);
}, { wildcard: true });

Mirav1core.Mint.handler(async ({ event, context }) => {
  const entity: Mirav1core_Mint = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.Mirav1core_Mint.set(entity);
}, { wildcard: true });

Mirav1core.Burn.handler(async ({ event, context }) => {
  const entity: Mirav1core_Burn = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.Mirav1core_Burn.set(entity);
}, { wildcard: true });

Mirav1core.Call.handler(async ({ event, context }) => {
  const entity: Mirav1core_Call = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.Mirav1core_Call.set(entity);
}, { wildcard: true });
