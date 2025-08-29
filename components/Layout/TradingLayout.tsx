"use client";
// components/Layout/TradingLayout.tsx
import React from 'react';
import Header from '../Header/Header';
import TradingTools from '../Sidebar/TradingTools';
import TradingTerminal from '../TradingTerminal/TradingTerminal';
import Footer from '../Footer/Footer';
import { useTradingState } from '../../hooks/useTradingState';

const TradingLayout: React.FC = () => {
  const {
    selectedIndex,
    indexInfo,
    selectedTimeFrame,
    selectedIndicators,
    pastOrders,
    openOrders,
    searchQuery,
    setSelectedTimeFrame,
    setSelectedIndex,
    setSearchQuery,
    toggleIndicator,
  } = useTradingState();

  const handleBuyClick = () => {
    console.log('Buy button clicked for:', selectedIndex.symbol);
    // Implement buy logic
  };

  const handleSellClick = () => {
    console.log('Sell button clicked for:', selectedIndex.symbol);
    // Implement sell logic
  };

  const handleSettingClick = (setting: string) => {
    console.log('Setting clicked:', setting);
    // Implement settings logic
  };

  // Update indexInfo based on selectedIndex
  const currentIndexInfo = {
    ...indexInfo,
    name: selectedIndex.name,
    symbol: selectedIndex.symbol,
    price: selectedIndex.price,
    change: selectedIndex.change,
    changePercent: selectedIndex.changePercent
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header
        selectedIndex={selectedIndex}
        selectedTimeFrame={selectedTimeFrame}
        selectedIndicators={selectedIndicators}
        searchQuery={searchQuery}
        onIndexSelect={setSelectedIndex}
        onTimeFrameChange={setSelectedTimeFrame}
        onIndicatorToggle={toggleIndicator}
        onSearchChange={setSearchQuery}
        onSettingClick={handleSettingClick}
      />
      
      <main className="flex-1 flex">
        <TradingTools />
        <TradingTerminal
          indexInfo={currentIndexInfo}
          selectedTimeFrame={selectedTimeFrame}
          selectedIndicators={selectedIndicators}
          onBuyClick={handleBuyClick}
          onSellClick={handleSellClick}
        />
      </main>
      
      <Footer
        pastOrders={pastOrders}
        openOrders={openOrders}
        isMarketOpen={currentIndexInfo.status === 'open'}
      />
    </div>
  );
};

export default TradingLayout;