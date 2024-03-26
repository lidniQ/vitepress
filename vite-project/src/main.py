from fastapi import FastAPI, Request
from pydantic import BaseModel

app = FastAPI()

class Text(BaseModel):
    text: str

@app.post("/process")
async def process_text(text: Text):
    text_a = text.text
