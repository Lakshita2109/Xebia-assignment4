import requests

url = "https://jsonplaceholder.typicode.com/posts?userId=3"

try:
    response = requests.get(url, timeout=10)
    response.raise_for_status()

    posts = response.json()

    for post in posts:
        print(post["title"].upper())

    print(f"\nTotal posts: {len(posts)}")

except requests.exceptions.RequestException as e:
    print(f"Request failed: {e}")