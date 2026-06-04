import requests

API_BASE_URL = "https://hr-internal.company.com/api"
API_TOKEN = "your_token_here"

def get_employee(employee_id):
    url = f"{API_BASE_URL}/employees/{employee_id}"

    # Fix: Add Authorization header required by the API.
    headers = {
        "Authorization": f"Bearer {API_TOKEN}"
    }

    response = requests.get(url, headers=headers)

    # Fix: Return None when employee is not found instead of causing a KeyError.
    if response.status_code == 404:
        return None

    data = response.json()

    return data.get("employee")