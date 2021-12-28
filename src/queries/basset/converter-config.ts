import { LCDClient } from '@terra-money/terra.js';
import { AddressProvider, COLLATERAL_DENOMS } from '../../address-provider';

interface Option {
  lcd: LCDClient;
  collateral: COLLATERAL_DENOMS;
}

interface ConfigResponse {
  owner: string;
  wormhole_token_address: string;
  anchor_token_address: string;
}

export const querybAssetConverterConfig =
  ({ lcd, collateral }: Option) =>
  async (addressProvider: AddressProvider): Promise<ConfigResponse> => {
    const bAssetContractAddress = addressProvider.bAssetConverter(collateral);
    return lcd.wasm.contractQuery(bAssetContractAddress, {
      config: {},
    });
  };
