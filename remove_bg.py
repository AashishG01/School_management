from rembg import remove
from PIL import Image
import os

input_path = 'logo.png'
output_path = 'logo_trans.png'

print(f"Removing background from {input_path}...")
try:
    with open(input_path, 'rb') as i:
        with open(output_path, 'wb') as o:
            input = i.read()
            output = remove(input)
            o.write(output)
    
    # Replace original if successful
    if os.path.exists(output_path):
        os.remove(input_path)
        os.rename(output_path, input_path)
        print("Successfully replaced original with transparent version.")
except Exception as e:
    print(f"Error: {e}")
