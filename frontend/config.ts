// Types
type IConfig = {
  decimals: number;
  airdrop: Record<string, number>;
};

// Config from generator
const config: IConfig = {
  decimals: 18,
  airdrop: {
    "0x0234B057b26EcA810B340dfB159B3d582689EE15": 100,
    "0x766DF9F905CAE2D8560672239CA29e1E52bAe65d": 200,
    "0x3E88931Ea55F9807AAF46aE6eFb274e3263189C9": 300,
    "0xdFbcbE2aC7bd5D0910A92Db59946AE7A2dDf810D": 400,
    "0xd28717e8E77eE963fb7D841e121DDee0397995Df": 500,
    "0xD4e06a1164894441cD8DB697BDF43C27deB19518": 600,
  },
};


// Export config
export default config;
