//Blockchain lightning project
//Small Project implementing Blockchain with 3 blocks


const lightningHash = (data) =>
{
  return data + '*';
}

class Block
{
constructor(data, hash, lastHash)
{
  this.data = data;
  this.hash = hash;
  this.lastHash = lastHash;
}
}

class Blockchain
{
  constructor()
  { //genesis block - first block to initiate the blockchain linked network
    const genesis = new Block('genesis_data','genesis_hash','genesis_lastHash');

    this.chain = [genesis];
  }

  addBlock(data)
  {
    const lastHash = this.chain[this.chain.length-1].hash;
    const hash = lightningHash(data + lastHash);
    const block = new Block(data,hash,lastHash);
    this.chain.push(block);
  }
}

const s_blockchain = new Blockchain();
s_blockchain.addBlock('One');
s_blockchain.addBlock('Two');
s_blockchain.addBlock('Three');
console.log(s_blockchain);

/*
OUTPUT:

Blockchain {
  chain: [
    Block {
      data: 'genesis_data',
      hash: 'genesis_hash',
      lastHash: 'genesis_lastHash'
    },
    Block {
      data: 'One',
      hash: 'Onegenesis_hash*',
      lastHash: 'genesis_hash'
    },
    Block {
      data: 'Two',
      hash: 'TwoOnegenesis_hash**',
      lastHash: 'Onegenesis_hash*'
    },
    Block {
      data: 'Three',
      hash: 'ThreeTwoOnegenesis_hash***',
      lastHash: 'TwoOnegenesis_hash**'
    }
  ]
}
*/