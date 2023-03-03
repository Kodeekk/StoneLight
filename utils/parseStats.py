users = open("/home/konstantin/PROJECTS/StoneLight/Pages/StoneLight/resources/global/users.txt", 'w')

# import requests, time, random

# pages_count = 25
# players_on_page = 0
# current_page_number = 1
# lens = []

# for i in range(pages_count):
#     print(current_page_number)
#     current_page_number+=1
#     if players_on_page == 0:
#         request = requests.get(f"https://minecraft-statistic.net/ru/server/23.109.126.244_25565/top/")
#     else:
#         request = requests.get(f"https://minecraft-statistic.net/ru/server/23.109.126.244_25565/top/{players_on_page}")
#     lens.append(f"players: {players_on_page}; len: {len(list(request.text))}")
#     players_on_page += 30
#     time.sleep(random.choice([0.01, 0.03]))
#     users.write(request.text)
# for i in range(26):
#     print(lens[i])


from bs4 import BeautifulSoup
import requests, time, random
with open("/home/konstantin/PROJECTS/StoneLight/Pages/StoneLight/temp.html", "r") as f:
    
    contents = f.read()
 
    soup = BeautifulSoup(contents, 'lxml')
 
    print(soup.tr)
    print(soup.td)
    print(soup.a)

    for tag in soup.find_all("tr"):
        print("\npLAYER!")
        lines = tag.text.splitlines(True)
        for i in range(len(lines)):
            lines[i] = lines[i].removesuffix('\n')
        
        headimg = f"https://mc-heads.net/avatar/{lines[3]}"
        bodyimg = f"https://mc-heads.net/body/{lines[3]}"
        print(f"head image: {headimg}")
        print(f"body image: {bodyimg}")
        print(f"username: {lines[3]}")
        print(f"time played: {lines[5]}")

        users.write(f'<span class="username">{lines[3]}</span>\n')
        users.write(f'<img src="{headimg}" alt="{lines[3]}" class="headimg">\n')
        users.write(f'<span class="timeplayed">{lines[5]}</span>\n')

users.close()