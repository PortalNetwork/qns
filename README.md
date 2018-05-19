# QNS
Implementations for registrars and local resolvers for the Qtum Name Service.

#### QNS contracts are deployed on QNS main net:

Registry:         [0x36304e77b835948e29fafb359b214ec5b26ff700](https://explorer.qtum.org/tx/a0bc7102fbbe528e63f9bfe30d61ac94f3466fb7f009b6ea90ca5154d412d6bd)

Hash Registrar:   [0x077b2f1b151256f2a216b5d0bd869e4f0457480f](https://explorer.qtum.org/tx/a665e3d14c7ef872f57249cbe2fe29a522c65ba53b863081f16e756da23a080e)

Public Resolver:  [0x75abf49f762a1e24dd0dad5304c2a4d3959b0199](https://explorer.qtum.org/tx/d5b0c4f1d0380992321383edd75d4554137ce5b3bd2a1b8407bd470d6aa1e774)

## QNSRegistry.sol
Implementation of the QNS Registry, the central contract used to look up resolvers and owners for domains.

## HashRegistrar.sol
Implementation of a registrar based on second-price blind auctions and funds held on deposit, with a renewal process that weights renewal costs according to the change in mean price of registering a domain. Largely untested!

## PublicResolver.sol
Simple resolver implementation that allows the owner of any domain to configure how its name should resolve. One deployment of this contract allows any number of people to use it, by setting it as their resolver in the registry.

## owner(bytes32 node) constant returns (address)
Returns the owner of the specified node.

## resolver(bytes32 node) constant returns (address)
Returns the resolver for the specified node.

## setOwner(bytes32 node, address owner)
Updates the owner of a node. Only the current owner may call this function.

## setSubnodeOwner(bytes32 node, bytes32 label, address owner)
Updates the owner of a subnode. For instance, the owner of "foo.com" may change the owner of "bar.foo.com" by calling `setSubnodeOwner(namehash("foo.com"), sha3("bar"), newowner)`. Only callable by the owner of `node`.

## setResolver(bytes32 node, address resolver)
Sets the resolver address for the specified node.