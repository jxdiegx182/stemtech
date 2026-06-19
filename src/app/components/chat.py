from openai import OpenAI


client = OpenAI()

response = client.chat.completions.create(
    input="What is the capital of France?",
    model="gpt-4o"
)

print(response.output_text)
