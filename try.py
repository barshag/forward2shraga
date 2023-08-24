from appwrite.client import Client
from appwrite.services.database import Database

# Initialize the Appwrite client
client = Client()
client.set_endpoint('https://back.forward2shraga.com/v1') # e.g. 'https://appwrite.io/v1'
client.set_project('64e5f5f143de3b93878f')
# client.set_key('YOUR_API_KEY')

# Initialize the database service
database = Database(client)

# Fetch a collection by its ID
collection_id = "tools" #64e5f63ced5a6c8b0dc8
response = database.get_collection(collection_id=collection_id)

# Print the collection details
print(response)






