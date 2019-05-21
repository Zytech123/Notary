pragma solidity >=0.4.21 <0.6.0;

contract Notary {

    struct Record {
        uint timestamp;
        address signer;
    }

    mapping(string => Record) internal files;

    event Register(address indexed signer, string hash);

    function register(string calldata hash) external returns (uint, address) {
        require(files[hash].timestamp == uint(0), "Record already exists");
        uint timestamp = now;
        address signer = msg.sender;
        files[hash] = Record(timestamp, signer);
        emit Register(msg.sender, hash);
        return (timestamp, signer);
    }

    function verify(string memory hash) public view returns (uint, address) {
        return (files[hash].timestamp, files[hash].signer);
    }
}
