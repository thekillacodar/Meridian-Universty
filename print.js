function printResults() {
    const printContent = document.getElementById("resultsDisplay").innerHTML;
    const printWindow = window.open('', '_blank');

    // Build the full HTML with head, styles, and the cloned results content
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Academic Results - MacDonald Chinda</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                th, td { border: 1px solid #000; padding: 8px; text-align: left; }
                th { background-color: #f0f0f0; }
                .font-semibold { font-weight: bold; }
                .text-center { text-align: center; }
                .bg-blue-100 { background-color: #e6f3ff; }
                .text-green-600 { color: #059669; }
                .mb-6 { margin-bottom: 1.5rem; }
            </style>
        </head>
        <body>
            ${printContent}
            <script>
                window.onload = function() {
                    window.print();
                    window.onafterprint = function() { window.close(); };
                };
            </script>
        </body>
        </html>
    `;

    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
}
