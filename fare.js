document.getElementById('fareForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;

    const generateRandomFare = () => Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;

    const fare3A = generateRandomFare();
    const fare2A = generateRandomFare();

    const fareTableContainer = document.getElementById('fareTableContainer');
    fareTableContainer.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>AC-second</th>
                    <th>Second-sitting</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${from}</td>
                    <td>${to}</td>
                    <td>${fare3A}</td>
                    <td>${fare2A}</td>
                </tr>
            </tbody>
        </table>
    `;
});
