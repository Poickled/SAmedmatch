import React from 'react';

interface ViewToggleProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ currentView, onViewChange }) => {
  return (
    <div className="view-toggle">
      <button
        className={currentView === 'list' ? 'active' : ''}
        onClick={() => onViewChange('list')}
      >
        List View
      </button>
      <button
        className={currentView === 'map' ? 'active' : ''}
        onClick={() => onViewChange('map')}
      >
        Map View
      </button>
    </div>
  );
};

export default ViewToggle;