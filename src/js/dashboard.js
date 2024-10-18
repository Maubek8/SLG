// Simulando dados para os gráficos
const satisfactionData = { labels: ['Muito Satisfeito', 'Satisfeito', 'Neutro', 'Insatisfeito', 'Muito Insatisfeito'], data: [45, 30, 15, 7, 3] };
const occupancyData = { labels: ['Sala 1', 'Sala 2', 'Sala 3', 'Sala 4', 'Sala 5'], data: [80, 65, 90, 75, 85] };
const modulesData = { labels: ['Emergência', 'APH', 'Enfermaria', 'UTI', 'Centro Cirúrgico', 'Outros'], data: [30, 25, 20, 15, 10, 5] };
const productivityData = { labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], productivity: [75, 80, 85, 78, 82], idleness: [25, 20, 15, 22, 18] };

function generateCharts() {
    const satisfactionCtx = document.getElementById('satisfactionChart').getContext('2d');
    new Chart(satisfactionCtx, {
        type: 'pie',
        data: { labels: satisfactionData.labels, datasets: [{ data: satisfactionData.data, backgroundColor: ['#2ecc71', '#3498db', '#f1c40f', '#e67e22', '#e74c3c'] }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'right' } } }
    });

    const occupancyCtx = document.getElementById('occupancyChart').getContext('2d');
    new Chart(occupancyCtx, {
        type: 'bar',
        data: { labels: occupancyData.labels, datasets: [{ label: 'Ocupação (%)', data: occupancyData.data, backgroundColor: ['#3498db'] }] },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } } }
    });

    const modulesCtx = document.getElementById('modulesChart').getContext('2d');
    new Chart(modulesCtx, {
        type: 'bar',
        data: { labels: modulesData.labels, datasets: [{ label: 'Atendimentos por Módulo', data: modulesData.data, backgroundColor: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#e67e22', '#9b59b6'] }] },
        options: { responsive: true, maintainAspectRatio: false }
    });

    const productivityCtx = document.getElementById('productivityChart').getContext('2d');
    new Chart(productivityCtx, {
        type: 'line',
        data: {
            labels: productivityData.labels,
            datasets: [
                { label: 'Produtividade (%)', data: productivityData.productivity, backgroundColor: 'rgba(46, 204, 113, 0.2)', borderColor: '#2ecc71', borderWidth: 2 },
                { label: 'Ociosidade (%)', data: productivityData.idleness, backgroundColor: 'rgba(231, 76, 60, 0.2)', borderColor: '#e74c3c', borderWidth: 2 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } } }
    });
}

function loadSchedule() {
    const scheduleContainer = document.getElementById('scheduleContainer');
    const scheduleData = [
        { time: '08:00', activity: 'Simulação de Emergência' },
        { time: '10:00', activity: 'Atendimento em UTI' },
        { time: '14:00', activity: 'Simulação Obstétrica' },
        { time: '16:00', activity: 'Treinamento de APH' }
    ];

    scheduleContainer.innerHTML = ''; 
    scheduleData.forEach(item => {
        const scheduleItem = document.createElement('div');
        scheduleItem.classList.add('schedule-item');
        scheduleItem.innerHTML = `<strong>${item.time}</strong> - ${item.activity}`;
        scheduleContainer.appendChild(scheduleItem);
    });
}
