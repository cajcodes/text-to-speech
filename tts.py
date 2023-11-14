from pathlib import Path
from openai import OpenAI

client = OpenAI()

speech_file_path = Path(__file__).parent / "speech-step-6.mp3"
response = client.audio.speech.create(
  model="tts-1-hd",
  voice="echo",
  input="Step Six: Setup Complete, and congratulations! Your Phonoscope Fiber Gateway is now all set up and ready to go. If you ever need assistance or have any questions, our support team is just a call or click away. Don't forget to check out our 'Tips & Tricks' for getting the most out of your new connection."
)

response.stream_to_file(speech_file_path)