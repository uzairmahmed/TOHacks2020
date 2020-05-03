from flask import Flask, request
from pymongo import MongoClient
import pandas as pd
import json
import random
#from flask_cors import CORS

# Initializes Flask App
app = Flask(__name__)
#CORS(app)

updateValue = 'niranjan just left'

def getEmptySlots():
    client = MongoClient("mongodb+srv://niranjank0609:test@cluster0-amdsl.gcp.mongodb.net/test?retryWrites=true&w=majority")
    db = client.get_database('store1')
    records = db.day1

    allValues = []
    cursor = records.find({"name":"NULL"},{"time" : 1})
    for document in cursor:
          allValues.append(document)
    valsasdf = pd.DataFrame(allValues)
    valsasdf.drop(columns=['_id'],inplace=True)
    return(valsasdf['time'].tolist())

@app.route('/')
def hello():
    return '<h1>Uh, hello?</h1><p>If you somehow landed here, please go to <a href="https://www.uzairmahmed.com">https://www.uzairmahmed.com</a></p>'

@app.route('/QR', methods=['POST'])
def qrCodeHandler():
    requestJson = request.get_json(force=True)
    code = requestJson['data']
    user = requestJson['name']
    updateValue = 'uzair just checked in'

    # Modify the list based on store and who checked in/out

    return 'done'

@app.route('/nearbystores', methods=['GET'])
def getStores():

    # Pull Each Stores Value

    return '["Store1", "Store2", "Store3", "Store4"]'

@app.route('/update', methods=['GET'])
def updater():
    tempString = {"countdown": 5, "population": 5, "latestInfo": updateValue, "sendlist": [{"name":'uzair', "time":'10:00AM'}, {"name":'farhan', "time":'10:30AM'}]}
    print(updateValue)
    return json.dumps(tempString)


@app.route('/availabletimes', methods=['GET'])
def getTimes():
    times = str(getEmptySlots()).replace("'", '"')
    return str(times)

@app.route('/requestBooking', methods=['POST'])
def add_booking():
    requestJson = request.get_json(force=True)
    store = requestJson['storename']
    user = requestJson['username']
    year = requestJson['year']
    month = requestJson['month']
    day = requestJson['day']
    length = requestJson['length']

    return 'done'

if __name__ == '__main__':
    app.run(host= '192.168.0.23')
    #app.run()
