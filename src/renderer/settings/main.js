import {
    initUI,
    showSection,
    addProvider,
    cancelEdit,
    saveAppearance,
    editProvider,
    removeProvider,
    toggleProvider,
    saveCategory,
    cancelCatEdit,
    editCategory,
    removeCategory,
    searchIcons8,
    searchProviderIcons8,
    updateGetIconLink,
    resetConfig,
    parseBulkImport,
    renderBulkPreview,
    executeBulkImport,
    updateIconPreview,
    toggleAddSection,
    toggleQuickSelect,
    changeProviderCategory,
    onTypeChange
} from './ui';
import { Bridge } from './bridge';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Expose to window for HTML onclick handlers BEFORE initUI
    window.ui = {
        showSection,
        addProvider,
        cancelEdit,
        saveAppearance,
        editProvider,
        removeProvider,
        toggleProvider,
        saveCategory,
        cancelCatEdit,
        editCategory,
        removeCategory,
        searchIcons8,
        searchProviderIcons8,
        updateGetIconLink,
        resetConfig,
        parseBulkImport,
        renderBulkPreview,
        executeBulkImport,
        updateIconPreview,
        toggleAddSection,
        toggleQuickSelect,
        changeProviderCategory,
        onTypeChange
    };
    window.bridge = Bridge;

    initUI();
});
