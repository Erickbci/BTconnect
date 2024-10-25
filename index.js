const connectButton = document.getElementById('conectar');
const status = document.getElementById('status');

connectButton.addEventListener('click', async () => {
  try {
    status.textContent = 'Procurando dispositivos Bluetooth...';

    // Solicita ao usuário que selecione um dispositivo Bluetooth disponível
    const device = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true,  // Aceita todos os dispositivos disponíveis
      optionalServices: [] // Adicione serviços opcionais, se necessário
    });

    if (device) {
      status.textContent = `Conectado ao dispositivo: ${device.name}`;
    }
  } catch (error) {
    console.error(error);
    status.textContent = 'Erro ao tentar conectar: ' + error.message;
  }
});