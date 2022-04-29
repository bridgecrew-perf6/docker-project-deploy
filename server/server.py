from flask import Flask, request, jsonify
import json
#from kafka import KafkaProducer
import os

app = Flask(__name__)

#KAFKA_HOST = os.environ["KAFKA_HOST"]
#KAFKA_PORT = os.environ["KAFKA_PORT"]
#REQUEST_TOPIC = os.environ["DATA_REQUEST_TOPIC"]

#producer = KafkaProducer(
#    bootstrap_servers=[KAFKA_HOST+":"+KAFKA_PORT],
#    api_version=(0, 11, 15)
#)

@app.route('/sendmessage', methods=['POST'])
def kafkaProducer():
    req = request.get_json()
#    json_payload = json.dumps(req)
 #   json_payload = str.encode(json_payload)
#    producer.send(REQUEST_TOPIC, json_payload)
#    producer.flush()
    print(req)
    return jsonify({
        "message": "You will receive an email in a short while with the plot",
        "status": "Pass"})


if __name__ == "__main__":
    app.run(debug=True, port=5000)