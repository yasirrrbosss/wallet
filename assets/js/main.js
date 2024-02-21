const listWhitelist = [
    '0x4c2d6fd1ec46d291b09ee8d0cc4a2394a395fde6',
    '0x678e449eef5faf4b64fd1323d84ee153b19121ab',
    '0x8a65f2fdfe954ab51e78c90aa6d9d477ef542dc5',
    '0xaaa88c6a9f3efe0f25367e661a841165f6fec996',
    '0xeb4dd21933ac57034868de3e37ed0032aaca33f1'
];



  function myFunction() {
    let check = document.getElementById("walletchecker").value;
    const Whitelist = listWhitelist.includes(check);
    let text;
    if (Whitelist) {
      text = "Congrats You're Eligible for claiming $GOBLIN";
    }
    else {
        text = "You're not eligible! Mint Goblin Pass to eligible";
    }

    document.getElementById("validate").innerHTML = text;
  }