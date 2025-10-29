/**
 * OCPP CSMS Web Interface
 * Frontend JavaScript for managing charging stations
 */

class OCPPCSMS {
    constructor() {
        this.apiBase = 'http://localhost:3000/api';
        this.chargers = [];
        this.logs = [];
        this.refreshInterval = null;
        
        this.init();
    }

    async init() {
        console.log('🚀 Initializing OCPP CSMS Web Interface...');
        
        // Initial load
        await this.refreshChargers();
        await this.refreshLogs();
        
        // Set up auto-refresh
        this.setupAutoRefresh();
        
        // Set up event listeners
        this.setupEventListeners();
        
        console.log('✅ OCPP CSMS Web Interface initialized');
    }

    setupAutoRefresh() {
        // Refresh every 5 seconds
        this.refreshInterval = setInterval(() => {
            this.refreshChargers();
            this.refreshLogs();
        }, 5000);
    }

    setupEventListeners() {
        // Update charger dropdown when chargers change
        document.getElementById('selectedCharger').addEventListener('change', (e) => {
            const chargerId = e.target.value;
            this.updateChargerInfo(chargerId);
        });
    }

    async refreshChargers() {
        try {
            const response = await fetch(`${this.apiBase}/chargers`);
            const data = await response.json();
            
            if (data.success) {
                this.chargers = data.data;
                this.updateChargerList();
                this.updateChargerDropdown();
                this.updateConnectionCount();
            }
        } catch (error) {
            console.error('❌ Error refreshing chargers:', error);
            this.showError('Failed to refresh charger list');
        }
    }

    async refreshLogs() {
        try {
            const response = await fetch(`${this.apiBase}/logs`);
            const data = await response.json();
            
            if (data.success) {
                this.logs = data.data;
                this.updateLogsDisplay();
            }
        } catch (error) {
            console.error('❌ Error refreshing logs:', error);
        }
    }

    updateChargerList() {
        const chargerList = document.getElementById('chargerList');
        chargerList.innerHTML = '';

        if (this.chargers.length === 0) {
            chargerList.innerHTML = '<div class="charger-card"><p>No chargers connected</p></div>';
            return;
        }

        this.chargers.forEach(charger => {
            const chargerCard = this.createChargerCard(charger);
            chargerList.appendChild(chargerCard);
        });
    }

    createChargerCard(charger) {
        const card = document.createElement('div');
        card.className = `charger-card ${charger.connected ? 'connected' : 'disconnected'}`;
        
        const statusClass = charger.connected ? 'status-online' : 'status-offline';
        const statusText = charger.connected ? '🟢 Connected' : '🔴 Offline';
        
        card.innerHTML = `
            <div class="charger-header">
                <div class="charger-id">${charger.id}</div>
                <div class="charger-status ${statusClass}">${statusText}</div>
            </div>
            <div class="charger-info">
                <div><strong>Session ID:</strong> ${charger.sessionId || 'N/A'}</div>
                <div><strong>Last Heartbeat:</strong> ${this.formatTimestamp(charger.lastHeartbeat)}</div>
                <div><strong>Connectors:</strong> ${charger.connectors ? charger.connectors.length : 0}</div>
                <div><strong>Active Transactions:</strong> ${charger.transactions ? charger.transactions.length : 0}</div>
            </div>
        `;
        
        return card;
    }

    updateChargerDropdown() {
        const dropdown = document.getElementById('selectedCharger');
        dropdown.innerHTML = '<option value="">Select a charger...</option>';
        
        this.chargers.forEach(charger => {
            const option = document.createElement('option');
            option.value = charger.id;
            option.textContent = `${charger.id} (${charger.connected ? 'Connected' : 'Offline'})`;
            dropdown.appendChild(option);
        });
    }

    updateConnectionCount() {
        const connectedCount = this.chargers.filter(c => c.connected).length;
        document.getElementById('chargerCount').textContent = connectedCount;
        document.getElementById('updateTime').textContent = this.formatTimestamp(new Date());
    }

    updateLogsDisplay() {
        const logsContainer = document.getElementById('logsContainer');
        logsContainer.innerHTML = '';
        
        // Show last 50 logs
        const recentLogs = this.logs.slice(-50).reverse();
        
        recentLogs.forEach(log => {
            const logEntry = document.createElement('div');
            logEntry.className = 'log-entry';
            
            const timestamp = this.formatTimestamp(log.timestamp);
            const level = log.level || 'info';
            const message = log.message || '';
            
            logEntry.innerHTML = `
                <span class="log-timestamp">[${timestamp}]</span>
                <span class="log-${level}">${message}</span>
            `;
            
            logsContainer.appendChild(logEntry);
        });
    }

    async remoteStartTransaction() {
        const chargerId = document.getElementById('selectedCharger').value;
        const connectorId = document.getElementById('connectorId').value;
        const idTag = document.getElementById('idTag').value;
        
        if (!chargerId) {
            this.showError('Please select a charger');
            return;
        }
        
        if (!connectorId || !idTag) {
            this.showError('Please fill in all required fields');
            return;
        }
        
        try {
            this.showLoading('Starting transaction...');
            
            const response = await fetch(`${this.apiBase}/operations/remote-start`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chargerId,
                    connectorId: parseInt(connectorId),
                    idTag
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                this.showSuccess(`Transaction started successfully on ${chargerId}`);
            } else {
                this.showError(`Failed to start transaction: ${data.error}`);
            }
        } catch (error) {
            console.error('❌ Error starting transaction:', error);
            this.showError('Failed to start transaction');
        }
    }

    async remoteStopTransaction() {
        const chargerId = document.getElementById('selectedCharger').value;
        const transactionId = document.getElementById('transactionId').value;
        
        if (!chargerId) {
            this.showError('Please select a charger');
            return;
        }
        
        if (!transactionId) {
            this.showError('Please enter transaction ID');
            return;
        }
        
        try {
            this.showLoading('Stopping transaction...');
            
            const response = await fetch(`${this.apiBase}/operations/remote-stop`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chargerId,
                    transactionId: parseInt(transactionId)
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                this.showSuccess(`Transaction stopped successfully on ${chargerId}`);
            } else {
                this.showError(`Failed to stop transaction: ${data.error}`);
            }
        } catch (error) {
            console.error('❌ Error stopping transaction:', error);
            this.showError('Failed to stop transaction');
        }
    }

    async resetCharger(type) {
        const chargerId = document.getElementById('selectedCharger').value;
        
        if (!chargerId) {
            this.showError('Please select a charger');
            return;
        }
        
        try {
            this.showLoading(`Performing ${type} reset...`);
            
            const response = await fetch(`${this.apiBase}/operations/reset`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chargerId,
                    type
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                this.showSuccess(`${type} reset completed on ${chargerId}`);
            } else {
                this.showError(`Failed to reset charger: ${data.error}`);
            }
        } catch (error) {
            console.error('❌ Error resetting charger:', error);
            this.showError('Failed to reset charger');
        }
    }

    updateChargerInfo(chargerId) {
        const charger = this.chargers.find(c => c.id === chargerId);
        if (charger) {
            // Update form fields with charger-specific info
            document.getElementById('connectorId').value = 1;
            document.getElementById('idTag').value = 'TEST_USER';
        }
    }

    formatTimestamp(timestamp) {
        if (!timestamp) return 'N/A';
        
        const date = new Date(timestamp);
        return date.toLocaleString();
    }

    showSuccess(message) {
        this.showNotification(message, 'success');
    }

    showError(message) {
        this.showNotification(message, 'error');
    }

    showLoading(message) {
        this.showNotification(message, 'loading');
    }

    showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 5px;
            color: white;
            font-weight: bold;
            z-index: 1000;
            max-width: 300px;
            word-wrap: break-word;
        `;
        
        // Set background color based on type
        switch (type) {
            case 'success':
                notification.style.background = '#2ecc71';
                break;
            case 'error':
                notification.style.background = '#e74c3c';
                break;
            case 'loading':
                notification.style.background = '#3498db';
                break;
            default:
                notification.style.background = '#95a5a6';
        }
        
        // Add to page
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 3000);
    }
}

// Global functions for HTML onclick events
let csms;

function refreshChargers() {
    csms.refreshChargers();
}

function refreshLogs() {
    csms.refreshLogs();
}

function remoteStartTransaction() {
    csms.remoteStartTransaction();
}

function remoteStopTransaction() {
    csms.remoteStopTransaction();
}

function resetCharger(type) {
    csms.resetCharger(type);
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    csms = new OCPPCSMS();
});

// Clean up on page unload
window.addEventListener('beforeunload', () => {
    if (csms && csms.refreshInterval) {
        clearInterval(csms.refreshInterval);
    }
});
