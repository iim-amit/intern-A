// components/Footer/Footer.tsx
import React from 'react';
import DateTime from './DateTime';
import PastOrders from './PastOrders';
import OpenOrders from './OpenOrder';
import MarketStatus from './MarketStatus';
import { Order } from '../../types/trading.types';

interface FooterProps {
  pastOrders: Order[];
  openOrders: Order[];
  isMarketOpen?: boolean;
}

const Footer: React.FC<FooterProps> = ({ 
  pastOrders, 
  openOrders, 
  isMarketOpen = true 
}) => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 px-6 py-3">
      <div className="flex items-center justify-between">
        <DateTime />
        
        <div className="flex items-center space-x-6">
          <PastOrders orders={pastOrders} />
          <OpenOrders orders={openOrders} />
        </div>
        
        <MarketStatus isOpen={isMarketOpen} />
      </div>
    </footer>
  );
};

export default Footer;