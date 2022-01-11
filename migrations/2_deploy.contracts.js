const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function(deployer) {
  deployer.deploy(ERC721PresetMinterPauserAutoId, "Blockdaemon University Member","BDU", "https://my-json-server.typicode.com/robbiekruszynski/bdu_db/tokens/");
};