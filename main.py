from flask import Flask, render_template, request, jsonify, url_for
from googletrans import Translator
import os

app = Flask(__name__)
translator = Translator(service_urls=['translate.google.com'])

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/translate', methods=['POST'])
def translate_text():
    data = request.get_json()
    text = data.get('text')
    target_lang = data.get('target_lang')

    if not text or not target_lang:
        return jsonify({'error': 'Missing required parameters'}), 400

    try:
        translation = translator.translate(text, dest=target_lang)
        translated_text = translation.text
        return jsonify({'translated_text': translated_text}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=os.getenv("PORT", default=5000))
    
