from pathlib import Path
from openai import OpenAI

client = OpenAI()

speech_file_path = Path(__file__).parent / "speech-step-6-esp.mp3"
response = client.audio.speech.create(
  model="tts-1-hd",
  voice="echo",
  input="Paso Seis: Configuración Completa, ¡y felicidades! Tu Gateway de Phonoscope Fiber ya está todo configurado y listo para usar. Si alguna vez necesitas asistencia o tienes alguna pregunta, nuestro equipo de soporte está a solo una llamada o un clic de distancia. No olvides revisar nuestros 'Consejos y Trucos' para aprovechar al máximo tu nueva conexión."
)

response.stream_to_file(speech_file_path)