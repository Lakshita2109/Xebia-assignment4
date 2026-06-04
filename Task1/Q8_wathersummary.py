import requests

weather_codes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    61: "Light rain",
    80: "Rain showers",
    95: "Thunderstorm"
}

params = {
    "latitude": 51.5074,
    "longitude": -0.1278,
    "current_weather": "true"
}

try:
    response = requests.get(
        "https://api.open-meteo.com/v1/forecast",
        params=params,
        timeout=10
    )

    response.raise_for_status()

    data = response.json()

    weather = data["current_weather"]

    temperature = weather["temperature"]
    code = weather["weathercode"]

    print("City       : London")
    print(f"Temperature: {temperature}°C")
    print(
        f"Condition  : {weather_codes.get(code, 'Unknown')}"
    )

except requests.exceptions.RequestException as e:
    print(f"Request failed: {e}")