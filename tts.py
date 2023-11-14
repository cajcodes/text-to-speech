from pathlib import Path
from openai import OpenAI

client = OpenAI()

speech_file_path = Path(__file__).parent / "speech-intro-tar.mp3"
response = client.audio.speech.create(
  model="tts-1-hd",
  voice="echo",
  input="እዚ ናብ ፎኖስከይፕ ፊብር ዕርፊት፣ እንታይ ንእምነት። እኛ እዚ ናብዚ እናደርግዎ ክንመርሕዎ በእተነፃፃፈ ናይ ዝኸበር ፎኖስከይፕ ፊብር ጌትዌይ ኣለና። ክንጠልኦምና ተዘጋጁ፣ ብብልቦክሲ ዝበሉ ዕቃታት፦ ጌትዌይ (ሞዴም)፣ ብሓይቲ ዝተገጠሙ ናይ ግንባታ ሞጣቢ ከምኡ'ውን ስክራውስ እና 2 ኣንኮራ (ኦፕሽናል)፣ ናይ መንግስቲ ሰማይ፣ ኤትሬንካብል፣ እና ኮኣክሽያል ካብል። ተንቀጥቅጦ፦ መጀመርያ ናይ ኦትሌት ምርመራ"
)

response.stream_to_file(speech_file_path)