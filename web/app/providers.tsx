'use client';

import * as React from 'react';
import {
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import {
  base,
  baseSepolia,
} from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { injected, walletConnect, coinbaseWallet } from 'wagmi/connectors';
import '@rainbow-me/rainbowkit/styles.css';

// Manually define connectors to avoid @metamask/sdk dependency hell
const projectId = 'YOUR_PROJECT_ID'; // Public demo ID usually works for simple tests

const config = createConfig({
  chains: [base, baseSepolia],
  transports: {
    [base.id]: http(),
    [baseSepolia.id]: http(),
  },
  connectors: [
    injected(), // Works with MetaMask, Rabby, etc. without SDK
    coinbaseWallet({ appName: 'Protocol Red' }),
    // walletConnect({ projectId }), // Uncomment if you have a Project ID
  ],
  ssr: true,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme({
          accentColor: '#dc2626',
          accentColorForeground: 'black',
          borderRadius: 'none',
          fontStack: 'system',
          overlayBlur: 'small',
        })}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
