/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Mirav1mainnet,
  Mirav1mainnet_SwapEvent,
} from "generated";

Mirav1mainnet.SwapEvent.handler(async ({ event, context }) => {
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

  const entity: Mirav1mainnet_SwapEvent = {
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

  context.Mirav1mainnet_SwapEvent.set(entity);
}, { wildcard: true });
