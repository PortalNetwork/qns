const QNSRegistry = artifacts.require("./QNSRegistry.sol");
const QNSRegistrar = artifacts.require('./QNSRegistrar.sol');
const QNSResolver = artifacts.require('./QNSResolver.sol');

const web3 = new (require('web3'))();
const namehash = require('eth-ens-namehash');

const QTUM = 'qtum';

module.exports = async (deployer) => {
  // deploy registry
  let QNSResgirty = await deployer.deploy(QNSRegistry);
  // deploy registrar
  let QNSRegistrar = await deployer.deploy(QNSRegistrar, QNSRegistry.address, namehash.hash(QTUM));
  // deploy resolver
  let QNSResolver = await deployer.deploy(QNSResolver, QNSRegistry.address);
  QNSRegistry.at(QNSRegistry.address).setSubnodeOwner('0x0', web3.sha3(QTUM), QNSRegistrar.address);
};
