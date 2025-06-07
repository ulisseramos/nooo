
import React from 'react';
import DisneyIcon from './DisneyIcon';

const Header = () => {
  return (
    <header className="pt-8 pb-4 bg-inherit">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center">
          {/* Logo minimalista */}
          <div className="bg-slate-800/80 backdrop-blur-md border border-[#006e99] shadow-[0_0_15px_rgba(0,110,153,0.3),inset_0_1px_0_rgba(0,110,153,0.2)] rounded-xl px-6 py-3 flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <DisneyIcon className="w-4 h-4 text-black" />
            </div>
            <div className="text-xl font-bold">
              <span className="text-white">
                Disney+
              </span>
              <span className="text-slate-400 ml-2 text-sm font-medium">PRO</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
