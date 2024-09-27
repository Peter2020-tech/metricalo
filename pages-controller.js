const pages = {
    dashboard: `
        <h1>User Dashboard</h1>
        <div class="dashboard-grid">
            <div class="dashboard-item">
                <h2>Balance</h2>
                <p>$1,234.56</p>
            </div>
            <div class="dashboard-item">
                <h2>Pending Transactions</h2>
                <p>3</p>
            </div>
            <div class="dashboard-item">
                <h2>Total Transactions</h2>
                <p>42</p>
            </div>
            <div class="dashboard-item">
                <h2>Last Login</h2>
                <p>2024-09-26</p>
            </div>
        </div>
    `,
    payment: `
        <h1>Make Payment</h1>
        <form id="payment-form">
            <label for="amount">Amount (in cents)</label>
            <input type="number" id="amount" required>
            
            <label for="currency">Currency</label>
            <input type="text" id="currency" value="USD" required>
            
            <label for="card_number">Card Number</label>
            <input type="text" id="card_number" required>
            
            <label for="exp_month">Expiration Month</label>
            <input type="number" id="exp_month" required>
            
            <label for="exp_year">Expiration Year</label>
            <input type="number" id="exp_year" required>
            
            <label for="cvv">CVV</label>
            <input type="text" id="cvv" required>
            
            <button type="submit">Process Payment</button>
        </form>
    `,
    history: `
        <h1>Transaction History</h1>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2024-09-25</td>
                    <td>Payment to XYZ Corp</td>
                    <td>$500.00</td>
                    <td><span class="status status-completed">Completed</span></td>
                </tr>
                <tr>
                    <td>2024-09-23</td>
                    <td>Subscription Renewal</td>
                    <td>$49.99</td>
                    <td><span class="status status-completed">Completed</span></td>
                </tr>
                <tr>
                    <td>2024-09-20</td>
                    <td>Refund from ABC Store</td>
                    <td>$75.50</td>
                    <td><span class="status status-pending">Pending</span></td>
                </tr>
                <tr>
                    <td>2024-09-18</td>
                    <td>Online Purchase</td>
                    <td>$129.99</td>
                    <td><span class="status status-failed">Failed</span></td>
                </tr>
            </tbody>
        </table>
    `
};

function loadPage(pageName) {
    const container = document.querySelector('.container');
    container.innerHTML = pages[pageName] || '<h1>Page Not Found</h1>';
    
    // Add navigation buttons
    const nav = document.createElement('div');
    nav.className = 'nav';
    for (const page in pages) {
        const button = document.createElement('a');
        button.href = '#';
        button.textContent = page.charAt(0).toUpperCase() + page.slice(1);
        button.onclick = () => loadPage(page);
        nav.appendChild(button);
    }
    container.appendChild(nav);
    
    // Reattach event listeners if necessary
    if (pageName === 'payment') {
        document.getElementById('payment-form').addEventListener('submit', handlePaymentSubmit);
    }
}

function handlePaymentSubmit(event) {
    event.preventDefault();
    // Add your payment processing logic here
    alert('Payment submitted!');
}

// Load the dashboard by default
window.onload = () => loadPage('dashboard');