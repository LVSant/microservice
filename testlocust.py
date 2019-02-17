from locust import HttpLocust, TaskSet, task

def getOne(l):
    l.client.get("/e4dff5d0-23bb-11e9-8d8d-29a2b8478645")

def getTwo(l):
    l.client.get("/f0c0d070-23bd-11e9-89e5-49c4b9dfa3f7")

def getThree(l):
    l.client.get("/fcd8ab80-23bd-11e9-89e5-49c4b9dfa3f7")

def getAll(l):
    l.client.get("/")

class UserTasks(TaskSet):
    # one can specify tasks like this
    tasks = [getOne, getTwo, getThree, getAll]
    
class WebsiteUser(HttpLocust):
    """
    Locust user class that does requests to the locust web server running on localhost
    """
    host = "http://18.228.10.55:3000"
    min_wait = 2000
    max_wait = 5000
    task_set = UserTasks
