import * as evmChainsExtended from '../src'

describe('evm-chains-extended', () => {
  it('aliases getChain and appends blockExplorerUrl data', () => {
    const chain = evmChainsExtended.getChain(1)
    expect(chain?.name).toEqual('Ethereum Mainnet')
    expect(chain?.blockExplorerUrls).toEqual(['https://etherscan.io'])
  })

  it('aliases getAllChains and appends extra datas', () => {
    const chains = evmChainsExtended.getAllChains()
    expect(chains?.[0].name).toEqual('Ethereum Mainnet')
    expect(chains?.[0].blockExplorerUrls).toEqual(['https://etherscan.io'])
  })
})
