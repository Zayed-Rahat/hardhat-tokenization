const StorageFactory = artifacts.require("StorageFactory");
const TokenContract = artifacts.require("TokenContract");

contract("StorageFactory", (accounts) => {
    let tokenFactoryInstance;

    before(async () => {
        tokenFactoryInstance = await StorageFactory.deployed();
    });

    it("should create a new token", async () => {
        const name = "AZUR";
        const symbol = "MTK";
        const initialSupply = 100000;

        const tx = await tokenFactoryInstance.createToken(name, symbol, initialSupply, { from: accounts[0] });

        // Check if the event was emitted
        const tokenCreatedEvent = tx.logs[0];
        assert.equal(tokenCreatedEvent.event, "TokenCreated", "TokenCreated event not emitted");

        // Get the address of the newly created TokenContract
        const tokenAddress = tokenCreatedEvent.args.tokenContract;

        // Check if the token contract was created and has the correct properties
        const tokenContractInstance = await TokenContract.at(tokenAddress);
        const tokenName = await tokenContractInstance.name();
        const tokenSymbol = await tokenContractInstance.symbol();
        const tokenSupply = await tokenContractInstance.totalSupply();

        assert.equal(tokenName, name, "Token name is incorrect");
        assert.equal(tokenSymbol, symbol, "Token symbol is incorrect");
        assert.equal(tokenSupply.toNumber(), initialSupply, "Token supply is incorrect");
    });
});
