from PIL import Image
import os

def crop_bottles():
    img = Image.open('re/etiquette.png')
    width, height = img.size
    print(f"Etiquette image size: {width}x{height}")
    
    bottle_width = width // 3
    
    bottles = [
        ('nord', 0, 0, bottle_width, height),
        ('centre', bottle_width, 0, bottle_width * 2, height),
        ('sud', bottle_width * 2, 0, width, height)
    ]
    
    os.makedirs('public/products', exist_ok=True)
    
    for name, left, top, right, bottom in bottles:
        cropped = img.crop((left, top, right, bottom))
        cropped.save(f'public/products/olina_{name}.png')
        print(f"Created: public/products/olina_{name}.png")

def crop_labels():
    img = Image.open('re/etiverbrun.png')
    width, height = img.size
    print(f"Etiverbrun image size: {width}x{height}")
    
    label_width = width // 3
    
    labels = [
        ('northern', 0, 0, label_width, height),
        ('central', label_width, 0, label_width * 2, height),
        ('southern', label_width * 2, 0, width, height)
    ]
    
    os.makedirs('public/labels', exist_ok=True)
    
    for name, left, top, right, bottom in labels:
        cropped = img.crop((left, top, right, bottom))
        cropped.save(f'public/labels/{name}.png')
        print(f"Created: public/labels/{name}.png")

if __name__ == '__main__':
    print("Cropping bottles...")
    crop_bottles()
    print("\nCropping labels...")
    crop_labels()
    print("\nDone!")
