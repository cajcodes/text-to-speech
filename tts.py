from pathlib import Path
from openai import OpenAI

client = OpenAI()

speech_file_path = Path(__file__).parent / "speech-file-name.mp3"
response = client.audio.speech.create(
  model="tts-1-hd",
  voice="echo",
  input="insert text here..."
)

response.stream_to_file(speech_file_path)