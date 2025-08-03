function printResults() {
    const printWindow = window.open('', '_blank');

    // Listen for the new window to finish loading
    printWindow.addEventListener('load', function() {
        const printContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Academic Results - MacDonald Chinda</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    .header { text-align: center; margin-bottom: 30px; }
                    .student-info { margin-bottom: 20px; }
                    .student-info div { margin-bottom: 5px; }
                    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                    th, td { border: 1px solid #000; padding: 8px; text-align: left; }
                    th { background-color: #f0f0f0; }
                    .total-row { font-weight: bold; background-color: #e6f3ff; }
                    .gpa-section { margin-top: 20px; text-align: center; }
                    .gpa-section div { margin: 5px 0; font-size: 16px; font-weight: bold; }
                    @media print {
                        body { margin: 0; }
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>MERIDIAN UNIVERSITY</h1>
                    <h2>ACADEMIC RESULTS</h2>
                </div>

                <div class="student-info">
                    <div><strong>Name:</strong> Chinda, Macdonald Chibroma</div>
                    <div><strong>Mat. No:</strong> DE.2021/4311</div>
                    <div><strong>Faculty:</strong> Science</div>
                    <div><strong>Department:</strong> Computer Science</div>
                    <div><strong>Degree in View:</strong> B.Sc</div>
                    <div><strong>Study Mode:</strong> Full Time</div>
                    <div><strong>Level:</strong> 400</div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Course Code</th>
                            <th>Course Title</th>
                            <th>Units</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>CMS418</td><td>Net-Centric Programming</td><td>3</td><td>A</td></tr>
                        <tr><td>2</td><td>CMS436</td><td>Algorithms and Generic Programming</td><td>3</td><td>A</td></tr>
                        <tr><td>3</td><td>CMS434</td><td>Modeling and Simulation</td><td>3</td><td>A</td></tr>
                        <tr><td>4</td><td>CMS456</td><td>Computer Security</td><td>3</td><td>A</td></tr>
                        <tr><td>5</td><td>CMS464</td><td>Human Computer Interface</td><td>2</td><td>A</td></tr>
                        <tr><td>6</td><td>CMS482</td><td>Project</td><td>6</td><td>A</td></tr>
                        <tr class="total-row">
                            <td colspan="3">TOTAL UNITS</td><td>20</td><td>-</td>
                        </tr>
                    </tbody>
                </table>

                <div class="gpa-section">
                    <div>GPA: 5.00</div>
                    <div>CGPA: 4.99</div>
                </div>

                <script>
                    window.onload = function() {
                        window.print();
                        window.onafterprint = function() { window.close(); }
                    };
                </script>
            </body>
            </html>
        `;

        printWindow.document.open();        // Make sure the document is open
        printWindow.document.write(printContent);
        printWindow.document.close();
    });
}
