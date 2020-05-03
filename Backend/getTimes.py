from pymongo import MongoClient
import pandas as pd

def main(name, time):
    
    client = MongoClient("mongodb+srv://niranjank0609:test@cluster0-amdsl.gcp.mongodb.net/test?retryWrites=true&w=majority")
    db = client.get_database('store1')
    records = db.day1

    allValues = []
    cursor = records.find({"time":time})
    for document in cursor:
          allValues.append(document)
    valsasdf = pd.DataFrame(allValues)["_id"].iloc[0]
    print(valsasdf)
    
    records.update({id:ObjectId(valsasdf)}, {set: {"name":name}})

if __name__ == "__main__":
  main("uzair", "10:00")