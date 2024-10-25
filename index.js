
document.getElementById('conectar').addEventListener('click', async () => {
    console.log('ppp');
    
    const status = document.getElementById('status');
    try {
      status.textContent = 'Tentando conectar...';

      // Solicita a seleção de um dispositivo Bluetooth com o nome específico
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ name: 'CROSLEY CR3029A' }]
      });

      if (device) {
        status.textContent = `Conectado ao ${device.name}`;
      }
    } catch (error) {
      console.error(error);
      status.textContent = 'Erro ao tentar conectar: ' + error.message;
    }
  });