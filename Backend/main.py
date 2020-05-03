from flask import Flask, request
from flask_cors import CORS

# Initializes Flask App
app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return '<h1>Uh, hello?</h1><p>If you somehow landed here, please go to <a href="https://www.uzairmahmed.com">https://www.uzairmahmed.com</a></p>'

@app.route('/QR', methods=['POST'])
def qrCodeHandler():
    requestJson = request.get_json(force=True)
    code = requestJson['data']
    user = requestJson['name']


    # Modify the list based on store and who checked in/out

    return 'done'

@app.route('/nearby-stores', methods=['POST'])
def getStores():
    # Pull Each Stores Value
    stores = [1,2,3,4]
    return stores

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
    mc_server_status = get_mc_vm_status()
    app.run()
