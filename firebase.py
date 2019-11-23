import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

db = None

def init():
    cred = credentials.Certificate('rateanything-5f6d3-firebase-adminsdk-tcm1b-c1bb239c1d.json')
    firebase_admin.initialize_app(cred)
    db = firestore.client()

def insertAction(content):
    users_ref = db.collection(u'Actions')
    users_ref.add()

for doc in docs:
    print(u'{} => {}'.format(doc.id, doc.to_dict()))
