# TODO APPLICATION

This todo application can create basic ToDo tasks according to dates. User can view all the task in current task list. When a particular task is done , he/she can mark it as completed after which it will go into _Completed Tasks List_. All the current tasks are listed in _Current Tasks List._. Once the task is completed, user can also delete the old completed task.

# Project Stack
* Database - MongoDB 
* Front End - React 
* Backend - Nodejs

# Features of the TODO Application:

  ## Create a Task according to the dates:
    1. Create a task - Write a title, description and select a date when the task will be completed.
  
   ![image](https://user-images.githubusercontent.com/98082102/174964315-87ea4546-29b2-496b-83ca-43578e1b56bf.png)

    2. You can view your task in the Current Tasks List:
    
   ![image](https://user-images.githubusercontent.com/98082102/174964689-6eaf1eef-f6e0-47a8-882b-295639fd4693.png)

  ## Edit your Current Task: 
 1.  Edit any task by selecting the edit task button on the todo list:

  ![image](https://user-images.githubusercontent.com/98082102/174965067-e313e8fc-c35d-4a85-abc6-427c788d1271.png)

 2. When the task is edited, you can view it in the current task list:
 
  ![image](https://user-images.githubusercontent.com/98082102/174965435-a657cae9-7b6f-4d89-b5ca-521888d2f75a.png)

  ## Delete any current task or completed task:
  1.1 Before deleting a current task:
  ![image](https://user-images.githubusercontent.com/98082102/174966313-506eeae8-bf31-4454-a1c4-435670630560.png)

  1.2. After deleting a current task: 
  ![image](https://user-images.githubusercontent.com/98082102/174966464-58b68240-ebcf-4c01-8b1a-7f58a8456cc9.png)
  
  
  2.1 Before Deleting a completed Task:
  ![image](https://user-images.githubusercontent.com/98082102/174967769-ff5f3cd9-9628-4b9d-932e-604b47e2430f.png)
  
  2.2 After deleting a completed Task:
  ![image](https://user-images.githubusercontent.com/98082102/174967914-3c9299e8-b662-4bd2-a037-8cb8949849e1.png)

  
 ## Mark any task as completed:
 
 1. Before Marking any Current Task as completed:
  ![image](https://user-images.githubusercontent.com/98082102/174967155-684eadee-4501-4413-a288-a9248e11a50d.png)
  
 2. After Marking any Task as completed, it will go into the completed task list.
 
 ![image](https://user-images.githubusercontent.com/98082102/174967447-b2e7145e-d5d7-4254-832f-2568d2f726b4.png)
 
 # How to run TODO Application 
 1. Clone the TODO repository 
 2. Open the Project in any IDE.
 3. In the server directory, open the index.js file. Now paste your MongoDB client Link in the _const url _ on line 4. This Link contains the credentials for your mongoDB database when you have created a MongoDB cluster.
 4. Open the terminal and go to the server directory then run **node index.js** command. If everything is working, you would be successfully connected to your mongoDb cluster.
 5. Now go to the client directory and run **npm i** and **npm start ** to install node modules and run the todo application in the 3000 port of your localhost.
 
