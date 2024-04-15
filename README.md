# Description:
This project utilizes the OpenAI API to demonstrate text-to-speech conversion with two Python scripts and a text file. The scripts, tts.py and tts_txt.py, showcase different approaches to generating speech audio files from text using the OpenAI API.

# Usage
The project contains two Python scripts:

# tts.py:
This script demonstrates a basic example of using the OpenAI API for text-to-speech conversion. You need to manually enter the text you want to convert within the script.

## To use this script:
Replace "insert text here..." with the text you want to convert to speech.
Save the file.
Run the script using Python:
python tts.py
The generated speech audio will be saved as output-speech.mp3 in the same directory.

# tts_txt.py:
This script showcases a more dynamic approach by reading the text from an input file (input-text.txt) and converting it to speech.

## To use this script:
Enter the text you want to convert to speech in input-text.txt.
Save the file.
Run the script using Python:
python tts_txt.py
The generated speech audio will be saved as output-speech.mp3 in the same directory.

# Customization

## You can customize the scripts to suit your needs:
Voice Selection: Both scripts allow you to choose from various voices provided by OpenAI. Simply change the voice parameter in the client.audio.speech.create() function to one of the available options: alloy, echo, fable, onyx, nova, or shimmer.
Input Text: For tts_txt.py, you can edit the input-text.txt file to provide the text input for conversion.
