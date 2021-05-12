"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const evm_chains_1 = require("evm-chains");
const chainsExtraData_1 = require("./chainsExtraData");
const mergeArrays = (arrayOne, arrayTwo) => {
    return arrayOne.map((item, i) => Object.assign({}, item, arrayTwo[i]));
};
function getAllChains() {
    let allChains;
    try {
        allChains = mergeArrays(evm_chains_1.getAllChains(), chainsExtraData_1.chainsExtraData);
    }
    catch (e) { }
    return allChains;
}
exports.getAllChains = getAllChains;
function getChain(chainId) {
    let chain;
    try {
        const chainUpstream = evm_chains_1.getChain(chainId);
        const chainExtended = chainsExtraData_1.chainsExtraData.find((x) => x.chainId === chainId);
        chain = Object.assign(Object.assign({}, chainUpstream), chainExtended);
    }
    catch (e) { }
    return chain;
}
exports.getChain = getChain;
function getChainByChainId(chainId) {
    return getChain(chainId);
}
exports.getChainByChainId = getChainByChainId;
function formatNetworkForAddEthereumChain(network) {
    let formattedNetwork = {
        chainId: `0x${network.chainId.toString(16)}`,
        chainName: network.name,
        nativeCurrency: network.nativeCurrency,
        rpcUrls: network.rpc,
        blockExplorerUrls: network.blockExplorerUrls
    };
    return formattedNetwork;
}
exports.formatNetworkForAddEthereumChain = formatNetworkForAddEthereumChain;
//# sourceMappingURL=utils.js.map