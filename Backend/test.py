from pymongo import MongoClient
import pandas as pd

client = MongoClient("mongodb+srv://niranjank0609:test@cluster0-amdsl.gcp.mongodb.net/test?retryWrites=true&w=majority")
db = client.get_database('store1')
records = db.day1

allValues = []
cursor = records.find({"name":"NULL"},{"time" : 1})
for document in cursor:
        allValues.append(document)
valsasdf = pd.DataFrame(allValues)
times = valsasdf['time'].toList()

print(times)
