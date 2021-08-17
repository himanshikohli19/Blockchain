//Creating a basic block (data field, hash and last Hash) for blockchain network

class Block
{
 constructor(data, hash, lastHash)
  {
    this.data=data;
    this.hash=hash;
    this.lastHash=lastHash;
  }
}

const s_Block = new Block('sample_data','sample_hash','sample_lastHash');

console.log(s_Block);

/*
OUTPUT:

Block {
  data: 'sample_data',
  hash: 'sample_hash',
  lastHash: 'sample_lastHash'
}
*/
