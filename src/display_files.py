import os

# Wypisuje nazwy katalogów znajdujących się na tym samym poziomie
# co plik wykonywalny
dirs = [d for d in os.listdir('.') if os.path.isdir(d)]
print("Katalogi w bieżącym folderze:")
for d in dirs:
    print(d, flush=True)
# Prosi użytkownika o wybór katalogu
chosen_dir = input("Wybierz katalog: ")

# Wyświetla zawartość wybranego katalogu (również w podkatalogach)
print(f"Zawartość katalogu {chosen_dir}:")
content = ""
counter = 1
for root, dirs, files in os.walk(chosen_dir):
    for file in files:
        file_path = os.path.join(root, file)
        ext = os.path.splitext(file_path)[1]
        if ext.lower() in ['.txt', '.svg', '.py']:
            continue
        if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
            content += f"Plik obrazu: {file}\n"
        else:
            with open(file_path, 'r') as f:
                content += f"Zawartość pliku {file_path}:\n"
                content += f.read()
                content += "\n"

        if len(content) > 2024:
            print("///")
            print(content)
            print("///")
            content = ""
            counter += 1

print("///")
print(content)
print("///")
counter += 1
print(f"Liczba części: {counter}")
