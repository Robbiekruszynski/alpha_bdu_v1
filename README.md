contract addy = 0x4621F748c0D4AB805fdAc54b194571013E2032Ba

truffle(rinkeby)> nft = await ERC721PresetMinterPauserAutoId.deployed()
truffle(rinkeby)> await nft.mint ("addy")
