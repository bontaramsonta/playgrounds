# venv = pyenv
import json
jess = '{"name": "Jessica Wilkins", "hobbies": ["music", "watching TV", "hanging out with friends"]}'
jess_dict = json.loads(jess)
print(jess_dict)