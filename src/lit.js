async function mintNft() {
    document.getElementById("mintingStatus").innerText =
      "Minting, please wait for the tx to confirm...";

    window.chain = document.getElementById("selectedChain").value;

    const { txHash, tokenId, tokenAddress, mintingAddress, authSig } =
      //await LitJsSdk.mintLIT({ chain: window.chain, quantity: 1 });
    window.tokenId = tokenId;
    window.tokenAddress = tokenAddress;
    window.authSig = authSig;

    document.getElementById("mintingStatus").innerText =
      "Minted!  Tx hash is " + txHash;
  }

  async function provisionAccess() {
    document.getElementById("provisioningStatus").innerText =
      "Provisioning, please wait...";
    window.accessControlConditions = [
      {
        //contractAddress: LitJsSdk.LIT_CHAINS[window.chain].contractAddress,
        standardContractType: "ERC1155",
        chain: window.chain,
        method: "balanceOf",
        parameters: [":userAddress", window.tokenId.toString()],
        returnValueTest: {
          comparator: ">",
          value: "0",
        },
      },
    ];
    // generate a random path because you can only provision access to a given path once
    const randomUrlPath =
      "/" +
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    window.resourceId = {
      baseUrl: "my-dynamic-content-server.com",
      path: randomUrlPath, // this would normally be your url path, like "/webpage.html" for example
      orgId: "",
      role: "",
      extraData: "",
    };
    /*await litNodeClient.saveSigningCondition({
      accessControlConditions: window.accessControlConditions,
      chain: window.chain,
      authSig: window.authSig,
      resourceId: window.resourceId,
    });
    document.getElementById("provisioningStatus").innerText =
      "Provisioned!";
  }*/}

  async function requestJwt() {
    document.getElementById("requestingStatus").innerText =
      "Requesting JWT, please wait...";

    /*window.jwt = await litNodeClient.getSignedToken({
      accessControlConditions: window.accessControlConditions,
      chain: window.chain,
      authSig: window.authSig,
      resourceId: window.resourceId,*/
    

    document.getElementById("requestingStatus").innerText =
      "JWT Obtained!  It is  " + window.jwt;
  }

  async function visitProtectedServer() {
    document.getElementById("verificationStatus").innerText =
      "Redirecting, please wait...";
    window.location = "/?jwt=" + window.jwt;
  }

  export {mintNft};
  export {provisionAccess};