export interface IChainExtraData {
    blockExplorerUrls: string[];
    chainId: number;
}
export interface IChainDataExtended {
    name: string;
    chainId: number;
    shortName: string;
    chain: string;
    network: string;
    networkId: number;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    rpc: string[];
    faucets: string[];
    infoURL: string;
    blockExplorerUrls: string[];
}
export interface IAddEthereumChainParameter {
    chainId: string;
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    rpcUrls: string[];
    blockExplorerUrls?: string[];
    iconUrls?: string[];
}
//# sourceMappingURL=types.d.ts.map