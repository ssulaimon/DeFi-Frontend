export class SupportedNetworkModel {
    tokenName;
    tokenImage;
    tokenNetwork;
    amountOfTokenLocked;
    usdValueOfToken;
    usdValueOfTokenLocked;

    constructor(tokenName, tokenImage, tokenNetwork, amountOfTokenLocked, usdValueOfToken, usdValueOfTokenLocked) {
        this.tokenName = tokenName;
        this.tokenImage = tokenImage;
        this.tokenNetwork = tokenNetwork;
        this.amountOfTokenLocked = amountOfTokenLocked;
        this.usdValueOfToken = usdValueOfToken;
        this.usdValueOfTokenLocked = usdValueOfTokenLocked;
    }
}