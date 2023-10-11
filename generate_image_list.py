import requests
from faker import Faker
import json

# Install the following packages:
# pip install requests faker

# Function to fetch image info
def get_image_info(image_id):
    print(f"Fetching image info for image ID: {image_id}")
    info_url = f"https://picsum.photos/id/{image_id}/info"
    response = requests.get(info_url)
    if response.status_code == 200:
        data = response.json()
        return {
            "id": image_id,
            "photo": f"https://picsum.photos/id/{image_id}/750/750.webp",
            "author": data.get("author"),
            "text": faker.paragraph()
        }
    else:
        return None

# Initialize Faker for generating Lorem Ipsum text
faker = Faker()

# Generate 1000 elements then save to a JSON file
json_data = []
for i in range(1000):
    image_id = i
    image_info = get_image_info(image_id)
    if image_info:
        json_data.append(image_info)
    if i % 100 == 0:
        print(f"Processed {i} images")
        with open("image_data.json", "w") as json_file:
          json.dump(json_data, json_file, indent=2)

# Duplicate the array twice to reach 4000 elements
json_data = json_data + json_data
json_data = json_data + json_data

# Save the JSON data to a file
with open("image_data.json", "w") as json_file:
    json.dump(json_data, json_file, indent=2)

print("JSON data generated and saved to 'image_data.json'")
