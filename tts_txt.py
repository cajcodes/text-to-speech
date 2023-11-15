from pathlib import Path
from openai import OpenAI

client = OpenAI()

# Path to the text file and the output speech file
text_file_path = Path(__file__).parent / "input-text.txt"
speech_file_path = Path(__file__).parent / "speech-blog-mosaic-hindi2.mp3"

# Read the content of the text file
with open(text_file_path, 'r', encoding='utf-8') as file:
    text_content = file.read()

# Call the OpenAI API to create the speech file
response = client.audio.speech.create(
  model="tts-1-hd",
  voice="shimmer", # Choices: alloy, echo, fable, onyx, nova, shimmer
  input=text_content  # Pass the read content as input
)

# Stream the response to the file
response.stream_to_file(speech_file_path)
